import { Component, OnInit } from '@angular/core';
import { InicioComponent } from '../../src/app/components/inicio/inicio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoJardin';

  

  ngOnInit() {
    
  }

  scrollInicio(varElementoInicio){
    var xa = new InicioComponent();
    xa.scroll(varElementoInicio);
  }

}
