import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';
import { locale as french } from './i18n/fr';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-info-dialog',
  templateUrl: './customer-info-dialog.component.html',
  styleUrls: ['./customer-info-dialog.component.scss']
})
export class CustomerInfoDialogComponent implements OnInit {


  private customerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CustomerInfoDialogComponent>,
    private formBuilder: FormBuilder,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService) {
    this._fuseTranslationLoaderService.loadTranslations(english, chinese, french);


    this.customerForm = this.formBuilder.group({
      Id: [''],
      Email: ['', Validators.required],
      EntrepriseName: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Siret: ['', Validators.required],
      CreatedOn: [''],
      CreatedBy: [''],
      UpdatedOn: [''],
      UpdatedBy: ['']
    });

  }

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    console.log(this.customerForm.value);
    this.dialogRef.close({ CustomerInfo: this.customerForm.value });
  }
}
