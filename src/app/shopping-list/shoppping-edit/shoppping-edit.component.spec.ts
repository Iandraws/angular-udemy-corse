import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopppingEditComponent } from './shoppping-edit.component';

describe('ShopppingEditComponent', () => {
  let component: ShopppingEditComponent;
  let fixture: ComponentFixture<ShopppingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopppingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
