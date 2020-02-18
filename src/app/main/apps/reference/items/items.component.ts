import { ItemsItemFormDialogComponent } from './items-form/item-form.component';

import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormGroup } from '@angular/forms';
import { ConfimDialog } from './../../../../dialog/confim-dialog/confim-dialog.component';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';

import { takeUntil } from 'rxjs/internal/operators';
import { ReferenceItemsService } from './items.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector     : 'reference-items',
    templateUrl  : './items.component.html',
    styleUrls    : ['./items.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ReferenceItemsComponent implements OnInit
{

    private _unsubscribeAll : Subject<any>;
    dataSource : FilesDataSource | null;
    displayedColumns = ['id', 'code', 'parentId', 'value', 'label', 'order', 'category', 'active'];
    dialogRef: any;
    categoryTable : any;
    langLabels : Array<{"lang" : string, "label" : string}>;
    loading : boolean = false;

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _referenceItemsService : ReferenceItemsService,
        public _matDialog: MatDialog,
        private _matSnackBar: MatSnackBar,
    ){
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        this._fuseTranslationLoaderService.loadTranslations(english, chinese);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Edit contact
     *
     * @param item
     */
    editItem(item): void
    {
        this.dialogRef = this._matDialog.open(ItemsItemFormDialogComponent, {
            panelClass: 'item-form-dialog',
            data      : {
                item: item,
                action : 'edit',
                category : this.categoryTable,
                items : this.dataSource.filteredData
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }

                this.updateItem(response.getRawValue());
        });
    }
    
    newItem(): void
    {
        this.dialogRef = this._matDialog.open(ItemsItemFormDialogComponent, {
            panelClass: 'item-form-dialog',
            data      : {
                action: 'new',
                category : this.categoryTable,
                items : this.dataSource.filteredData
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }

                this.updateItem(response.getRawValue());
        });
    }

    
    updateItem(formData) {
        if(!this._referenceItemsService.checkNetWork()){
            return;
        }
        this.loading = true;
        const data: FormData = new FormData();

        var formValues = formData;

        this.langLabels = [
            {"lang" : 'fr', "label" : formValues.frLabel},
            {"lang" : 'en', "label" : formValues.enLabel},
            {"lang" : 'cn', "label" : formValues.cnLabel}
        ];

        data.append('item', JSON.stringify(formValues));
        data.append('langLabel', JSON.stringify(this.langLabels));

        this._referenceItemsService.updateItem(data)
            .then(() => {

                this.loading = false;
                // Show the success message
                this._matSnackBar.open('item saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
    }


    ngOnInit(): void
    {
        this.dataSource = new FilesDataSource(this._referenceItemsService, this.paginator, this.sort);

        this._referenceItemsService.onCategoryChanged
        .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(category => {
                this.categoryTable = category;
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
                this.dataSource.filter = this.filter.nativeElement.value;
                
            });
    }
}

export class FilesDataSource extends DataSource<any>
{
    private _filterChange = new BehaviorSubject('');
    private _filteredDataChange = new BehaviorSubject('');

    /**
     * Constructor
     *
     * @param {EcommerceProductsService} _referenceItemsService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    constructor(
        private _referenceItemsService: ReferenceItemsService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    )
    {
        super();

        this.filteredData = this._referenceItemsService.items;
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]>
    {
        const displayDataChanges = [
            this._referenceItemsService.onItemsChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                        let data = this._referenceItemsService.items.slice();

                        if(data == []){
                            return;
                        }
                        data = this.filterData(data);

                        this.filteredData = [...data];

                        data = this.sortData(data);

                        // Grab the page's slice of data.
                        const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                        return data.splice(startIndex, this._matPaginator.pageSize);
                    }
                ));
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
     * Sort data
     *
     * @param data
     * @returns {any[]}
     */
    sortData(data): any[]
    {
        if ( !this._matSort.active || this._matSort.direction === '' )
        {
            return data;
        }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch ( this._matSort.active )
            {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'code':
                    [propertyA, propertyB] = [a.code, b.code];
                    break;
                case 'parentId':
                    [propertyA, propertyB] = [a.parentId, b.parentId];
                    break;
                case 'value':
                    [propertyA, propertyB] = [a.value, b.value];
                    break;
                case 'label':
                    [propertyA, propertyB] = [a.label, b.label];
                    break;
                case 'order':
                    [propertyA, propertyB] = [a.order, b.order];
                    break;
                case 'category':
                    [propertyA, propertyB] = [a.category, b.category];
                    break;
                case 'active':
                    [propertyA, propertyB] = [a.validity, b.validity];
                    break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._matSort.direction === 'asc' ? 1 : -1);
        });
    }

    /**
     * Disconnect
     */
    disconnect(): void
    {
    }
}