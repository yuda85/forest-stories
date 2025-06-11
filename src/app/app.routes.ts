import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { StoryBook } from './components/story-book/story-book';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'story/:id', component: StoryBook },
  { path: '**', redirectTo: '' }

];
