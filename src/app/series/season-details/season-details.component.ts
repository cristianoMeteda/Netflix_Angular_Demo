import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEpisode, ISeason, ISerieDetails } from 'src/app/model/serieModels';
import { SeriesHttpClientService } from '../series-http.client.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrl: './season-details.component.css'
})
export class SeasonDetailsComponent implements OnInit {

  seasonDetails?: ISeason;
  episodes?: IEpisode[];
  serieId?: number;
  seasonNumber?: number;


  constructor(private route: ActivatedRoute,
              private serieService: SeriesHttpClientService){}  

  ngOnInit(): void {
    this.route.params.subscribe((params :Params) => {
      this.serieId = params['id'];
      this.seasonNumber = params['seasonNumber'];
      this.loadSeasonDetails();
    });
  }


  async loadSeasonDetails() {
    if (this.serieId && this.seasonNumber)
    try {
      const response = await firstValueFrom(this.serieService.getSeasonDetails(this.serieId, this.seasonNumber));
      if (response)
        this.seasonDetails = response;
    } catch (e) {
      console.error(e);
    }
  } 


  onBack(): void {
    history.back();
  }
}
