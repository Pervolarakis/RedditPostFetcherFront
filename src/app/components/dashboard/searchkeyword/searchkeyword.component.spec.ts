import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchkeywordComponent } from './searchkeyword.component';

describe('SearchkeywordComponent', () => {
  let component: SearchkeywordComponent;
  let fixture: ComponentFixture<SearchkeywordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchkeywordComponent]
    });
    fixture = TestBed.createComponent(SearchkeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
