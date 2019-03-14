import { Component, OnInit } from '@angular/core';
import { tbcontacto } from '../../models/tbcontacto'; 
import { TbcontactoService } from '../../services/tbcontacto.service';
import { tbmensaje } from '../../models/tbmensaje';
import { TbmensajeService } from '../../services/tbmensaje.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [TbcontactoService, TbmensajeService]
})
export class InfoComponent implements OnInit {

  public contactos: tbcontacto[];
  public mensajes: tbmensaje[];

  constructor(
    private _tbContactoService: TbcontactoService,
    private _tbMensajeService: TbmensajeService
  ) { }

  ngOnInit() {
    this.getContactos();
    this.getMensajes();
  }

  getMensajes(){
    this._tbMensajeService.getMensajes().subscribe(
      response => {
        if(response.tbmensaje){
          this.mensajes = response.tbmensaje;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getContactos(){
    this._tbContactoService.getContactos().subscribe(
      response => {
        if(response.tbcontactos){
          this.contactos = response.tbcontactos;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  

}
