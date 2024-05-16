import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMovieDetails, IMovieResult, IPopularMovie } from "../model/movieModels";

@Injectable({
    providedIn: 'root'
})

export class MoviesHttpClientService {

    api : string = "https://api.themoviedb.org/3/movie/";


    constructor(private http: HttpClient) { }

    getPopularMovies(): Observable<IMovieResult<IPopularMovie>> {
        return this.http.get<IMovieResult<IPopularMovie>>(this.api + "popular");
    }

    getMovieDetails(movieId: string): Observable<IMovieDetails> {
        return this.http.get<IMovieDetails>(this.api + `${movieId}`);
    }
}