import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';
import { locale as french } from './i18n/fr';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { ReferenceService } from 'app/Services/reference.service';
import { ProductService } from 'app/Services/product.service';
import { OrderService } from 'app/Services/order.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'app/Services/user.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
    selector     : 'e-commerce-orders',
    templateUrl  : './orders.component.html',
    styleUrls    : ['./orders.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EcommerceOrdersComponent implements OnInit
{
    displayedColumns = ['id',  'createdOn' , 'updatedOn', 'lastModified', 'entrepriseName', 'userName','total', 'status'];

    public view: string = "orders";

    private orderList:any[] = [];
    private totalCount : number = 0;
    private statusList : any[] = [];
    private userList : any[] = [];
    private userSelectSearchText : string = '';


    private searchCriteria = {
        FromDate: '',
        ToDate : '',
        StatusId : null,
        UserId : null,
        OrderId :null,
        begin : 0,
        step : 10,
        Lang :''
    };


    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    constructor(
        private referenceService : ReferenceService,
        private productService : ProductService,
        private orderService : OrderService,
        private userService  : UserService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private _fuseProgressBarService: FuseProgressBarService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english,chinese,french);
    }


    /**
     * On init
     */
    ngOnInit(): void
    {
        this.initLoadData();
    }

    initLoadData(){
        this.referenceService.getReferenceItemsByCategoryLabels({
            Lang: this._translateService.currentLang,
            ShortLabels:['OrderStatus']
        }).subscribe(result=>{
            if(result!=null){
                console.log(result);
                this.statusList = result;
            }
        },
        error=>{
            //todo 
        });

        this.userService.getUserListByRole(['Client','Admin']).subscribe(result=>{
            if(result!=null){
                console.log(result);
                this.userList = result;
            }
        },
        error=>{
            //todo
        });
    }

    checkUserSearchText () {
        return this.userList.filter(p=>{
            return p.UserName.includes(this.userSelectSearchText);
        })
    }

    getServerData(event){
        this.searchCriteria.begin = event.pageIndex;
        this.searchCriteria.step = event.pageSize;
        this.search();
    }

    search(){
        this.searchCriteria.Lang = this._translateService.currentLang;
        this._fuseProgressBarService.show();
        this.orderService.advancedOrderSearchByCriteria(this.searchCriteria).subscribe(result=>{
            if(result!=null && result.OrderList !=null && result.TotalCount != null){
                this.orderList = result.OrderList;
                this.totalCount = result.TotalCount;
                console.log(this.orderList);
            }
            this._fuseProgressBarService.hide();
        },
        error=>{
            //todo 
        })
    }

}

