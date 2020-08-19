import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List2StockItemsComponent } from './list2-stock-items.component';

describe('List2StockItemsComponent', () => {
  let component: List2StockItemsComponent;
  let fixture: ComponentFixture<List2StockItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List2StockItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List2StockItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
