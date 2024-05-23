import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, catchError, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }


  //catchErrr intercetta e gestisce errori in un'observable
  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe( // with from promise to observable convert, so i can manipulate data with operators
      catchError(err => {
        return throwError(() => err); // crea un'observable che emette l'errore, cosi da essere gestisto dal subscriber
      })
    ); 
  }

  register(email: string, password: string): Observable<any> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password)).pipe( //
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut().then(() => { // 
      this.router.navigate(['/login']);
    })).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  isAuthenticated(): boolean {
    return this.afAuth.currentUser!== null;
  }
}
