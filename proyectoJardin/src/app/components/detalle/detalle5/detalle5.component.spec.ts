import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle5Component } from './detalle5.component';

describe('Detalle5Component', () => {
  let component: Detalle5Component;
  let fixture: ComponentFixture<Detalle5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detalle5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
