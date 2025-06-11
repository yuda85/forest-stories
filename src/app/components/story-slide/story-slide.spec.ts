import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySlide } from './story-slide';

describe('StorySlide', () => {
  let component: StorySlide;
  let fixture: ComponentFixture<StorySlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorySlide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorySlide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
