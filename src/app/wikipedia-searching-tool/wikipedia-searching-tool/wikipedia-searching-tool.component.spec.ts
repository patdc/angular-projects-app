import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaSearchingToolComponent } from './wikipedia-searching-tool.component';

describe('WikipediaSearchingToolComponent', () => {
  let component: WikipediaSearchingToolComponent;
  let fixture: ComponentFixture<WikipediaSearchingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikipediaSearchingToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikipediaSearchingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
