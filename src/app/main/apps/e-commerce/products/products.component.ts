import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';
import { locale as french } from './i18n/fr';

import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { takeUntil } from 'rxjs/internal/operators';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
    selector     : 'e-commerce-products',
    templateUrl  : './products.component.html',
    styleUrls    : ['./products.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EcommerceProductsComponent implements OnInit
{
    displayedColumns = ['reference', 'image', 'name', 'MainCategory','SecondCategory' , 'price', 'active'];
    imageRoot = this._ecommerceProductsService.host + "images/";
 
    private totalCount : number = 0;

    private productList : any[] = [];
    private mainCategoryList: any[];
    private secondCategoryList: any[];
    private referenceItemList : any[];
    private statusList : any[] = [{
        Value : true,
        Label : 'Valide'
    },{
        Value : false,
        Label :'Invalide'
    }
    ];

    private searchCriteria = {
        MainCategoryReferenceId: 0,
        SecondCategoryReferenceId : [],
        Validity: true,
        ProductLabel : '',
        begin : 0,
        step : 10,
        Lang :''
    };



    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

  

    constructor(
        private _ecommerceProductsService: EcommerceProductsService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private _fuseProgressBarService: FuseProgressBarService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, chinese,french);
    }

 
    ngOnInit(): void
    {
        this.initLoadData();
    }

    initLoadData(){
        var criteria = {
            Lang: this._translateService.getDefaultLang(),
            ShortLabels:['MainCategory','SecondCategory']
        };
        this._ecommerceProductsService.getReferenceItemsByCategoryLabels(criteria).subscribe(result=>{
            if(result!=null && result.length>0){
                this.referenceItemList = result;
                this.mainCategoryList = result.filter(p=> p.ReferenceCategoryLabel == "MainCategory");
            }
        },
        error=>{
            // todo 
        });
    }

    getSecondCategoryList(){
        if(this.searchCriteria.MainCategoryReferenceId!=null&& this.searchCriteria.MainCategoryReferenceId!=0){
          return this.referenceItemList.filter(p=>p.ParentId ==this.searchCriteria.MainCategoryReferenceId);
        }
        return [];
    }

    /* At least main category or search is fill to lauch search */
    checkIfConditionIsFill(){
        if(this.searchCriteria.ProductLabel!=''||this.searchCriteria.MainCategoryReferenceId!=0){
            return false;
        }
        return true;
    }


    search(){
        this._fuseProgressBarService.show();
        this.searchCriteria.Lang =  this._translateService.currentLang;
        this._ecommerceProductsService.AdvancedProductSearchByCriteria(this.searchCriteria).subscribe(result=>{
            if(result!=null ){
                this.productList = result.ProductList;
                this.totalCount = result.TotalCount;
                
                console.log(this.productList);
                this._fuseProgressBarService.hide();
            }
        
        },
        error=>{

        });
    }

    getServerData(event){
        this.searchCriteria.begin = event.pageIndex;
        this.searchCriteria.step = event.pageSize;
        this.search();
    }

    sortData(event){
        // todo implement the logic 
        console.log(event);
    }
}


