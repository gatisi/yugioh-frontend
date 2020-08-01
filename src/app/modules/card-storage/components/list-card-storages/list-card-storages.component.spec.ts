import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardStoragesComponent } from './list-card-storages.component';

describe('ListCardStoragesComponent', () => {
  let component: ListCardStoragesComponent;
  let fixture: ComponentFixture<ListCardStoragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardStoragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardStoragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
