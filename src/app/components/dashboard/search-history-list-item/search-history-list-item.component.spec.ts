import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryListItemComponent } from './search-history-list-item.component';

describe('SearchHistoryListItemComponent', () => {
  let component: SearchHistoryListItemComponent;
  let fixture: ComponentFixture<SearchHistoryListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchHistoryListItemComponent]
    });
    fixture = TestBed.createComponent(SearchHistoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
