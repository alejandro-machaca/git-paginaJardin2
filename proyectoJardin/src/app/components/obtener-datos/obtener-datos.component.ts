import { Component, OnInit } from '@angular/core';
import { tbmensaje } from '../../models/tbmensaje';
import { TbmensajeService } from '../../services/tbmensaje.service';

@Component({
  selector: 'app-obtener-datos',
  templateUrl: './obtener-datos.component.html',
  styleUrls: ['./obtener-datos.component.css'],
  providers: [TbmensajeService]
})
export class ObtenerDatosComponent implements OnInit {

  public objTbmensaje: tbmensaje;
  public status: string;

  constructor(
    private _tbmensajeService: TbmensajeService
  ) { 
    this.objTbmensaje = new tbmensaje('','','','','','',0,'',0);
  }

  ngOnInit() {
  }

  //TODO: registrar los otros parametros de acuerdo al formato.
  onSubmit(form){
    this.objTbmensaje.colFechaHora = this.getFecha();
    this._tbmensajeService.saveMensaje(this.objTbmensaje).subscribe(
      response => {
        if(response.varTbMensaje)
        {
          this.status = 'success';
          //TODO: no esta vaciando el formulario revisar porque
          form.reset;
        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getFecha(){
    var f = new Date();
    return (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() + " - " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds());
  }

}
