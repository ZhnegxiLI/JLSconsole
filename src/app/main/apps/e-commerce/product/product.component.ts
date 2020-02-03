import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, merge } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

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
    imageUrl : any;
    langLabels : Array<{"lang" : string, "label" : string}> = [
        {"lang" : 'fr', "label" : null},
        {"lang" : 'en', "label" : null},
        {"lang" : 'cn', "label" : null}
    ];
    taxRateTable : Array<any> = [];

    // Private
    private _unsubscribeAll: Subject<any>;

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
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
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
        console.log("enter page");
        // Subscribe to update product on changes
        this._ecommerceProductService.onProductChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(product => {

                if ( product )
                {
                    this.product = new Product(product);
                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.product = new Product();
                    this.imageUrl = 'assets/images/ecommerce/product-image-placeholder.png';
                }

                this.productForm = this.createProductForm();
            });
    
            
        // this._ecommerceProductService.getCategory()
        //     .then(category => {
        //         if(category)
        //         {
        //             this.categoryTable = category;
        //         }else{
        //             //TODO
        //         }
        //     })
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
            name                 : [this.product.name],
            productReferenceCode : [this.product.reference],
 //         handle               : [this.product.handle],
            images               : [this.product.images],
            description          : [this.product.description],
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

    addLangLabel(event, lang : string){
        var langLabel = this.langLabels.filter( label => label.lang == lang)[0];
        langLabel.label = event.target.value;
        console.log(this.langLabels);
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
          this.imageUrl = reader.result; 
          this.product.images.push({default : false, id : null, url : reader.result, type : imageData.type});
        }
    }

    changeMainCategory(event : any){
        this.mainCategory = event.value;
        this.productForm.get('category').setValue('');
    }


    mainCategoryTable() : Array<any>{
        var table = this.categoryTable.filter(category => category.category == "MainCategory");
        console.log(table);
        return table;
    }

    productCategoryTable(mainCategoryId : number) : Array<any>{
        var table = this.categoryTable.filter(category => category.category == "SecondCategory" || category.parentId == mainCategoryId);
        return table;
    }

    /**
     * Save product
     */
    saveProduct(): void
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

        console.log(data);

        this._ecommerceProductService.saveProduct(data)
            .then(() => {

                // Trigger the subscription with new data
                this._ecommerceProductService.onProductChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Product saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
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
