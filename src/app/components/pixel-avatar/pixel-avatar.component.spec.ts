import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelAvatarComponent } from './pixel-avatar.component';

describe('PixelAvatarComponent', () => {
  let component: PixelAvatarComponent;
  let fixture: ComponentFixture<PixelAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
