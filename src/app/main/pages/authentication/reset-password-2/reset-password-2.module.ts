import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';

import { ResetPassword2Component } from 'app/main/pages/authentication/reset-password-2/reset-password-2.component';
import { TranslateModule } from '@ngx-translate/core';

const routes = [
    {
        path     : 'auth/reset-password',
        component: ResetPassword2Component
    }
];

@NgModule({
    declarations: [
        ResetPassword2Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        TranslateModule,
        FuseSharedModule,
        TranslateModule
    ]
})
export class ResetPassword2Module
{
}
