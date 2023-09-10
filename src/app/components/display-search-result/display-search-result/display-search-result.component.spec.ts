import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearchResultComponent } from './display-search-result.component';

describe('DisplaySearchResultComponent', () => {
  let component: DisplaySearchResultComponent;
  let fixture: ComponentFixture<DisplaySearchResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySearchResultComponent]
    });
    fixture = TestBed.createComponent(DisplaySearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
