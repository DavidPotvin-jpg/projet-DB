import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyModifyComponent } from './variety-modify.component';

describe('VarietyModifyComponent', () => {
  let component: VarietyModifyComponent;
  let fixture: ComponentFixture<VarietyModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietyModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietyModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
