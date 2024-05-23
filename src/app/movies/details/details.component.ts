import { Component, Input} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IMovieDetails } from 'src/app/model/movieModels';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  @Input() movieDetails?: IMovieDetails
  @Input() movieTrailer?: SafeResourceUrl

}
