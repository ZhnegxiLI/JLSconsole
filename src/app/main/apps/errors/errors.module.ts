import { NgModule } from '@angular/core';

import { Error500Component } from 'app/main/apps/errors/500/error-500.component';
import { Error404Component } from 'app/main/apps/errors/404/error-404.component';


@NgModule({
    imports     : [
        Error500Component,
        Error404Component
    ]
})
export class ErrorsModule
{
}
