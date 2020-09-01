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
import { ExportService } from 'app/Services/export.service';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
    selector     : 'e-commerce-orders',
    templateUrl  : './orders.component.html',
    styleUrls    : ['./orders.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EcommerceOrdersComponent implements OnInit
{
    displayedColumns = ['id',  'createdOn' , 'updatedOn', 'lastModified',  'userName', 'entrepriseName','total', 'type','status'];

    public view: string = "orders";

    public orderList:any[] = [];
    public totalCount : number = 0;
    public statusList : any[] = [];
    public userList : any[] = [];
    public userSelectSearchText : string = '';

    public orderStatusClass: any[] = [
        { Code: 'OrderStatus_Valid', Class: 'green-500' },
        { Code: 'OrderStatus_Refus', Class: 'red-500' },
        { Code: 'OrderStatus_Progressing', Class: 'orange-500' },
    ]


    public searchCriteria = {
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
        public datePipe: DatePipe,
        public referenceService : ReferenceService,
        public productService : ProductService,
        public orderService : OrderService,
        public userService  : UserService,
        public _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public _translateService: TranslateService,
        public _fuseProgressBarService: FuseProgressBarService,
        public exportService: ExportService,
        public _matSnackBar: MatSnackBar,
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english,chinese,french);
    }


    /**
     * On init
     */
    ngOnInit(): void
    {
        var criteriaStringfy = localStorage.getItem('OrderCriteria');
        if(criteriaStringfy!=null){
            this.searchCriteria = JSON.parse(criteriaStringfy);

            localStorage.removeItem('OrderCriteria');
            this.search();
        }
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


    matchStatusClass(Code) {
        if (this.orderStatusClass != null && Code != null) {
            var temp = this.orderStatusClass.find(p => p.Code == Code);
            if (temp != null) {
                return temp.Class;
            }
        }
        return '';
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

    export(){
        this.searchCriteria.Lang = this._translateService.currentLang;
        this._fuseProgressBarService.show();
        this.exportService.ExportAction(
            {
                ExportType: "AdvancedOrderSearchByCriteria",
                Criteria:  this.searchCriteria,
                Lang: this._translateService.currentLang
            }
        ).subscribe(result=>{
            var DatetimeFormat = this.datePipe.transform(Date.now(),'yyyy-MM-dd_HHmmss');
            this.SaveExcel(result, 'Orders_'+DatetimeFormat);
            this._fuseProgressBarService.hide();

            this.search();

            this._fuseProgressBarService.hide();
        },
        error=>{
            this._matSnackBar.open(this._translateService.instant('products.SomeErrorsOccur'), 'OK', { // todo translate
                duration: 2000,
                verticalPosition: 'bottom'
            });
            this._fuseProgressBarService.hide();
        })
    }

    SaveExcel(data: Blob, name: string) {
        const a = document.createElement('a');
        // tslint:disable-next-line: quotemark
        // tslint:disable-next-line: object-literal-key-quotes
        const blob = new Blob([data], { 'type': 'application/vnd.ms-excel' });
        a.href = URL.createObjectURL(blob);
        a.download = name + '.xlsx';
        a.click();
      }

    saveSearchCriteria(){
        localStorage.setItem('OrderCriteria', JSON.stringify(this.searchCriteria));
    }

}

