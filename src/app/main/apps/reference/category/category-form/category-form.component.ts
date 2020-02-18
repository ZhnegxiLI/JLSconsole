
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from '../i18n/en';
import { locale as chinese } from '../i18n/cn';

import { ConfimDialog } from './../../../../../dialog/confim-dialog/confim-dialog.component';

@Component({
    selector     : 'categories-category-form-dialog',
    templateUrl  : './category-form.component.html',
    styleUrls    : ['./category-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class CategoriesCategoryFormDialogComponent
{
    action: string;
    category: any;
    categoryForm: FormGroup;
    dialogTitle: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<ContactsContactFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<CategoriesCategoryFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public _matDialog: MatDialog,
    )
    {
        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Item';
            this.category = _data.item;
        }
        else
        {
            this.dialogTitle = 'New Item';
            this.category = {
                id : 0,
                shortLabel : "",
                longLabel : "",
                validity : true
            };
        }

        this.categoryForm = this.createCategoryForm();

        this._fuseTranslationLoaderService.loadTranslations(english, chinese);
    }

    saveCategory(){
        const dialogRefConfig = this._matDialog.open(ConfimDialog, {
            data: {title : "confim",
                    message : "sure update the category?"}
          });

          dialogRefConfig.afterClosed().subscribe(result => {
            if(result.action == 'yes'){
                this.matDialogRef.close(this.categoryForm)
            }
         });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create contact form
     *
     * @returns {FormGroup}
     */
    createCategoryForm(): FormGroup
    {
        return this._formBuilder.group({
            id         : [this.category.id],
            shortLabel : [this.category.shortLabel],
            longLabel  : [this.category.LongLabel],
            validity   : [this.category.validity]
        });
    }
}
