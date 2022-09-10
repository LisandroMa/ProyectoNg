import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlimitComponent } from './itemlimit.component';

describe('ItemlimitComponent', () => {
  let component: ItemlimitComponent;
  let fixture: ComponentFixture<ItemlimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemlimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemlimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
