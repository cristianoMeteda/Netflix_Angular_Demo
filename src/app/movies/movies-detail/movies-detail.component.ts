import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMovieDetails, IPopularMovie, IReview, ITrailer } from 'src/app/model/movieModels';
import { MoviesHttpClientService } from '../movies-http.client.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrl: './movies-detail.component.css'
})
export class MoviesDetailComponent implements OnInit {

  movieId?: number;
  movieDetails?: IMovieDetails;
  moviesSimilar?: IPopularMovie[];
  movieTrailer?: SafeResourceUrl;
  movieReviews?: IReview[];


  constructor(private route: ActivatedRoute, 
              private movieService: MoviesHttpClientService,
              private router: Router,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.movieId = +params['id'];  
      this.loadMovieDetails();
      this.loadSimilarMovies();
      this.loadMovieTrailer();
      this.loadReviews();
    });
  }

  loadMovieDetails() {
    if (this.movieId)
    this.movieService.getMovieDetails(this.movieId).subscribe({
      next: (response) => {
        if (response) 
          this.movieDetails = response;
      }
    });
  }

  loadSimilarMovies() {
    if (this.movieId)
    this.movieService.getSimilarMovies(this.movieId).subscribe({
      next: (response) => {
        if (response) {
          this.moviesSimilar = response.results;
        }
      },
      error: e => console.error(e)
    });
  }

  loadMovieTrailer() {
    if (this.movieId)
      this.movieService.getMovieTrailer(this.movieId).subscribe({
        next: (response) => {
          if (response) {
            const trailerKey = response.results[0].key;
            this.movieTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailerKey}`);
          }
        },
        error: e => console.error(e)
      });
  }

  loadReviews() {
    if (this.movieId)
    this.movieService.getMovieReviews(this.movieId).subscribe({
      next: (response) => {
        if (response) {
          this.movieReviews = response.results;
        }
      },
      error: e => console.error(e)
    });
  }

  onBack(): void {
    history.back();
  }

  onClick(movieId: number): void {
    this.router.navigate(['movie/' + movieId]);
  }
}
