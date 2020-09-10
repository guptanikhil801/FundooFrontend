import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorIconComponent } from './collaborator-icon.component';

describe('CollaboratorIconComponent', () => {
  let component: CollaboratorIconComponent;
  let fixture: ComponentFixture<CollaboratorIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratorIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
