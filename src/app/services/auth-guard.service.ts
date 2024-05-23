import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router
    ) {}

    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    /*
    unhautorized user go to /movies; authguard will call; verify of isAuthenticated: if 'false, go to /login'; otherwise, go to /movies
    */    

    /*
    GUARDS: 
    CanActivate: Verifica se una rotta può essere attivata.
    CanActivateChild: Verifica se le rotte figlio possono essere attivate.
    CanDeactivate: Verifica se una rotta può essere disattivata, utile per confermare l'abbandono di una pagina con modifiche non salvate.
    Resolve: Recupera dati prima che la rotta venga attivata.
    CanLoad: Verifica se un modulo di funzionalità può essere caricato.
    */
}