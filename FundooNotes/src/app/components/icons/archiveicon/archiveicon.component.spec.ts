import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveiconComponent } from './archiveicon.component';

describe('ArchiveiconComponent', () => {
  let component: ArchiveiconComponent;
  let fixture: ComponentFixture<ArchiveiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
