import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakSyarikatComponent } from './anak-syarikat.component';

describe('AnakSyarikatComponent', () => {
  let component: AnakSyarikatComponent;
  let fixture: ComponentFixture<AnakSyarikatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnakSyarikatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnakSyarikatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
