import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryListComponent } from './search-history-list.component';

describe('SearchHistoryListComponent', () => {
  let component: SearchHistoryListComponent;
  let fixture: ComponentFixture<SearchHistoryListComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchHistoryListComponent]
    });
    fixture = TestBed.createComponent(SearchHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
