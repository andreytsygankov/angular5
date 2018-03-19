import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {AuthGuard} from './_guards/auth.guard';
import {AuthenticationService, UserService, AlertService} from './_services/index';
import {fakeBackendProvider} from './_helpers/index';
import {LoginModule} from './login/login.module';
import {LayoutModule} from './layout/layout.module';
import {SignupModule} from './signup/signup.module';
import {AlertComponent} from './_directives';
import {JwtInterceptor} from './_helpers/jwt.interceptor';

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from 'angular5-social-login';

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider('267105483825989')
            },
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider('274108320468-p8oiaag9etb9lpg9q5drobkfff6dmkak.apps.googleusercontent.com')
            },
        ]
    );
    return config;
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        SignupModule,
        LoginModule,
        LayoutModule,
        TranslateModule.forRoot(),
        SocialLoginModule
    ],
    declarations: [AppComponent, AlertComponent],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        AlertService,
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        },
        // providers used to create fake backend
        fakeBackendProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
