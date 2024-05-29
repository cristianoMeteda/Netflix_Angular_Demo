import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPopularMovie } from 'src/app/model/movieModels';
import { IPopularSerie } from 'src/app/model/serieModels';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.css'
})
export class PosterComponent {

  @Input() movie? : IPopularMovie; //data from parent to child
  @Input() serie? : IPopularSerie;
  @Output() clickDetail = new EventEmitter<number>(); //event from child to parent

  onClick (id: number | undefined): void {
    if (id) 
      this.clickDetail.emit(id);
  }

}
