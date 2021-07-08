import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInsanComponent } from './modal-insan.component';

describe('ModalInsanComponent', () => {
  let component: ModalInsanComponent;
  let fixture: ComponentFixture<ModalInsanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInsanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
