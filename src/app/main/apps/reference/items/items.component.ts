
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ConfimDialog } from './../../../../dialog/confim-dialog/confim-dialog.component';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';
import { locale as french } from './i18n/fr';

import { takeUntil } from 'rxjs/internal/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReferenceService } from 'app/Services/reference.service';
import { TranslateService } from '@ngx-translate/core';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
    selector     : 'reference-items',
    templateUrl  : './items.component.html',
    styleUrls    : ['./items.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class ReferenceItemsComponent implements OnInit
{
    displayedColumns = ['id', 'code', 'parent',  'label', 'category','value', 'active'];
    dialogRef: any;

    loading : boolean = false;

    private referenceItemList : any[] = [];
    private totalCount : number = 0;
    private categoryList : any[] = [];
    private parentReferenceItemList: any[] = [];
    

    private statusList : any[] = [{
        Value : true,
        Label : 'Valide'
    },{
        Value : false,
        Label :'Invalide'
    }
    ];


    private searchCriteria: any = {
        step : 10,
        begin : 0,
        Lang : this._translateService.currentLang,
        ParentId : null,
        Validity : null,
        ReferenceCategoryId : null,
        SearchText : '',
        IgnoreProduct: true,
        ParentCategoryId:0
    }

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private referenceService : ReferenceService,
        public _matDialog: MatDialog,
        private _matSnackBar: MatSnackBar,
        private _translateService: TranslateService,
        public dialog: MatDialog,
    ){
        this._fuseTranslationLoaderService.loadTranslations(english, chinese ,french);
    }

    ngOnInit(): void
    {
        this.getCategoryList();
        this.getParentReferenceItemList();

    }

    getServerData(event){
        this.searchCriteria.begin = event.pageIndex;
        this.searchCriteria.step = event.pageSize;
        this.search();
    }

    search(){
        this.referenceService.advancedSearchReferenceItem(this.searchCriteria).subscribe(result=>{
            if(result!=null && result.ReferenceItemList!=null && result.TotalCount != null){
                this.totalCount =   result.TotalCount;
                this.referenceItemList = result.ReferenceItemList;
              }
        });
    }

    getCategoryList() {
        var criteria = {
            step :0 ,
            begin : 0
        }
        this.referenceService.getAllCategoryList(criteria).subscribe(result=>{
            if (result!=null && result.ReferenceCategoryList!=null){
                this.categoryList = result.ReferenceCategoryList;
            }
        },
        error=>{

        });
    }

    getParentReferenceItemList(){
        var criteria = {
            Lang : this._translateService.currentLang
        }

        this.referenceService.getAllReferenceItemWithChildren(criteria).subscribe(result=>{
            this.parentReferenceItemList = result;
        },
        error=>{

        });
    }


    getTargetReferenceItemByCategory(){
        return this.parentReferenceItemList.filter(p=> p.CategoryId == this.searchCriteria.ParentCategoryId);
    }

    updateOrCreateReferenceItem(item){
        console.log(item);

        const dialogRef = this.dialog.open(ItemDialog, {
            width: '600px',
            data: {referenceItem : item,referenceCategoryList: this.categoryList, statusList: this.statusList, parentReferenceItemList : this.parentReferenceItemList}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          if(result!=null && result.IsSaved!=null&& result.IsSaved == true){
            this.search();
          }
        });

    }

    getEmptyReferenceItem(){
        return {
            Id : 0,
            Label : null,
            Validity : true,
            CategoryId : 0,
            Category : {},
            Labels : [],
            ParentId : null,
            ParentCategoryId : null,
            ParentReferenceItem : null
        }
    }
}

@Component({
    selector: 'item-dialog',
    templateUrl: 'item-dialog.html',
    styleUrls    : ['./items.component.scss'],
  })
  export class ItemDialog {
    @ViewChild('contactForm',null) contactForm: NgForm;
    
    private Loading: boolean = false;

    private itemInfo = {
        Id : 0,
        Code : '',
        CategoryId : 0,
        Validity :true,
        Value : '',
        ParentCategoryId:0,
        ParentId :0,
        LabelFR : null,
        LebelEN: null,
        LabelCN : null
    };


    constructor(
      public dialogRef: MatDialogRef<ItemDialog>,
      public dialog: MatDialog,
      private _matSnackBar: MatSnackBar,
      private _fuseProgressBarService: FuseProgressBarService,
      private referenceService : ReferenceService,
      @Inject(MAT_DIALOG_DATA) public data: any
      ) { 
      }
  
    ngOnInit() {
        console.log(this.data.referenceItem);
        this.itemInfo = this.data.referenceItem;
        this.getFormatedTranslation();
        this.getParentCateogryId();
    }
  
    onNoClick(): void {
      this.dialogRef.close({IsSaved: false});
    }
  
    onSubmit(form){

        this.Loading = true;
        //saveReferenceItem
        this.referenceService.saveReferenceItem(this.itemInfo).subscribe(result=>{
            if(result>0){
                this._matSnackBar.open('Save successfully', 'OK', { // todo translate
                    duration        : 2000
                });

                this.dialogRef.close({IsSaved: true});
            }
            this.Loading = false;
        },
        error=>{
            this._matSnackBar.open('Save fail', 'Fail', { // todo translate
                duration        : 2000
            });

            this.Loading = false;
        })
    }

    getParentCateogryId(){
        if(this.data.referenceItem!=null && this.data.referenceItem.ParentReferenceItem!=null 
            && this.data.referenceItem.ParentReferenceItem.CategoryId!=null){
            this.itemInfo.ParentCategoryId = this.data.referenceItem.ParentReferenceItem.CategoryId;
        }
    }

    getTargetReferenceItemByCategory(){
        return this.data.parentReferenceItemList.filter(p=> p.CategoryId == this.itemInfo.ParentCategoryId);
    }

    getFormatedTranslation(){
        if(this.data.referenceItem!=null && this.data.referenceItem.Labels!=null){
            this.data.referenceItem.Labels.forEach(p=>{
                this.itemInfo['Label'+p.Lang.toUpperCase()] = p.Label;
            });
        }
    
    }
  
  }
  
