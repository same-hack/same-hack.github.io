import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCodeConverterComponent } from './color-code-converter.component';

describe('ColorCodeConverterComponent', () => {
  let component: ColorCodeConverterComponent;
  let fixture: ComponentFixture<ColorCodeConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCodeConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCodeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
