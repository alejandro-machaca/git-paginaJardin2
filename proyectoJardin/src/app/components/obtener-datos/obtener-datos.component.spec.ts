import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerDatosComponent } from './obtener-datos.component';

describe('ObtenerDatosComponent', () => {
  let component: ObtenerDatosComponent;
  let fixture: ComponentFixture<ObtenerDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
