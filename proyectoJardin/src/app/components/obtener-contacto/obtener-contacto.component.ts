import { Component, OnInit } from '@angular/core';
import { tbcontacto } from '../../models/tbcontacto'; 
import { TbcontactoService } from '../../services/tbcontacto.service';

@Component({
  selector: 'app-obtener-contacto',
  templateUrl: './obtener-contacto.component.html',
  styleUrls: ['./obtener-contacto.component.css'],
  providers: [TbcontactoService]
})
export class ObtenerContactoComponent implements OnInit {

  public contacto: tbcontacto;
  public status: string;

  constructor(
    private _tbcontactoService: TbcontactoService
  ) { 
    this.contacto = new tbcontacto('','','',0,'',0);

  }

  ngOnInit() {
  }

  //TODO: registrar los otros parametros de acuerdo al formato.
  onSubmit(form){
    this.contacto.colFechaHora = this.getFecha();
    this._tbcontactoService.saveContacto(this.contacto).subscribe(
      response => {
        if(response.vartbcontacto)
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
