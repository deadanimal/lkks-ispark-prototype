import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakitanganProfilComponent } from './kakitangan-profil.component';

describe('KakitanganProfilComponent', () => {
  let component: KakitanganProfilComponent;
  let fixture: ComponentFixture<KakitanganProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakitanganProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakitanganProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
