import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurryngComponent } from './curryng.component';

describe('CurryngComponent', () => {
  let component: CurryngComponent;
  let fixture: ComponentFixture<CurryngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurryngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurryngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
