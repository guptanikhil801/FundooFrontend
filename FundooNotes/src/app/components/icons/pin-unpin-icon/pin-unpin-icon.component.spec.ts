import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinUnpinIconComponent } from './pin-unpin-icon.component';

describe('PinUnpinIconComponent', () => {
  let component: PinUnpinIconComponent;
  let fixture: ComponentFixture<PinUnpinIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinUnpinIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinUnpinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
