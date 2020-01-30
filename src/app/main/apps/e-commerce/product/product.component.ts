import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    categoryTable : any; 
    firstCategory : string = "";
    secondCategory : string = "";
    imageData : File;
    imageUrl : any;

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
                    this.product = new Product(product);
                    this.imageUrl = this.product.image;
                    this.pageType = 'edit';
                }
                else
                {
                    this.pageType = 'new';
                    this.product = new Product();
                }

                this.productForm = this.createProductForm();
            });
        
            this.categoryTable = 
            {
                "assiete" : {
                    "little assiete" : ['assieteA', 'assieteB'],
                    "big assiete" : ['bigassieteA', 'bigassieteB']
                },
                "apple" : {
                    "little apple" : ['appleA', 'appleB'],
                    "big apple" : ['bigappleA', 'bigappleB']
                }
            };
            
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
            id              : [this.product.id],
            name            : [this.product.name],
            productReferenceCode       : [this.product.reference],
 //           handle          : [this.product.handle],
            description     : [this.product.description],
            category        : [this.product.category],
            price           : [this.product.price],
            taxRate         : [this.product.taxRate],
            size            : [this.product.size],
            color           : [this.product.color],
            material        : [this.product.material],
            quantityPerBox  : [this.product.quantityPerBox],
            minQuantity     : [this.product.minQuantity],
            validity        : [this.product.active]
        });
    }

    uploadImage(event : any){
        this.imageData = event.target.files[0];
        this.preview();
    }

    preview() {
        // Show preview 
        var mimeType = this.imageData.type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }
     
        var reader = new FileReader();      
        reader.readAsDataURL(this.imageData); 
        reader.onload = (_event) => { 
          this.imageUrl = reader.result; 
        }
    }

    changeFirstCategory(event : any){
        this.firstCategory = event.value;
        this.secondCategory = '';
        this.productForm.get('category').setValue('');
    }

    changeSecondCategory(event : any){
        this.secondCategory = event.value;
        this.productForm.get('category').setValue('');
    }

    firstCategoryTable() : Array<string>{
        let keys = Array<string>();
        for(let key in this.categoryTable){
            keys.push(key);
        }
        return keys;
    }

    secondCategoryTable(firstCategory : string) : Array<string>{
        if (firstCategory == ""){
            return [];
        }
        let keys = Array<string>();
        for(let key in this.categoryTable[firstCategory]){
            keys.push(key)
        }
        return keys;
    }

    ProductCategoryTable(firstCategory : string, secondCategory : string) : Array<String>{
        if(firstCategory == "" || secondCategory == ""){
            return [];
        }
        return this.categoryTable[firstCategory][secondCategory];
    }
    /**
     * Save product
     */
    saveProduct(): void
    {
        
        //data = eval("data" + "imageData" + this.imageData);
        //data.handle = FuseUtils.handleize(data.name);

        const data: FormData = new FormData();

        data.append('file', this.imageData, this.imageData.name);
        data.append('product', JSON.stringify(this.productForm.getRawValue()));

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
        const data = this.productForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

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
