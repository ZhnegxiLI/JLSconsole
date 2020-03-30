import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { environment } from '../../../../../environments/environment';
import { ConfimDialog } from 'app/dialog/confim-dialog/confim-dialog.component';
import { MatDialog } from '@angular/material';
import { ProductService } from 'app/Services/product.service';
import { TranslateService } from '@ngx-translate/core';

import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';
import { locale as french } from './i18n/fr';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  displayedColumns = ['image', 'product', 'price', 'quantity', 'total', 'action'];

  private view: string = "cart";

  private environment = environment;
  private cartProductList: any[] = [];
  constructor(
    private _translateService: TranslateService,
    private productService: ProductService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private dialog: MatDialog) {

    this._fuseTranslationLoaderService.loadTranslations(english, chinese, french);
  }

  ngOnInit() {
    this.getCartData();
  }

  getCartData() {
    var cartStringfy = localStorage.getItem('cart');
    if (cartStringfy != null) {
      var cartObject = JSON.parse(cartStringfy);

      this.cartProductList = cartObject;

      this.productService.GetProductInfoByReferenceIds({
        ReferenceIds: this.getProductReferenceIdList(cartObject),
        Lang: this._translateService.currentLang
      }).subscribe(result => {
        console.log(this.cartProductList);
        console.log(result);

        this.mapQuantityForNewInfomation(result);
      },
        error => {

        });

    }

    console.log(this.cartProductList);
  }

  ValideOrder() {

  }

  checkInput(event){
    console.log(event)
  }

  mapQuantityForNewInfomation(newResult) {
    if (newResult != null) {
      newResult.forEach(p => {
        var temp = this.cartProductList.find(r => r.ReferenceId == p.ReferenceId);
        if (temp != null) {
          p.Quantity = temp.Quantity;

          if (p.Quantity < p.MinQuantity) {
            p.Quantity = p.MinQuantity;
          }
        }
      });
      this.cartProductList = newResult;
      localStorage.setItem('cart', JSON.stringify(this.cartProductList));
    }
  }

  getProductReferenceIdList(productList) {
    var result = [];
    productList.forEach(p => {
      result.push(p.ReferenceId);
    });
    return result;
  }

  quantityChange(product) {
    if(product.Quantity < product.MinQuantity){
      product.Quantity = product.MinQuantity;
    }

    if (product.Quantity != null && product.Quantity != "" && product.Quantity >= product.MinQuantity) {
      localStorage.setItem('cart', JSON.stringify(this.cartProductList));
    }
  }

  addOrMinusProduct(product, action) {
    if (action == 'add') {
      product.Quantity = product.Quantity + 1;
    }
    else if (action == 'minus') {
      product.Quantity = product.Quantity - 1;
    }
    this.quantityChange(product);
  }
  DeleteFromCart(product, event) {
    console.log(product);

    const dialogRef = this.dialog.open(ConfimDialog, {
      data: {
        title: this._translateService.instant('CART.Msg_TitleRemoveProductInCart'), 
        message: this._translateService.instant('CART.Msg_RemoveProductInCart')
      } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.action == 'yes') {
        this.cartProductList = this.cartProductList.filter(p => p.ReferenceId != product.ReferenceId);
        localStorage.setItem('cart', JSON.stringify(this.cartProductList));
      }
    });
  }

}
