import { Component, OnInit } from '@angular/core';
import { MoviesHttpClientService } from './movies-http.client.service';
import { IPopularMovie } from '../model/movieModels';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies? : IPopularMovie[];

  constructor(private movieService: MoviesHttpClientService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadPopularMovies();
  }

  async loadPopularMovies() {
    try {
      const movies = await firstValueFrom(this.movieService.getPopularMovies());
      if(movies)
        this.popularMovies = movies.results;
    }catch (e){
      console.error(e);
    }
  }

  onClick(movieId: number): void {
    this.router.navigate(['movie/' + movieId]);
  }

  

}
