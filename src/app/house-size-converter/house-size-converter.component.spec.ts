import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSizeConverterComponent } from './house-size-converter.component';

describe('HouseSizeConverterComponent', () => {
  let component: HouseSizeConverterComponent;
  let fixture: ComponentFixture<HouseSizeConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseSizeConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseSizeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
