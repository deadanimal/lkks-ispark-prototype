import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsetTanahComponent } from './aset-tanah.component';

describe('AsetTanahComponent', () => {
  let component: AsetTanahComponent;
  let fixture: ComponentFixture<AsetTanahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsetTanahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsetTanahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
