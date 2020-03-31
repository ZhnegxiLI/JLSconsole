import { NgModule } from '@angular/core';
import { ConfimDialog } from './confim-dialog/confim-dialog.component';
import {MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatError} from "@angular/material";
import { AddressDialog } from './address-dialog/address-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerInfoDialogComponent } from './customer-info-dialog/customer-info-dialog.component';

@NgModule({
    declarations: [
        ConfimDialog,
        AddressDialog,
        CustomerInfoDialogComponent
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
    exports : [ConfimDialog,AddressDialog,CustomerInfoDialogComponent],
    entryComponents: [ConfimDialog,AddressDialog,CustomerInfoDialogComponent],
})

export class DialogModule{}