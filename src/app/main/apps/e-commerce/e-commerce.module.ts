import { MatToolbarModule } from '@angular/material/toolbar';
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
import {MatDialogModule, MatGridListModule, MatDatepickerModule} from "@angular/material";
import {MatRadioModule} from "@angular/material";

import { AgmCoreModule } from '@agm/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatProgressSpinnerModule} from '@angular/material'

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { EcommerceProductsComponent } from 'app/main/apps/e-commerce/products/products.component';

import { EcommerceProductComponent, ImageOverViewDialog } from 'app/main/apps/e-commerce/product/product.component';

import { EcommerceOrdersComponent } from 'app/main/apps/e-commerce/orders/orders.component';
import { EcommerceOrdersService } from 'app/main/apps/e-commerce/orders/orders.service';
import { EcommerceOrderComponent } from 'app/main/apps/e-commerce/order/order.component';


import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {
        path     : 'products',
        component: EcommerceProductsComponent
    },
    {
        path     : 'product',
        component: EcommerceProductComponent
    },
    {
        path     : 'orders',
        component: EcommerceOrdersComponent
    },
    {
        path     : 'order',
        component: EcommerceOrderComponent
    },
    {
        path     : 'cart',
        component: CartComponent
    }
];

@NgModule({
    declarations: [
        EcommerceProductsComponent,
        EcommerceProductComponent,
        EcommerceOrdersComponent,
        EcommerceOrderComponent,
        ImageOverViewDialog,
        CartComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatGridListModule,
        DialogModule,
        MatDatepickerModule,
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
        MatRadioModule,
        MatToolbarModule,
        NgxMatSelectSearchModule,
        
        TranslateModule,
        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        FuseSharedModule,
        FuseWidgetModule
    ],
    providers   : [
        EcommerceOrdersService
    ],
    entryComponents: [
        ImageOverViewDialog,
        ConfimDialog],
})
export class EcommerceModule
{
}
