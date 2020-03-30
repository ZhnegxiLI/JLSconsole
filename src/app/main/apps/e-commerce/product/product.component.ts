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
import { locale as french } from './i18n/fr';

//import { MatFileUploadModule } from 'angular-material-fileupload';
import { Product } from 'app/main/apps/e-commerce/product/product.model';

import { ActivatedRoute, Params, Router } from "@angular/router";
import { Validators } from '@angular/forms';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpEventType } from '@angular/common/http';
import { ProductService } from 'app/Services/product.service';
import { ReferenceService } from 'app/Services/reference.service';

import { environment } from '../../../../../environments/environment';

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

    private previousView:string = "";
    public view: string = "product";
    private productId : number = 0;
    private mainCategoryList : any[] = [];
    private secondCategoryList : any[] = [];
    private referenceItemList : any[] = [];
    private taxRateList : any [] = [];
    private productInfo : any = {};
    private photoPath : any = [];

    private uploadLoading:boolean = false;
    
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

    constructor(
        private referenceService : ReferenceService,
        private productService : ProductService,
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
            ProductId : ['0'],
            ReferenceId : ['0'],
            QuantityPerBox : [''],
            MinQuantity : ['',Validators.required],
            Price : ['' , Validators.required],
            TaxRateId : ['',Validators.required],
            Size: [''],
            Color : [''],
            Material : [''],
            Validity : ['']
          });

        this._fuseTranslationLoaderService.loadTranslations(english, chinese,french);

    }

    ngOnInit(): void
    {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            this.productId = params['Id'];
            this.previousView = params['View'];
     
            console.log("previous view:" + this.previousView);
            if(this.productId!=null && this.productId !=0 ){
                // todo new product 
                this.getProdudctData();
            }
            else{
                // new product 
                this.productName = "New product"; // todo translate
            }
          });
        this.initLoadData();
    }

    getProdudctData(){

        this.productService.GetProductById(this.productId).subscribe(result =>{
            console.log(result);
            this.productInfo = result;
            if(result!=null){
                this.productName = this.getDefaultProductName();
                // todo change
                if(result.ImagesPath!=null && result.ImagesPath.length>0){

                    var photoList = [];
                    result.ImagesPath.map(p=>{
                        photoList.push({CompletePath :environment.url + p.Path, ProductPhotoId: p.Id});
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
                delete result.TaxRate;
                this.productForm.setValue(result);
            }
            console.log(this.productForm.value);
        },      
        error=>{

        });
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
        this.referenceService.getReferenceItemsByCategoryLabels(criteria).subscribe(result=>{
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
        this.uploadLoading = true;
        this.productService.UploadPhoto(formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){
            this.progress = Math.round(100 * event.loaded / event.total);
            console.log(this.progress)
        }
        else if (event.type === HttpEventType.Response) {
            this._matSnackBar.open(this._translateService.instant('PRODUCT.Msg_UploadSuccess'), 'OK', {
                duration        : 2000
            });
            this.getImagePath();
            console.log("upload successfully");// todo change 
        }
        this.uploadLoading = false;
      },
      error=>{

        this._matSnackBar.open(this._translateService.instant('PRODUCT.Msg_UploadFail'), 'OK', {
            duration        : 2000
        });
        this.uploadLoading = false;
      });
      
    }

    openImageViewDialog(image){
        console.log(image);

        const dialogRef = this.dialog.open(ImageOverViewDialog, {
         
            data: {image : image}
        });
    
        dialogRef.afterClosed().subscribe(result => {
            if( result!=null && result.action!= null && result.action == "remove"){
                this.getProdudctData();
            }
        });
    }

    getImagePath(){
        this.productService.GetProductPhotoPathById({ProductId : this.productId}).subscribe(result=>{
            if(result!= null && result.length>0){
                result.map(p=>{
                    p.CompletePath = environment.url + p.Path;
                    p.ProductPhotoId = p.Id
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
        var criteria = this.productForm.value;
        criteria.CreatedOrUpdatedBy = localStorage.getItem('userId');
        this.productService.UpdateOrCreateProduct(criteria).subscribe(result=>{
            if(result>0){

                this._matSnackBar.open(this._translateService.instant('PRODUCT.ActionSuccess'), 'OK', { 
                    duration        : 2000
                });

              //  this.router.navigate(['apps/e-commerce/products']); // todo
                
            }
            else{
                // error 
                
                this._matSnackBar.open(this._translateService.instant('PRODUCT.ActionFail'), 'OK', {
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
    imageRoot = environment.url + "images/";
    image : any;
    imagePath : string;

    private removeImageLoading: boolean = false;

    constructor(
      public dialogRef: MatDialogRef<ImageOverViewDialog>,
      private productService : ProductService,
      private _matSnackBar: MatSnackBar,
      private _translateService: TranslateService,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private dialog: MatDialog) {}

      ngOnInit(): void{
        this.image = this.data.image;
      }
      

    remove(): void {
        const dialogRef = this.dialog.open(ConfimDialog, {
            data: {title :  this._translateService.instant('PRODUCT.Msg_RemoveTitle'),  
                    message : this._translateService.instant('PRODUCT.Msg_RemoveMessage')}
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if(result!=null && result.action!=null &&result.action == 'yes' && this.image.ProductPhotoId!=null){
                this.removeImageLoading = true;
                this.productService.RemoveImageById( this.image.ProductPhotoId).subscribe(result=>{
                    if(result>0){
                        this._matSnackBar.open(this._translateService.instant('PRODUCT.Msg_RemovePhotoSuccess'), 'OK', { // todo translate
                            duration        : 2000
                        });
                    }
                    else{
                        this._matSnackBar.open(this._translateService.instant('PRODUCT.Msg_RemovePhotoFail'), 'OK', { // todo translate
                            duration        : 2000
                        });
                    }
                    this.removeImageLoading = false;
                },
                error=>{
                    this._matSnackBar.open(this._translateService.instant('PRODUCT.Msg_RemovePhotoFail'), 'OK', { // todo translate
                        duration        : 2000
                    });
                    this.removeImageLoading = false;    
                });
                //
                this.dialogRef.close({action : 'remove', image : this.image.ProductPhotoId});
            }
          });
        
    }

    close(): void{
        this.dialogRef.close({action : 'None'});
    }
  
  }
