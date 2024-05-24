import { Component, Input} from '@angular/core';
import { IReview } from 'src/app/model/movieModels';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  @Input() movieReview?: IReview;

}
