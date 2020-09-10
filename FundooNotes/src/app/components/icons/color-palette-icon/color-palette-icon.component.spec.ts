import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteIconComponent } from './color-palette-icon.component';

describe('ColorPaletteIconComponent', () => {
  let component: ColorPaletteIconComponent;
  let fixture: ComponentFixture<ColorPaletteIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPaletteIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
