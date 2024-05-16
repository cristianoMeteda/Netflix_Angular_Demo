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




@NgModule({
  declarations: [
    LoginComponent,
    MoviesComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    provideAnimationsAsync() //più interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
