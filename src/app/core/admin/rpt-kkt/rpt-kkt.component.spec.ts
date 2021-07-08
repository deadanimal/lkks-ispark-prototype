import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RptKktComponent } from './rpt-kkt.component';

describe('RptKktComponent', () => {
  let component: RptKktComponent;
  let fixture: ComponentFixture<RptKktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RptKktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RptKktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
