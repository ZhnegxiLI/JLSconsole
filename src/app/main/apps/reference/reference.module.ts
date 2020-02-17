import { ConfimDialog } from './../../../dialog/confim-dialog/confim-dialog.component';
import { DialogModule } from './../../../dialog/dialog.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatDialogModule} from "@angular/material";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AgmCoreModule } from '@agm/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatProgressSpinnerModule} from '@angular/material'

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { ReferenceItemsService } from './items/items.service';
import { ReferenceItemsComponent } from './items/items.component';

import { ReferenceCategoryService } from './category/categories.service';
import { ReferenceCategoryComponent } from './category/categories.component';

import {ItemsItemFormDialogComponent} from './items/items-form/item-form.component'
import { CategoriesCategoryFormDialogComponent } from './category/category-form/category-form.component';



const routes: Routes = [
    {
        path     : 'items',
        component: ReferenceItemsComponent,
        resolve  : {
            data: ReferenceItemsService
        }
    },
    {
        path     : 'category',
        component: ReferenceCategoryComponent,
        resolve  : {
            data: ReferenceCategoryService
        }
    }

];

@NgModule({
    declarations: [
        ReferenceItemsComponent,
        ReferenceCategoryComponent,
        ItemsItemFormDialogComponent,
        CategoriesCategoryFormDialogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        DialogModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatSlideToggleModule,

        TranslateModule,
        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        FuseSharedModule,
        FuseWidgetModule
    ],
    providers   : [
        ReferenceItemsService,
        ReferenceCategoryService
    ],
    entryComponents: [
        ItemsItemFormDialogComponent,
        CategoriesCategoryFormDialogComponent,
        ConfimDialog],
})
export class ReferenceModule
{
}