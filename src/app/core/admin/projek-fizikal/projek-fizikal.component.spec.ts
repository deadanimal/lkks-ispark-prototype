import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekFizikalComponent } from './projek-fizikal.component';

describe('ProjekFizikalComponent', () => {
  let component: ProjekFizikalComponent;
  let fixture: ComponentFixture<ProjekFizikalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjekFizikalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekFizikalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
