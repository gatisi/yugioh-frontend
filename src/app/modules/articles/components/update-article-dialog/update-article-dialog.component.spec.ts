import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleDialogComponent } from './update-article-dialog.component';

describe('UpdateArticleDialogComponent', () => {
  let component: UpdateArticleDialogComponent;
  let fixture: ComponentFixture<UpdateArticleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArticleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
