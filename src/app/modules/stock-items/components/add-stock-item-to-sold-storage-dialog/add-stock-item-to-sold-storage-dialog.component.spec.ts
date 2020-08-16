import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockItemToSoldStorageDialogComponent } from './add-stock-item-to-sold-storage-dialog.component';

describe('AddStockItemToSoldStorageDialogComponent', () => {
  let component: AddStockItemToSoldStorageDialogComponent;
  let fixture: ComponentFixture<AddStockItemToSoldStorageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockItemToSoldStorageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockItemToSoldStorageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
