import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPopularMovie } from 'src/app/model/movieModels';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.css'
})
export class MoviePosterComponent {

  @Input() movie? : IPopularMovie; //data from parent to child
  @Output() clickDetail = new EventEmitter<number>(); //event from child to parent

  onClick (id: number | undefined): void {
    if (id) 
      this.clickDetail.emit(id);
  }

}
