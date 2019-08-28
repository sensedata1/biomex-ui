import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormControl, FormBuilder } from '@angular/forms';

import { DataService } from '../data.service';
import { Observable} from 'rxjs/Observable';

import { SelectItem, Message} from 'primeng/primeng';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public assets;
  public asset;
  assetform: FormGroup;
  submitted: boolean;
  msgs: Message[] = [];
  errorFound = false;
  constructor(private _dataService: DataService, private fb: FormBuilder) {
  }

  ngOnInit() {

    this.assetform = this.fb.group(
      {
        name: new FormControl({ value: '', disabled: false }, Validators.required),
        description: new FormControl({ value: '', disabled: false }, []),
        participant_id: new FormControl({ value: '', disabled: false }, Validators.required),
        biomex_endpoint: new FormControl({ value: '', disabled: false }),
        off_premise_endpoint: new FormControl({ value: '', disabled: false }),
        version: new FormControl({ value: '', disabled: false }, Validators.required),
        contract_id: new FormControl({ value: '', disabled: false }, Validators.required),
        keywords: new FormControl({ value: '', disabled: false }),
      });

  }

  onSubmit(asset) {
    console.log(this.assetform.value);
    this.createAsset(this.assetform.value);
    this.submitted = true;
    this.msgs = [];
  }

  createAsset(asset) {
    // let asset = myForm.value;
    this._dataService.createAsset(asset).subscribe(
      data => {
        // refresh the list
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Asset created' });
        this.assetform.markAsPristine();
        this.assetform.markAsUntouched();
        // this.getAssets();
        return true;
      },
      error => {
        console.error('Error saving asset!');
        this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Create asset Failed' });
        return Observable.throw(error);
      }
    );
  }

  updateAsset(asset) {
    this._dataService.updateAsset(asset).subscribe(
      data => {
        // refresh the list
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Asset updated' });
        // this.getAssets();
        return true;
      },
      error => {
        console.error('Error saving asset!');
        return Observable.throw(error);
      }
    );
  }


}
