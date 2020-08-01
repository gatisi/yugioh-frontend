import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardStorageComponent } from './create-card-storage.component';

describe('CreateCardStorageComponent', () => {
  let component: CreateCardStorageComponent;
  let fixture: ComponentFixture<CreateCardStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCardStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
