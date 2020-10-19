import { DialogModule } from './dialog/dialog.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { AppStoreModule } from 'app/store/store.module';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatDialogModule} from "@angular/material";
import { AuthGuard } from './auth.guard';

import { ProductService } from 'app/Services/product.service';
import { ReferenceService } from 'app/Services/reference.service';
import { OrderService } from 'app/Services/order.service';
import { UserService } from 'app/Services/user.service';
import { AuthentificationService } from 'app/Services/authentification.service';

import { MatSnackBarModule } from '@angular/material';

import { AppInterceptor } from './app.interceptor';
import { ExportService } from './Services/export.service';
import { ChatService } from './Services/chat.service';

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
        loadChildren: './main/apps/apps.module#AppsModule',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        DialogModule, // Import into used module 
        MatDialogModule,
        MatProgressSpinnerModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

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
        AppStoreModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers   : [
        AuthentificationService,

        {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
    
        ProductService, // TODO place the services into module
        ReferenceService,
        OrderService,
        UserService,
        ExportService,
        ChatService
    ]
})
export class AppModule
{
}
