import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { Story } from '../../models/story.model';
import { StoryService } from "../../services/story"
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-story-book',
  imports: [CommonModule],
  templateUrl: './story-book.html',
  styleUrl: './story-book.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class StoryBook {
stories: Story[] = [];

  constructor(private storyService: StoryService) {

  }

  // ngOnInit(): void {
  //
  // }
  @ViewChild('swiperRef') swiperRef!: ElementRef;

  currentSlide = 0;
  private swiperInstance: any = null;

  slides = [
    {
      title: 'Welcome to Our Platform',
      description: 'Discover amazing features and capabilities that will transform your workflow and boost productivity.',
      image: 'https://picsum.photos/400/300?random=1',
      bgColor: '#667eea',
      buttonText: 'Get Started'
    },
    {
      title: 'Powerful Analytics',
      description: 'Gain deep insights into your data with our advanced analytics tools and real-time reporting.',
      image: 'https://picsum.photos/400/300?random=2',
      bgColor: '#764ba2',
      buttonText: 'Learn More'
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with your favorite tools and services through our extensive API and plugin ecosystem.',
      image: 'https://picsum.photos/400/300?random=3',
      bgColor: '#f093fb',
      buttonText: 'Explore APIs'
    },
    {
      title: 'Enterprise Security',
      description: 'Your data is protected with bank-level security, compliance certifications, and encryption.',
      image: 'https://picsum.photos/400/300?random=4',
      bgColor: '#4facfe',
      buttonText: 'View Security'
    },
    {
      title: 'Ready to Begin?',
      description: 'Join thousands of satisfied customers who have transformed their business with our platform.',
      image: 'https://picsum.photos/400/300?random=5',
      bgColor: '#43e97b',
      buttonText: 'Start Free Trial'
    }
  ];

  ngOnInit() {
    // Configure Swiper modules
    Swiper.use([Navigation, Pagination, Autoplay]);
     this.stories = this.storyService.getStories();
  }

  ngAfterViewInit() {
    // Wait for the swiper element to be ready
    setTimeout(() => {

      this.initializeSwiper();
    }, 100);
  }

  private initializeSwiper() {
    const swiperEl = this.swiperRef?.nativeElement;
    if (swiperEl) {
      // Initialize the swiper manually
      swiperEl.initialize();

      // Wait for swiper to be fully initialized
      const checkSwiper = () => {
        if (swiperEl.swiper) {
          this.swiperInstance = swiperEl.swiper;
          this.setupEventListeners();
          console.log('Swiper initialized successfully');
        } else {
          setTimeout(checkSwiper, 50);
        }
        register()
      };
      checkSwiper();
    }
  }

  private setupEventListeners() {
    if (this.swiperInstance) {
      this.swiperInstance.on('slideChange', () => {
        this.currentSlide = this.swiperInstance.realIndex || this.swiperInstance.activeIndex;
        console.log('Slide changed to:', this.currentSlide);
      });

      this.swiperInstance.on('init', () => {
        console.log('Swiper init event fired');
      });
    }
  }

  // Method to programmatically control the swiper
  goToSlide(index: number) {
    console.log('Going to slide:', index);
    if (this.swiperInstance) {
      this.swiperInstance.slideTo(index);
      this.currentSlide = index;
    } else {
      console.log('Swiper instance not ready');
    }
  }

  nextSlide() {
    console.log('Next slide clicked');
    if (this.swiperInstance) {
      this.swiperInstance.slideNext();
    } else {
      console.log('Swiper instance not ready');
    }
  }

  prevSlide() {
    console.log('Previous slide clicked');
    if (this.swiperInstance) {
      this.swiperInstance.slidePrev();
    } else {
      console.log('Swiper instance not ready');
    }
  }

  onSlideAction(slideIndex: number) {
    console.log(`Action clicked on slide ${slideIndex + 1}`);
    // Add your custom logic here for each slide's action
    switch(slideIndex) {
      case 0:
        console.log('Get Started clicked');
        break;
      case 1:
        console.log('Learn More clicked');
        break;
      case 2:
        console.log('Explore APIs clicked');
        break;
      case 3:
        console.log('View Security clicked');
        break;
      case 4:
        console.log('Start Free Trial clicked');
        break;
    }
  }

}
