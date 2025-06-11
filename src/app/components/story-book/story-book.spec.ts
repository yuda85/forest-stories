import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBook } from './story-book';

describe('StoryBook', () => {
  let component: StoryBook;
  let fixture: ComponentFixture<StoryBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
