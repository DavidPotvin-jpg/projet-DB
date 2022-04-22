import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyModifyPopupComponent } from './variety-modify-popup.component';

describe('VarietyModifyPopupComponent', () => {
  let component: VarietyModifyPopupComponent;
  let fixture: ComponentFixture<VarietyModifyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietyModifyPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietyModifyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
