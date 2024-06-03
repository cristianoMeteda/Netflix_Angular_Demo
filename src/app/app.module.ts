import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { DetailsComponent } from './movies/details/details.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar'; // Assicurati di importare MatSnackBarModule
import { ReviewsComponent } from './movies/reviews/reviews.component';
import { MatIconModule } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CastDetailComponent } from './movies/cast-detail/cast-detail.component';
import { HeaderComponent } from './header/header.component';
import { SeriesComponent } from './series/series.component';
import { PosterComponent } from './shared/poster/poster.component';
import { SeriesDetailComponent } from './series/series-detail/series-detail.component';
import { SeasonDetailsComponent } from './series/season-details/season-details.component';


@NgModule({
  declarations: [
    LoginComponent,
    MoviesComponent,
    AppComponent,
    MoviesDetailComponent,
    PosterComponent,
    DetailsComponent,
    ReviewsComponent,
    CastDetailComponent,
    HeaderComponent,
    SeriesComponent,
    PosterComponent,
    SeriesDetailComponent,
    SeasonDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule, 
    MatIconModule,
    SlickCarouselModule
  ],
  providers: [
    MatSnackBarConfig,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    provideAnimationsAsync() //più interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
