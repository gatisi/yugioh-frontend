import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockItemDialogComponent } from './update-stock-item-dialog.component';

describe('UpdateStockItemDialogComponent', () => {
  let component: UpdateStockItemDialogComponent;
  let fixture: ComponentFixture<UpdateStockItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStockItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
