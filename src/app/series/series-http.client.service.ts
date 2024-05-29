import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPopularSerie, ISerieResult } from "../model/serieModels";

@Injectable({
    providedIn: 'root'
})

export class SeriesHttpClientService {

    api : string = "https://api.themoviedb.org/3/tv/";

    
    constructor(private http : HttpClient) {}

    getPopularSeries(): Observable<ISerieResult<IPopularSerie>> {
        return this.http.get<ISerieResult<IPopularSerie>>(this.api + "popular");
    }
}