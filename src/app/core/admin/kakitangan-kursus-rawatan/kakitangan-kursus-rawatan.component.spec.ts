import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakitanganKursusRawatanComponent } from './kakitangan-kursus-rawatan.component';

describe('KakitanganKursusRawatanComponent', () => {
  let component: KakitanganKursusRawatanComponent;
  let fixture: ComponentFixture<KakitanganKursusRawatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakitanganKursusRawatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakitanganKursusRawatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
