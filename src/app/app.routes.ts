import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageGuestUser1Component } from './landing-page/landing-page-guest-user1/landing-page-guest-user1.component';
import { LandingPageGuestUser2Component } from './landing-page/landing-page-guest-user2/landing-page-guest-user2.component';

export const routes: Routes = [
    {
        path: 'landing-page-guest-user1',
        component: LandingPageGuestUser1Component
    },
    {
        path: 'landing-page-guest-user2',
        component: LandingPageGuestUser2Component
    }
];
