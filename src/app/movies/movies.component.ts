import { Component, OnInit } from '@angular/core';
import { MoviesHttpClientService } from './movies-http.client.service';
import { IPopularMovie } from '../model/movieModels';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: IPopularMovie[]= [];

  constructor(private http: MoviesHttpClientService) {}

  ngOnInit(): void {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.http.getPopularMovies().subscribe({
      next: (response) => {
        if (response) {
          this.popularMovies = response.results;
          console.log(this.popularMovies);
        }
      },
      error: e => console.error(e)
    });
  }

}
