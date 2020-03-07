import { state } from '@angular/animations';
import { ConfimDialog } from './../../../../dialog/confim-dialog/confim-dialog.component';
import { Action } from '@ngrx/store';
import { Component, OnDestroy, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';

import { ActivatedRoute, Params } from "@angular/router";
import { Validators } from '@angular/forms';

@Component({
    selector     : 'e-commerce-product',
    templateUrl  : './product.component.html',
    styleUrls    : ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class EcommerceProductComponent implements OnInit
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
    
    private productId : number = 0;
    private mainCategoryList : any[] = [];
    private secondCategoryList : any[] = [];
    private referenceItemList : any[] = [];
    private taxRateList : any [] = [];
    private productInfo : any = {};

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
        private _ecommerceProductService: EcommerceProductsService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private dialog: MatDialog,
        private activeRoute : ActivatedRoute,
        private formBuilder:FormBuilder, 
    )
    {
        // Set the default
        this.product = new Product();

        this.productForm = this.formBuilder.group({
            Labelfr: ['', Validators.required],
            Labelcn: [''],
            Labelen : [''],
            ReferenceCode : ['',Validators.required], 
            Description : [''],
            MainCategoryId: ['',Validators.required],
            SecondCategoryId : ['',Validators.required],
            ProductId : [''],
            ReferenceId : [''],
            QuantityPerBox : [''],
            MinQuantity : [''],
            Price : ['' , Validators.required],
            TaxRate : ['',Validators.required],
            Size: [''],
            Color : [''],
            Material : ['']
          });

        this._fuseTranslationLoaderService.loadTranslations(english, chinese);

    }

    ngOnInit(): void
    {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            this.productId = params['Id'];
            if(this.productId!=null && this.productId !=0 ){
                // todo new product 

                this._ecommerceProductService.GetProductById(this.productId).subscribe(result =>{
                    console.log(result);
                    this.productInfo = result;
                    if(result!=null){
                        if(result.Translation!= null&& result.Translation.length>0){
                            result.Translation.map(val => {
                                result['Label'+val.Lang] = val.Label;
                            });
                        }
                        delete result.Translation;     
                        delete result.ImagesPath;
                        this.productForm.setValue(result);
                    }
                    console.log(this.productForm.value);
                },
                error=>{

                });
            }
          });
        this.initLoadData();
    }

    initLoadData() : void
    {
        var criteria = {
        Lang: this._translateService.getDefaultLang(),
        ShortLabels:['MainCategory','SecondCategory','TaxRate']
        };
        this._ecommerceProductService.getReferenceItemsByCategoryLabels(criteria).subscribe(result=>{
            if(result!=null && result.length>0){
                this.referenceItemList = result;
                this.mainCategoryList = result.filter(p=> p.ReferenceCategoryLabel == "MainCategory");
                this.taxRateList = result.filter(p=> p.ReferenceCategoryLabel == "TaxRate");

                console.log(this.mainCategoryList); // todo remove
                console.log(this.taxRateList); // todo remove
            }
        },
        error=>{

        })
    }


    getSecondCategoryList(){

        var categoryId = this.productForm.controls['MainCategoryId'].value;
        if(categoryId!=null&& categoryId!=0){
          return this.referenceItemList.filter(p=>p.ParentId ==categoryId);
        }
        return [];
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
      private _ecommerceProductService: EcommerceProductsService,
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
