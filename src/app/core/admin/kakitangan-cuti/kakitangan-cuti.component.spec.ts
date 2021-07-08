import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakitanganCutiComponent } from './kakitangan-cuti.component';

describe('KakitanganCutiComponent', () => {
  let component: KakitanganCutiComponent;
  let fixture: ComponentFixture<KakitanganCutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakitanganCutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakitanganCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
