import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tbcontacto } from '../models/tbcontacto';
import { Global } from './global'

@Injectable()
export class TbcontactoService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de Angular';
    }

    saveContacto(objTbcontacto: tbcontacto): Observable<any>{
        let params = JSON.stringify(objTbcontacto);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'saveTbcontacto', params, {headers: headers});
    }

    getContactos(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'getListContacto',{headers:headers});
    }
}
