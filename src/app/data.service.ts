import {
  Injectable
} from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {
  Observable
} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Accept': 'application/json'
  })
};


const assetLocal = {
  'contract_id': 1,
  'description': 'test',
  'keywords': 'test',
  'name': 'test',
  'participant_id': 1,
  'version': '1',
  'biomex_endpoint': 'Added endpoint',
  'off_premise_endpoint': 'Added off premise endpoint',
};

let apiAddress: any;

@Injectable()
export class DataService {
  constructor(private _http: HttpClient) {}


  pingOnlineApi() {
    apiAddress = localStorage.getItem('api-address');
    return this._http.get(apiAddress + '/v1/asset/');
  }


  getOnlineAssets() {
    apiAddress = localStorage.getItem('api-address');
    return this._http.get(apiAddress + '/v1/asset/');
  }

  createAsset(asset) {
    apiAddress = localStorage.getItem('api-address');
    const body = JSON.stringify(asset);
    return this._http.post(apiAddress + '/v1/asset/', body, httpOptions);
  }

  updateAsset(asset) {
    apiAddress = localStorage.getItem('api-address');
    const body = JSON.stringify(asset);
    return this._http.put(apiAddress + '/v1/asset/' + asset.id, body, httpOptions);
  }

  deleteAsset(asset) {
    apiAddress = localStorage.getItem('api-address');
    return this._http.delete(apiAddress + '/v1/asset/' + asset.id);
  }

  getAssets() {
    return [{
      'id': 1,
      'name': 'HCV-GLUE',
      'description': 'Hepatitis C Virus',
      'participant_id': 2,
      'contract_id': 1,
      'version': '1.0.0',
      'biomex_endpoint': 'www.biomex.io/asset/glue/hcv/v100',
      'off_premise_endpoint': 'www.offpremise.com/',
      'keywords': 'glue algorithm DNA RNA virus human hepatitis',
      'updatedAt': '2017-12-06T01:00:00',
      'createdAt': '2017-12-06T01:00:00'
    }, {
      'id': 2,
      'name': 'HIV-GLUE',
      'description': 'Human Immune Virus',
      'participant_id': 2,
      'contract_id': 2,
      'version': '1.0.0',
      'biomex_endpoint': 'www.biomex.io/asset/glue/hiv/v100',
      'off_premise_endpoint': 'www.offpremise.com/',
      'keywords': 'glue algorithm DNA RNA virus human AIDS HIV',
      'updatedAt': '2017-12-06T01:00:00',
      'createdAt': '2017-12-06T01:00:00'
    }, {
      'id': 3,
      'name': 'HEV-GLUE',
      'description': 'Human Influenza Virus',
      'participant_id': 2,
      'contract_id': 3,
      'version': '1.0.0',
      'biomex_endpoint': 'www.biomex.io/asset/glue/hev/v100',
      'off_premise_endpoint': 'www.offpremise.com/',
      'keywords': 'glue algorithm DNA RNA virus human flu influenza',
      'updatedAt': '2017-12-06T01:00:00',
      'createdAt': '2017-12-06T01:00:00'
    }, {
      'id': 4,
      'name': 'HCV-GLUE',
      'description': 'Hepatitis C Virus',
      'participant_id': 2,
      'contract_id': 4,
      'version': '1.0.0',
      'biomex_endpoint': 'www.biomex.io/asset/glue/hcv/v100',
      'off_premise_endpoint': 'www.offpremise.com/',
      'keywords': 'glue algorithm DNA RNA virus human hepatitis',
      'updatedAt': '2017-12-06T01:00:00',
      'createdAt': '2017-12-06T01:00:00'
    }, {
      'id': 5,
      'name': 'HIV-GLUE',
      'description': 'Human Immune Virus',
      'participant_id': 2,
      'contract_id': 5,
      'version': '1.0.0',
      'biomex_endpoint': 'www.biomex.io/asset/glue/hiv/v100',
      'off_premise_endpoint': 'www.offpremise.com/',
      'keywords': 'glue algorithm DNA RNA virus human AIDS HIV',
      'updatedAt': '2017-12-06T01:00:00',
      'createdAt': '2017-12-06T01:00:00'
    }, {
      'id': 6,
      'name': 'HEV-GLUE',
      'description': 'Human Influenza Virus',
      'participant_id': 2,
      'contract_id': 6,
      'version': '1.0.0',
      'biomex_endpoint': 'www.biomex.io/asset/glue/hev/v100',
      'off_premise_endpoint': 'www.offpremise.com/',
      'keywords': 'glue algorithm DNA RNA virus human flu influenza',
      'updatedAt': '2017-12-06T01:00:00',
      'createdAt': '2017-12-06T01:00:00'
    }, {
      'id': 7,
      'name': 'HEV-GLUE',
      'description': 'Human Influenza Virus',
      'participant_id': 2,
      'contract_id': 7,
      'version': '1.0.0',
      'biomex_endpoint': 'www.biomex.io/asset/glue/hev/v100',
      'off_premise_endpoint': 'www.offpremise.com/',
      'keywords': 'glue algorithm DNA RNA virus human flu influenza',
      'updatedAt': '2017-12-06T01:00:00',
      'createdAt': '2017-12-06T01:00:00'
    }, {
      'id': 8,
      'name': 'HCV-GLUE',
      'description': 'Hepatitis C Virus',
      'participant_id': 2,
      'contract_id': 8,
      'version': '1.0.0',
      'biomex_endpoint': 'www.biomex.io/asset/glue/hcv/v100',
      'off_premise_endpoint': 'www.offpremise.com/',
      'keywords': 'glue algorithm DNA RNA virus human hepatitis',
      'updatedAt': '2017-12-06T01:00:00',
      'createdAt': '2017-12-06T01:00:00'
    }];
  }

}
