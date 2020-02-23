import { Component, Inject, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { locale as english } from './../i18n/en';
import { locale as chinese } from './../i18n/cn';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { EcommerceOrderService } from 'app/main/apps/e-commerce/order/order.service';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
    selector     : 'product-search-dialog',
    templateUrl  : './product-search.component.html',
    styleUrls    : ['./product-search.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ProductSearchDialog implements OnInit, OnDestroy
{
    dataSource: FilesDataSource | null;
    displayedColumns = ['reference', 'name', 'category'];
    productsCount : number;

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EcommerceOrdersService} _ecommerceOrdersService
     */
    constructor(
        public matDialogRef: MatDialogRef<ProductSearchDialog>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _ecommerceOrderService: EcommerceOrderService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        console.log(_data);
        this._ecommerceOrderService.searchProductData = _data.data.content;
        this.productsCount = _data.data.count;


        this.dataSource = new FilesDataSource(this._ecommerceOrderService, this.paginator);

        
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
        this._ecommerceOrderService.onSearchProductCountChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(productCount => {
                this.productsCount = productCount;
            });
        this.sort.sortChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if(!this._ecommerceOrderService.checkNetWork()){
                    return;
                }

                this._ecommerceOrderService.searchProduct(0, this.paginator.pageSize, this.sort.active, this.sort.direction, this.filter.nativeElement.value);
                this.paginator.pageIndex = 0;
        });

        fromEvent(this.filter.nativeElement, 'keyup')
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(150),
                distinctUntilChanged()
            )
            .subscribe(() => {
                if ( !this.dataSource )
                {
                    return;
                }
                
                if(!this._ecommerceOrderService.checkNetWork()){
                    return;
                }

                this._ecommerceOrderService.searchProduct(0, this.paginator.pageSize, this.sort.active, this.sort.direction, this.filter.nativeElement.value);
                this.paginator.pageIndex = 0;
            });
    }

    getServerData(event){
        if(!this._ecommerceOrderService.checkNetWork()){
            return;
        }

        this._ecommerceOrderService.searchProduct(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.filter.nativeElement.value);
    }

    selectProduct(){

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
}

export class FilesDataSource extends DataSource<any>
{
    // Private
    private _filterChange = new BehaviorSubject('');
    private _filteredDataChange = new BehaviorSubject('');

    /**
     * Constructor
     *
     * @param {EcommerceOrdersService} _ecommerceOrderService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    constructor(
        private _ecommerceOrderService: EcommerceOrderService,
        private _matPaginator: MatPaginator,
    )
    {
        super();

        this.filteredData = this._ecommerceOrderService.searchProductData;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Filtered data
    get filteredData(): any
    {
        return this._filteredDataChange.value;
    }

    set filteredData(value: any)
    {
        console.log("data change");
        this._filteredDataChange.next(value);
    }

    // Filter
    get filter(): string
    {
        return this._filterChange.value;
    }

    set filter(filter: string)
    {
        this._filterChange.next(filter);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]>
    {
        const displayDataChanges = [
            this._ecommerceOrderService.onSearchProductChanged,
            this._filteredDataChange
        ];

        return merge(...displayDataChanges).pipe(map(() => {

                let data = this._ecommerceOrderService.searchProductData.slice();

                return data;
            })
        );

    }

    /**
     * Filter data
     *
     * @param data
     * @returns {any}
     */
    filterData(data): any
    {
        if ( !this.filter )
        {
            return data;
        }
        return FuseUtils.filterArrayByString(data, this.filter);
    }


    /**
     * Disconnect
     */
    disconnect(): void
    {
    }
}
