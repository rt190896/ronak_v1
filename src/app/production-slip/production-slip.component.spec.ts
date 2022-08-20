import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionSlipComponent } from './production-slip.component';

describe('ProductionSlipComponent', () => {
  let component: ProductionSlipComponent;
  let fixture: ComponentFixture<ProductionSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
