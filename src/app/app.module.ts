import { DialogModule } from './dialog/dialog.module';
import { appServiceBase } from 'app/app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { AppStoreModule } from 'app/store/store.module';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatDialogModule} from "@angular/material";
import { AuthGuard } from './auth.guard';

import { ProductService } from 'app/Services/product.service';
import { ReferenceService } from 'app/Services/reference.service';

import { MatSnackBarModule } from '@angular/material';

const appRoutes: Routes = [
    
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule',
        canActivate: [AuthGuard]
    },
    {
        path        : 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path      : '',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path      : '**',
        redirectTo: 'sample'
    },
  
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        DialogModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        MatSnackBarModule,
        // App modules
        LayoutModule,
        SampleModule,
        AppStoreModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers   : [
        ProductService,
        ReferenceService
    ]
})
export class AppModule
{
}
