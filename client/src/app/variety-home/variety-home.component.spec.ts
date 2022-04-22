import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyHomeComponent } from './variety-home.component';

describe('VarietyHomeComponent', () => {
  let component: VarietyHomeComponent;
  let fixture: ComponentFixture<VarietyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
