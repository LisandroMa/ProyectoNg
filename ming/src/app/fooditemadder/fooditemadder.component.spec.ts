import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemadderComponent } from './fooditemadder.component';

describe('FooditemadderComponent', () => {
  let component: FooditemadderComponent;
  let fixture: ComponentFixture<FooditemadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooditemadderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooditemadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
