import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighOrderFunctionsComponent } from './high-order-functions.component';

describe('HighOrderFunctionsComponent', () => {
  let component: HighOrderFunctionsComponent;
  let fixture: ComponentFixture<HighOrderFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighOrderFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighOrderFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
