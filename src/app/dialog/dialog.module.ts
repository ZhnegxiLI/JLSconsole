import { NgModule } from '@angular/core';
import { ConfimDialog } from './confim-dialog/confim-dialog.component';
import {MatDialogModule} from "@angular/material";

@NgModule({
    declarations: [
        ConfimDialog
    ],
    imports     : [
        MatDialogModule,
    ],
    exports : [ConfimDialog],
    entryComponents: [ConfimDialog],
})

export class DialogModule{}