import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tbmensaje } from '../models/tbmensaje';
import { Global } from './global'

@Injectable()
export class TbmensajeService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de Angular';
    }

    saveMensaje(objTbmensaje: tbmensaje): Observable<any>{
        let params = JSON.stringify(objTbmensaje);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url + 'saveTbmensaje', params, {headers: headers});
    }

    getMensajes(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url + 'getListTbmensaje',{headers:headers});
    }
}
