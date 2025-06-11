import { Component } from '@angular/core';
import { StoryBook } from "../story-book/story-book";

@Component({
  selector: 'app-home',
  imports: [StoryBook],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
