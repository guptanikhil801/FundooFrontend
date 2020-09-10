import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageIconComponent } from './add-image-icon.component';

describe('AddImageIconComponent', () => {
  let component: AddImageIconComponent;
  let fixture: ComponentFixture<AddImageIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImageIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
