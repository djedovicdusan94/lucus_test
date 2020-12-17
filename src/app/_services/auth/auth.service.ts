import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(formData: any) {
    if (formData['username'] === 'test' || formData['password'] === 'test') {
      localStorage.setItem('isLoggedIn', 'true');
    }
  }

  loggedIn() {
    return JSON.parse(localStorage.getItem('isLoggedIn'));
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/identity']);
  }
}
