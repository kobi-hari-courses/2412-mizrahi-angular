import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #value = signal(false);

  get value() {
    return this.#value.asReadonly();
  }

  login() {
    this.#value.set(true);
  }

  logout() {
    this.#value.set(false);
  }
}
