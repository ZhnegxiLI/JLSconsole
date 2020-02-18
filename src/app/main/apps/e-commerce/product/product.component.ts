import { state } from '@angular/animations';
import { ConfimDialog } from './../../../../dialog/confim-dialog/confim-dialog.component';
import { Action } from '@ngrx/store';
import { Component, OnDestroy, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, merge } from 'rxjs';
import { takeUntil, filter, map } from 'rxjs/operators';


import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';

//import { MatFileUploadModule } from 'angular-material-fileupload';
import { Product } from 'app/main/apps/e-commerce/product/product.model';
import { EcommerceProductService } from 'app/main/apps/e-commerce/product/product.service';

@Component({
    selector     : 'e-commerce-product',
    templateUrl  : './product.component.html',
    styleUrls    : ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class EcommerceProductComponent implements OnInit, OnDestroy
{
    product: Product;
    pageType: string;
    productForm: FormGroup;
    categoryTable : Array<any>; 
    mainCategory : string = "";
    imageDatas : Array<File> = [];
    langLabels : Array<{"lang" : string, "label" : string}>;
    taxRateTable : Array<any> = [];
    loading : boolean = false;
    

    // Private
    private _unsubscribeAll: Subject<any>;
    imageRoot = this._ecommerceProductService.host + "images/";

    /**
     * Constructor
     *
     * @param {EcommerceProductService} _ecommerceProductService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _ecommerceProductService: EcommerceProductService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private dialog: MatDialog
    )
    {
        // Set the default
        this.product = new Product();

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        this._fuseTranslationLoaderService.loadTranslations(english, chinese);

        this.categoryTable = _ecommerceProductService.category;
        this.taxRateTable = _ecommerceProductService.taxRateTable;

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to update product on changes
        this._ecommerceProductService.onProductChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(product => {

                if ( product )
                {
                    console.log(product);
                    this.product = new Product(product);
                    var productCategory = this.categoryTable.find(c => c.id == this.product.category);
                    this.mainCategory = this.categoryTable.find(c => c.id == productCategory.parentId).id;

                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.product = new Product();
                }

                this.productForm = this.createProductForm();

            });

            // while(this.productForm == null){
            //     console.log(this.productForm)
            // };

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create product form
     *
     * @returns {FormGroup}
     */
    createProductForm(): FormGroup
    {
        return this._formBuilder.group({
            id                   : [this.product.id],
            frName               : [this.product.frName],
            cnName               : [this.product.cnName],
            enName               : [this.product.enName],
            productReferenceCode : [this.product.reference],
 //         handle               : [this.product.handle],
            description          : [this.product.description],
            mainCategory         : [this.mainCategory],
            category             : [this.product.category],
            price                : [this.product.price],
            taxRate              : [this.product.taxRate],
            size                 : [this.product.size],
            color                : [this.product.color],
            material             : [this.product.material],
            quantityPerBox       : [this.product.quantityPerBox],
            minQuantity          : [this.product.minQuantity],
            validity             : [this.product.active]
        });
    }

    getTaxRateTable() : Array<number>{
        return this.taxRateTable.map(item => item.value);
    }

    getCurrentName() : string{
        var curentLang = this._translateService.currentLang;
        if (curentLang == 'fr'){
            return this.productForm.value.frName;
        }else if(curentLang == 'en'){
            return this.productForm.value.enName;
        }else if(curentLang == 'cn'){
            return this.productForm.value.cnName;
        }
    }

    uploadImage(event : any){
        var imageData = event.target.files[0];
        this.imageDatas.push(imageData);
        this.preview(imageData);
    }

    preview(imageData : File) {
        // Show preview 
        var mimeType = imageData.type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }
     
        var reader = new FileReader();      
        reader.readAsDataURL(imageData); 
        reader.onload = (_event) => { 
          this.product.images.push({status : "new", id : null, path : reader.result,name : imageData.name});
        }
    }

    changeMainCategory(event : any){
        this.mainCategory = event.value;
        this.productForm.get('category').setValue('');
    }


    mainCategoryTable() : Array<any>{
        var table = this.categoryTable.filter(category => category.category == "MainCategory");
        return table;
    }

    productCategoryTable(mainCategoryId : number) : Array<any>{
        var table = this.categoryTable.filter(category => category.category == "SecondCategory" && category.parentId == mainCategoryId);
        return table;
    }

    openImageViewDialog(image : any): void {
        const dialogRef = this.dialog.open(ImageOverViewDialog, {
          data: {
              image: image
            }
        });
    
        dialogRef.afterClosed().subscribe(result => {
            if(result.action == "remove"){
                console.log(image);
                if(image.status == "save"){
                    this._ecommerceProductService.removeImage(image.id).then(result => {
                        if(result.success){
                            var removeImageIndex = this.product.images.findIndex(img => img.id == image.id);
                            this.product.images.splice(removeImageIndex, 1);
                            this._matSnackBar.open('Remove successif', 'OK', {
                                verticalPosition: 'top',
                                duration        : 2000
                            });
                        }else{
                            this._matSnackBar.open('Remove fail', 'OK', {
                                verticalPosition: 'top',
                                duration        : 2000
                            });
                        }
                    });
                }else{
                    var imgName = image.name;
                    var removeImageIndex = this.product.images.findIndex(img => img.id == image.id);
                    this.product.images.splice(removeImageIndex, 1);
                    var imageDataIndex = this.imageDatas.findIndex(img => img.name == imgName);
                    this.imageDatas.splice(imageDataIndex);
                }
                
            }

        });
    }

    /**
     * Save product
     */
    saveProduct(): void
    {
        const dialogRef = this.dialog.open(ConfimDialog, {
            data: {title : "confim",
                    message : "sure save the product?"}
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if(result.action == 'yes'){
                if(!this._ecommerceProductService.checkNetWork()){
                    return;
                }
                this.loading = true;
                const data: FormData = new FormData();
        
                this.imageDatas.forEach(image => {
                    data.append(image.name, image, image.name);
                });
        
                var formValues = this.productForm.getRawValue();
        
                this.langLabels = [
                    {"lang" : 'fr', "label" : formValues.frName},
                    {"lang" : 'en', "label" : formValues.enName},
                    {"lang" : 'cn', "label" : formValues.cnName}
                ];
        
                data.append('product', JSON.stringify(formValues));
                data.append('langLabel', JSON.stringify(this.langLabels));
        
                console.log(data);
        
                this._ecommerceProductService.saveProduct(data)
                    .then(() => {
        
                        // Trigger the subscription with new data
                        this._ecommerceProductService.onProductChanged.next(data);
                        this.loading = false;
                        // Show the success message
                        this._matSnackBar.open('Product saved', 'OK', {
                            verticalPosition: 'top',
                            duration        : 2000
                        });
                    });
            }
          });
        
    }

    

    /**
     * Add product
     */
    addProduct(): void
    {
        if(!this._ecommerceProductService.checkNetWork()){
            return;
        }
        const data: FormData = new FormData();

        this.imageDatas.forEach(image => {
            data.append(image.name, image, image.name);
        });

        data.append('product', JSON.stringify(this.productForm.getRawValue()));
        data.append('langLabel', JSON.stringify(this.langLabels));

        this._ecommerceProductService.addProduct(data)
            .then(() => {

                // Trigger the subscription with new data
                this._ecommerceProductService.onProductChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Product added', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });

                // Change the location with new one
                this._location.go('apps/e-commerce/products/' + this.product.id + '/' + this.product.handle);
            });
    }
}

@Component({
    selector: 'image-over-view-dialog',
    templateUrl : 'image-over-view-dialog.html'
  })

  export class ImageOverViewDialog {
    imageRoot = this._ecommerceProductService.host + "images/";
    image : any;
    imagePath : string;

    constructor(
      public dialogRef: MatDialogRef<ImageOverViewDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private _ecommerceProductService: EcommerceProductService,
      private dialog: MatDialog) {
        this.image = data.image;
        if(this.image.status == 'save'){
            this.imagePath = this.imageRoot + this.image.path;
        }else{
            this.imagePath = this.image.path;
        }
      }

      ngOnInit(): void{
        
      }
      

    remove(): void {
        const dialogRef = this.dialog.open(ConfimDialog, {
            data: {title : "confim remove",
                    message : "sure remove the image"}
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if(result.action == 'yes'){
                this.dialogRef.close({action : 'remove', image : this.image.id});
            }
          });
        
    }

    close(): void{
        this.dialogRef.close({action : 'None'});
    }
  
  }
