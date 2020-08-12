import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardStorageDialogComponent } from './update-card-storage-dialog.component';

describe('UpdateCardStorageDialogComponent', () => {
  let component: UpdateCardStorageDialogComponent;
  let fixture: ComponentFixture<UpdateCardStorageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCardStorageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCardStorageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
