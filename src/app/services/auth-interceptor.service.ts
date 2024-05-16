import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const BearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDNmM2FlYmUyYTNjOWUzMzE1ODU2YWQzZDY5NTQyNSIsInN1YiI6IjY2NDViYzU2ODJlMGM3NzIyNjJlZmY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FRP8EtOsZOjsbrixoWmSMvXCG5uKohzVOe7Np_4fpVs'
        const modReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${BearerToken}`
            }
        });
        return next.handle(modReq);
    }
}