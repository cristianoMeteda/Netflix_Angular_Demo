import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMovieDetails, IMovieResult, IPopularMovie, ITrailer } from "../model/movieModels";

@Injectable({
    providedIn: 'root'
})

export class MoviesHttpClientService {

    api : string = "https://api.themoviedb.org/3/movie/";


    constructor(private http: HttpClient) { }

    getPopularMovies(): Observable<IMovieResult<IPopularMovie>> {
        return this.http.get<IMovieResult<IPopularMovie>>(this.api + "popular");
    }

    getMovieDetails(movieId: number): Observable<IMovieDetails> {
        return this.http.get<IMovieDetails>(this.api + `${movieId}`);
    }

    getSimilarMovies(movieId: number): Observable<IMovieResult<IPopularMovie>> {
        return this.http.get<IMovieResult<IPopularMovie>>(this.api + `${movieId}/similar`);
    }

    getMovieTrailer(movieId: number): Observable<IMovieResult<ITrailer>> {
        return this.http.get<IMovieResult<ITrailer>>(this.api + `${movieId}/videos`);
    }
}