import { NgModule } from '@angular/core';
import { ConfimDialog } from './confim-dialog/confim-dialog.component';
import {MatDialogModule, MatButtonModule} from "@angular/material";

@NgModule({
    declarations: [
        ConfimDialog
    ],
    imports     : [
        MatDialogModule,
        MatButtonModule
    ],
    exports : [ConfimDialog],
    entryComponents: [ConfimDialog],
})

export class DialogModule{}