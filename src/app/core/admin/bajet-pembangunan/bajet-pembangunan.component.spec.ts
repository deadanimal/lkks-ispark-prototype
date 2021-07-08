import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajetPembangunanComponent } from './bajet-pembangunan.component';

describe('BajetPembangunanComponent', () => {
  let component: BajetPembangunanComponent;
  let fixture: ComponentFixture<BajetPembangunanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajetPembangunanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajetPembangunanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
