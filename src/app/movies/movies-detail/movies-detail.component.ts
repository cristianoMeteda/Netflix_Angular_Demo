import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMovieCast, IMovieDetails, IPopularMovie, IReview } from 'src/app/model/movieModels';
import { MoviesHttpClientService } from '../movies-http.client.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';

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
  movieCast?: IMovieCast[];

  constructor(private route: ActivatedRoute, 
              private movieService: MoviesHttpClientService,
              private router: Router,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.movieId = +params['id'];  
    this.loadAllMovieData();
    });
  }

  private async loadAllMovieData() {
    if (this.movieId) 
      try {
    await Promise.all([ //mantiene vantaggio asincronia e miglioria con esecuzione in parallelo
      this.loadMovieDetails(),
      this.loadSimilarMovies(),
      this.loadMovieTrailer(),
      this.loadReviews(),
      this.loadCast()
    ]);
    } catch (e) {
      console.error(e);
    }
  }

  async loadMovieDetails() {
    if (this.movieId)
    try {
      const response = await firstValueFrom(this.movieService.getMovieDetails(this.movieId));
      if (response)
        this.movieDetails = response;
    } catch (e) {
      console.error(e);
    }
  }

  async loadSimilarMovies() {
    if (this.movieId)
    try {
      const response = await firstValueFrom(this.movieService.getSimilarMovies(this.movieId));
      if (response) 
        this.moviesSimilar = response.results;
    } catch (e) {
      console.error(e);
    }
  }

  async loadMovieTrailer() {
    if (this.movieId)
      try {
        const response = await firstValueFrom(this.movieService.getMovieTrailer(this.movieId))
        if (response && response.results.length > 0) {
          const trailerKey = response.results[0].key;
          this.movieTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailerKey}`);
        }
      } catch (e) {
        console.error(e);
      }
              
      
  }

  async loadReviews() {
    if (this.movieId)
    try {
      const response = await firstValueFrom(this.movieService.getMovieReviews(this.movieId));
      if(response)
        this.movieReviews = response.results;
    } catch (e) {
      console.error(e);
    }
    
  }

  async loadCast() {
    if (this.movieId)
    try {
      const response = await firstValueFrom(this.movieService.getMovieCast(this.movieId));
      if(response)
        this.movieCast = response.cast;
      console.log(this.movieCast);
    } catch (e) {
      console.error(e);
    }
  }

  onBack(): void {
    history.back();
  }

  onClick(movieId: number): void {
    this.router.navigate(['movie/' + movieId]);
  }

  /*
    Le funzioni asincrone vengono utilizzate quando dobbiamo eseguire operazioni che possono richiedere del tempo per completarsi,
    come chiamate HTTP, operazioni su file, o operazioni di I/O. 
    Esse permettono al codice di continuare a funzionare senza bloccare il thread principale, migliorando la reattività dell'applicazione.
    Il programma tornerà ai risultati delle operazioni asincrone solo quando tutte sono completate.
  */
}
