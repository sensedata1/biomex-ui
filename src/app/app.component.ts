import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {TreeModule,TreeNode,Message} from 'primeng/primeng';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
menuOpen: boolean = true;
searchOpen: boolean = false;
  msgs: Message[];

  title = 'BiOMEX';

  constructor(private _http: HttpClient) {




  }



}
