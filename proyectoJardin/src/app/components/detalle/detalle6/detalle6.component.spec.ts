import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle6Component } from './detalle6.component';

describe('Detalle6Component', () => {
  let component: Detalle6Component;
  let fixture: ComponentFixture<Detalle6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detalle6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
