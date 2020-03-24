import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { environment } from '../../../../../environments/environment';
import { ConfimDialog } from 'app/dialog/confim-dialog/confim-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  displayedColumns = ['image', 'product', 'price','quantity','total','action'];

  private environment = environment;
  private cartProductList : any[] = [];
  constructor(
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getCartData();
  }

  getCartData(){
    var cartStringfy = localStorage.getItem('cart');
    if(cartStringfy!= null){
      var cartObject = JSON.parse(cartStringfy);
     
      this.cartProductList = cartObject;
    }

    console.log(this.cartProductList);
  }

  ValideOrder(){

  }
  DeleteFromCart(product,event){
    console.log(product);

    const dialogRef = this.dialog.open(ConfimDialog, {
      data: {title : "Remove?",
              message : "Are you sure to remove the product?"} // todo translate
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.action == 'yes'){
        this.cartProductList = this.cartProductList.filter(p=>p.ReferenceId != product.ReferenceId);
        localStorage.setItem('cart',JSON.stringify(this.cartProductList));
      }
    });
  }

}
