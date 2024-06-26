import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingPageGuestUser1Component } from "./landing-page/landing-page-guest-user1/landing-page-guest-user1.component";
import { LandingPageGuestUser2Component } from "./landing-page/landing-page-guest-user2/landing-page-guest-user2.component";
import { LandingPageGuestUser4Component } from "./landing-page/landing-page-guest-user4/landing-page-guest-user4.component";
import { SignUpComponent } from "./signup-authentication/sign-up/sign-up.component";
import { BankDetails1Component } from './earnings-wallet/bank-details1/bank-details1.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, RouterLink, LandingPageGuestUser1Component, LandingPageGuestUser2Component, LandingPageGuestUser4Component, SignUpComponent, BankDetails1Component]
})
export class AppComponent {
  title = 'iEndorse';
}
