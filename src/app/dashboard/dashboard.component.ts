import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl,
  FormBuilder
} from '@angular/forms';

import {
  DataService
} from '../data.service';

import {
  Observable
} from 'rxjs/Rx';

import {
  PanelModule,
  SelectItem,
  Message,
  Growl
} from 'primeng/primeng';


import {
  FormGroup
} from '@angular/forms/src/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dataService: DataService, private fb: FormBuilder) {}

  public assets;
  public asset;
  assetform: FormGroup;
  submitted: boolean;
  msgs: Message[] = [];
  selectedAsset: any;
  detailsCollapsed: boolean;
errorFound: boolean = false;

  ngOnInit() {

    this.assetform = this.fb.group({
      id: new FormControl({value: '',disabled: true}, Validators.required),
      name: new FormControl({value: '', disabled: false}, Validators.required),
      description: new FormControl({value: '', disabled: false}, []),
      participant_id: new FormControl({value: '', disabled: false}, Validators.required),
      biomex_endpoint: new FormControl({value: '', disabled: false}),
      off_premise_endpoint: new FormControl({value: '', disabled: false}),
      version: new FormControl({value: '', disabled: false}, Validators.required),
      contract_id: new FormControl({value: '', disabled: false}, Validators.required),
      keywords: new FormControl({value: '', disabled: false}),
    });
   // this.assetform.get('id').disable();

    this.getAssets();

  }



  getAssets() {
    this._dataService.getOnlineAssets().subscribe(
      data => {
        this.assets = data
      },
      err => console.error(err),
      () => console.log('done loading assets')
    );
  }

  onRowSelect(event) {
    console.log("select", event);
    console.log('Selected', event.data.id, event.data.name);
    this.selectAsset(event.data);
    //this.detailsCollapsed = false;
  }


  selectAsset(asset) {
    console.log("select", asset);
    this.selectedAsset = asset;
    this.detailsCollapsed = false;
  }

  createAsset(myForm) {
    let asset = myForm.value;
    this._dataService.createAsset(asset).subscribe(
      data => {
        // refresh the list
        this.getAssets();
        return true;
      },
      error => {
        console.error("Error saving asset!");
        return Observable.throw(error);
      }
    );
  }

  updateAsset(asset) {
    this._dataService.updateAsset(asset).subscribe(
      data => {
        // refresh the list
        this.getAssets();
            this.msgs = [];
        this.msgs.push({
          severity: 'info',
          summary: 'Success',
          detail: 'Asset ' + asset.id + ' updated'
        });
        return true;

      },
      error => {
        console.error("Error saving asset!");
        return Observable.throw(error);
      }
    );
  }

  deleteAsset(asset) {
    if (confirm("Are you sure you want to delete " + asset.name + "?")) {
      this._dataService.deleteAsset(asset).subscribe(
        data => {
          // refresh the list
          this.getAssets();
          this.selectedAsset = null;
          return true;
        },
        error => {
          console.error("Error deleting asset!");
          return Observable.throw(error);
        }
      );
    }
  }

  onSubmit(asset) {
    console.log(this.assetform.value);
    this.updateAsset(this.assetform.getRawValue());
  }
}
