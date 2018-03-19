import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
    private loggedIn: boolean;
    private loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

    private router: Router;

    constructor(router: Router, private http: HttpClient) {
        this.router = router;
        this.setLoggedIn(this.firstAuthenticatedCheck());
    }

    public setLoggedIn(value: boolean) {
        this.loggedIn$.next(value);
        this.loggedIn = value;
    }

    // public login(username: string, password: string) {
    //     return this.http
    //         .post(backendRoutes.auth, JSON.stringify({username, password}))
    //         .map((response: Response) => {
    //             const user = new User(response.json().data as IUser);
    //             if (user && user.authToken) {
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 this.setLoggedIn(true);
    //             }
    //             return user;
    //         });
    // }

    public authByGoogle(authData: any) {
        localStorage.setItem('currentUser', JSON.stringify(authData));
        this.setLoggedIn(true);
        // this.router.navigate(['/']);
    }

    public authByFacebook(authData: any) {
        localStorage.setItem('currentUser', JSON.stringify(authData));
        this.setLoggedIn(true);
        // this.router.navigate(['/']);
    }

    public getUserData() {
        if (this.authenticated) {
            return JSON.parse(localStorage.getItem('currentUser'));
        }
        return null;
    }

    public logout() {
        localStorage.removeItem('currentUser');
        // Remove tokens and profile and update login status subject
        this.setLoggedIn(false);
    }

    get authenticated() {
        return this.loggedIn;
    }

    private firstAuthenticatedCheck(): boolean {
        const currentUserInfo = localStorage.getItem('currentUser');
        return currentUserInfo !== null;
    }
}