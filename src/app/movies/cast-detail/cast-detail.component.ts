import { Component, Input } from '@angular/core';
import { IMovieCast } from 'src/app/model/movieModels';

@Component({
  selector: 'app-cast-detail',
  templateUrl: './cast-detail.component.html',
  styleUrl: './cast-detail.component.css'
})
export class CastDetailComponent {

  @Input() actor?: IMovieCast
}
