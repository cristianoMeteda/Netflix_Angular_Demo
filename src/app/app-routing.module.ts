import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { AuthGuard } from './services/auth-guard.service';
import { SeriesComponent } from './series/series.component';
import { SeriesDetailComponent } from './series/series-detail/series-detail.component';
import { SeasonDetailsComponent } from './series/season-details/season-details.component';

const routes: Routes = [
    {   
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'movies', 
        component: MoviesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'movie/:id', 
        component: MoviesDetailComponent
    },
    {
        path: 'series',
        component: SeriesComponent
    },
    {
        path: 'serie/:id', 
        component: SeriesDetailComponent
    },
    {
        path: 'series/:id/season/:seasonNumber', 
        component: SeasonDetailsComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
  
