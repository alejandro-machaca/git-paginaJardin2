import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerContactoComponent } from './obtener-contacto.component';

describe('ObtenerContactoComponent', () => {
  let component: ObtenerContactoComponent;
  let fixture: ComponentFixture<ObtenerContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
