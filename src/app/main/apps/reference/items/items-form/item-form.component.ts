import { filter } from 'rxjs/operators';
import { Item } from '../items.module';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { ConfimDialog } from './../../../../../dialog/confim-dialog/confim-dialog.component';

import { locale as english } from '../i18n/en';
import { locale as chinese } from '../i18n/cn';

@Component({
    selector     : 'items-item-form-dialog',
    templateUrl  : './item-form.component.html',
    styleUrls    : ['./item-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ItemsItemFormDialogComponent
{
    action: string;
    item: Item;
    itemForm: FormGroup;
    dialogTitle: string;
    categoryTable: any;
    parentCategotyId : number = 0;
    items : Array<Item>;

    /**
     * Constructor
     *
     * @param {MatDialogRef<ContactsContactFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<ItemsItemFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public _matDialog: MatDialog,
    )
    {
        // Set the defaults
        this.action = _data.action;
        this.categoryTable = _data.category;
        this.items = _data.items;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Item';
            this.item = new Item(_data.item);
            var parent = this.items.find(item => item.id == this.item.parentId);
            if(parent != null){
                this.parentCategotyId = this.categoryTable.find(category => category.id == parent.referenceCategoryId).id;
            }
        }
        else
        {
            this.dialogTitle = 'New Item';
            this.item = new Item({});
        }

        this.itemForm = this.createItemForm();

        this._fuseTranslationLoaderService.loadTranslations(english, chinese);
    }

    saveItem(){
        const dialogRefConfig = this._matDialog.open(ConfimDialog, {
            data: {title : "confim",
                    message : "sure update the item?"}
          });

          dialogRefConfig.afterClosed().subscribe(result => {
            if(result.action == 'yes'){
                this.matDialogRef.close(this.itemForm)
            }
         });
    }

    getParentItem(){
        var filtedItem = this.items.filter(item => item.validity == true && item.referenceCategoryId == this.parentCategotyId);
        return filtedItem;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createItemForm(): FormGroup
    {
        return this._formBuilder.group({
            id       : [this.item.id],
            code     : [this.item.code],
            value    : [this.item.value],
            order    : [this.item.order],
            parentId : [this.item.parentId],
            validity : [this.item.validity],
            frLabel  : [this.item.frLabel],
            cnLabel  : [this.item.cnLabel],
            enLabel  : [this.item.enLabel], 
            referenceCategoryId : [this.item.referenceCategoryId],
        });
    }
}
