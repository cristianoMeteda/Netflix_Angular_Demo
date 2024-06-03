import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPopularSerie, ISeason, ISeasonEpisodes, ISerieDetails, ISerieResult } from "../model/serieModels";

@Injectable({
    providedIn: 'root'
})

export class SeriesHttpClientService {

    api : string = "https://api.themoviedb.org/3/tv/";

    
    constructor(private http : HttpClient) {}

    getPopularSeries(): Observable<ISerieResult<IPopularSerie>> {
        return this.http.get<ISerieResult<IPopularSerie>>(this.api + "popular");
    }

    getSerieDetails(serieId: number): Observable<ISerieDetails> {
        return this.http.get<ISerieDetails>(this.api + `${serieId}`);
    }

    getSeasonDetails(serieId: number, season_number:number): Observable<ISeason> {
        return this.http.get<ISeason>(this.api + `${serieId}/season/${season_number}`);
    }

}