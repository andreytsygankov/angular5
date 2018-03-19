import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { AlertService, UserService, AuthenticationService } from '../_services/index';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    model: any = {};
    loading = false;
    agree = false;
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private socialAuthService: AuthService,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
    }

    toggleAgree() {
        this.agree = !this.agree;
    }
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/access-denied']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    public socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform == 'facebook') {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform == 'google') {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }

        this.socialAuthService.signIn(socialPlatformProvider).then(
            (userData) => {
                if (socialPlatform == 'facebook') {
                    this.authenticationService.authByFacebook(userData);
                } else if (socialPlatform == 'google') {
                    this.authenticationService.authByGoogle(userData);
                }
                this.router.navigate(['/home']);
            }
        );
    }
}
