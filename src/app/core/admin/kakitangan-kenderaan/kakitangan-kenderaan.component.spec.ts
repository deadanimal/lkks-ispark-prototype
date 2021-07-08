import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakitanganKenderaanComponent } from './kakitangan-kenderaan.component';

describe('KakitanganKenderaanComponent', () => {
  let component: KakitanganKenderaanComponent;
  let fixture: ComponentFixture<KakitanganKenderaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakitanganKenderaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakitanganKenderaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
