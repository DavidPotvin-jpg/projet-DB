import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVarietyPageComponent } from './add-variety-page.component';

describe('AddVarietyPageComponent', () => {
  let component: AddVarietyPageComponent;
  let fixture: ComponentFixture<AddVarietyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVarietyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVarietyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
