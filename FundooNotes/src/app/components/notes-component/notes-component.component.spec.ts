import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponentComponent } from './notes-component.component';

describe('NotesComponentComponent', () => {
  let component: NotesComponentComponent;
  let fixture: ComponentFixture<NotesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
