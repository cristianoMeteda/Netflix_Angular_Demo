import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ISerieDetails } from 'src/app/model/serieModels';
import { SeriesHttpClientService } from '../series-http.client.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  serieId? : number;
  serieDetails? : ISerieDetails;

  constructor(private route: ActivatedRoute,
              private serieService: SeriesHttpClientService,
              private router: Router) {}


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.serieId = params['id'];
      this.loadSerieDetails();
    });
  }

  async loadSerieDetails() {
    if (this.serieId)
    try {
      const response = await firstValueFrom(this.serieService.getSerieDetails(this.serieId));
      if (response)
        this.serieDetails = response;
    } catch (e) {
      console.error(e);
    }
  }

  onClick(serieId: number, seasonNumber: number ) : void {
    this.router.navigate(['/series', serieId, 'season', seasonNumber])
  }

  onBack(): void {
    history.back();
  }
}
