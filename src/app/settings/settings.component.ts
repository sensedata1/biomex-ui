import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {
  SelectItem,
  Message
} from 'primeng/primeng';

import {
  DataService
} from '../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {


  DEFAULTIP = 'http://localhost:8080';

  values = '';
  ApiAddress: string;
  TestData: any;

  msgs: Message[] = [];
  errorFound = false;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    if (localStorage) { // it checks browser support local storage or not
      this.ApiAddress = localStorage.getItem('api-address');
      if (this.ApiAddress != null) {
        console.log('API', this.ApiAddress);
        this.getApiCheck();
      } else {
        localStorage.setItem('api-address', this.DEFAULTIP);
        this.ApiAddress = localStorage.getItem('api-address');
        console.log('Set default API', this.ApiAddress);
        this.getApiCheck();
      }
    } else {
      alert('No local storage available.');
    }

  }

  getApiCheck() {
    this._dataService.pingOnlineApi().subscribe(
      data => {
        this.TestData = data;
        console.log('data Test', data);
      },
      err => {
        this.msgs.push({
          severity: 'error',
          summary: 'API test failed',
          detail: err.message
        });
        console.error('err', err.message);
      },
      () => console.log('done test')
    );
  }

  updateInput() { // without type info
    localStorage.setItem('api-address', this.ApiAddress);
    this.getApiCheck();
  }

}
