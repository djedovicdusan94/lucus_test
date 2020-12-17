import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

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
  }
}
