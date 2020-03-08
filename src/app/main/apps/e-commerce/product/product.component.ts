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

import { ActivatedRoute, Params, Router } from "@angular/router";
import { Validators } from '@angular/forms';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpEventType } from '@angular/common/http';

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
    private photoPath : any = [];
    
    private validityList : any[] = [{
        Value : true,
        Label : 'Valide'
    },{
        Value : false,
        Label :'Invalide'
    }
    ];
    private productName : string ="";
    private imgURL :any;
    private progress : any;

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
        private _fuseProgressBarService: FuseProgressBarService,
        private router : Router
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
            Material : [''],
            Validity : ['']
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
                        this.productName = this.getDefaultProductName();
                        // todo change
                        if(result.ImagesPath!=null && result.ImagesPath.length>0){

                            var photoList = [];
                            result.ImagesPath.map(p=>{
                                photoList.push({CompletePath :this._ecommerceProductService.host + p});
                            });
                            this.photoPath = photoList;
                        }

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
            else{
                // new product 
                this.productName = "New product"; // todo translate
            }
          });
        this.initLoadData();
    }

    getDefaultProductName(){
        if(this.productInfo!=null && this.productInfo.Translation!=null && this.productInfo.Translation.length>0){
           var productLabelObject = this.productInfo.Translation.find(p=>p.Lang == this._translateService.currentLang);
           if(productLabelObject == null){
            productLabelObject = this.productInfo.Translation[0];
           }
           return productLabelObject.Label;
        }
        return "";
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

        });
    }


    uploadImage(file) {
        console.log(file);

        if (file.length == 0) {
            return;
        }
        let fileToUpload = <File>file[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append('ProductId', this.productId.toString());


        this._fuseProgressBarService.show();
        this._ecommerceProductService.UploadPhoto(formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){
            this.progress = Math.round(100 * event.loaded / event.total);
            console.log(this.progress)
        }
        else if (event.type === HttpEventType.Response) {
            this._matSnackBar.open('Upload successfully', 'OK', { // todo translate
                duration        : 2000
            });
            this.getImagePath();
            console.log("upload successfully");// todo change 
        }
      });
      
        //   const reader = new FileReader();
        //   var imagePath = file;
        //   reader.readAsDataURL(file[0]);
        //   reader.onload = () => {
        //     this.imgURL = reader.result;
        //     console.log(this.imgURL);
        //   };
        
    }

    getImagePath(){
        this._ecommerceProductService.GetProductPhotoPathById({ProductId : this.productId}).subscribe(result=>{
            if(result!= null && result.length>0){
                result.map(p=>{
                    p.CompletePath = this._ecommerceProductService.host + p.Path;
                });
                this.photoPath = result;
                this._fuseProgressBarService.hide();
                console.log(this.photoPath);
            }
        },
        error=>{
            // todo change 
        });
    }
    

    getSecondCategoryList(){

        var categoryId = this.productForm.controls['MainCategoryId'].value;
        if(categoryId!=null&& categoryId!=0){
          return this.referenceItemList.filter(p=>p.ParentId ==categoryId);
        }
        return [];
    }

    saveProduct(){
        console.log(this.productForm.value);
        this._fuseProgressBarService.show();
        this._ecommerceProductService.UpdateOrCreateProduct(this.productForm.value).subscribe(result=>{
            if(result>0){

                this._matSnackBar.open('Save successfully', 'OK', { // todo translate
                    duration        : 2000
                });

              //  this.router.navigate(['apps/e-commerce/products']); // todo
                
            }
            else{
                // error 
                
                this._matSnackBar.open('Errors occued please retry again', 'Fail', { // todo translate
                    duration        : 2000
                });
            }
            this._fuseProgressBarService.hide();
        },
        error=>{

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
