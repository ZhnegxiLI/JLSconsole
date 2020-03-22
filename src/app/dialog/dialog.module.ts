import { NgModule } from '@angular/core';
import { ConfimDialog } from './confim-dialog/confim-dialog.component';
import {MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatError} from "@angular/material";
import { AddressDialog } from './address-dialog/address-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ConfimDialog,
        AddressDialog
    ],
    imports     : [
        MatDialogModule,
        MatButtonModule,
        TranslateModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports : [ConfimDialog,AddressDialog],
    entryComponents: [ConfimDialog,AddressDialog],
})

export class DialogModule{}