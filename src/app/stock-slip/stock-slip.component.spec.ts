import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSlipComponent } from './stock-slip.component';

describe('StockSlipComponent', () => {
  let component: StockSlipComponent;
  let fixture: ComponentFixture<StockSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
