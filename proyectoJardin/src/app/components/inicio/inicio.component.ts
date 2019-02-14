import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(divElemento) {
    var divEle = document.getElementById(divElemento);
    divEle.scrollIntoView({block: "start",behavior: "smooth"});
  } 

}
