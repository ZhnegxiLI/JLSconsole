import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent, UserDialog } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DialogModule } from './../../../dialog/dialog.module';

import { AddressDialog } from './../../../dialog/address-dialog/address-dialog.component';

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
import {MatDialogModule, MatGridListModule, MatDatepickerModule, MatCheckboxModule} from "@angular/material";
import {MatRadioModule} from "@angular/material";

import { AgmCoreModule } from '@agm/core';
import { TranslateModule } from '@ngx-translate/core';
import {MatProgressSpinnerModule} from '@angular/material'

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxLoadingModule } from 'ngx-loading';

const routes: Routes = [
  {
      path     : 'users',
      component: UsersComponent,
  }
];

@NgModule({
  declarations: [ UsersComponent,UserDialog],
  entryComponents: [
    AddressDialog,
      UserDialog],
  imports: [
    NgxLoadingModule.forRoot({}),
    MatCheckboxModule,
    RouterModule.forChild(routes),
    CommonModule,
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
  ]
})
export class UserModule { }
