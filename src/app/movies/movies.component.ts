import { Component, OnInit } from '@angular/core';
import { MoviesHttpClientService } from './movies-http.client.service';
import { IPopularMovie } from '../model/movieModels';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: IPopularMovie[]= [];

  constructor(private movieService: MoviesHttpClientService,
              private router: Router,
              private authService: AuthService,
            ) { }

  ngOnInit(): void {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe({
      next: (response) => {
        if (response) {
          this.popularMovies = response.results;
        }
      },
      error: e => console.error(e)
    });
  }

  onClick(movieId: number): void {
    this.router.navigate(['movie/' + movieId]);
  }

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: e => console.error(e)
    });
  }

}
