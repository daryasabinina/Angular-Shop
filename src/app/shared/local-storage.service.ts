import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setItem(name, value): void {
    localStorage.setItem(name, value);
  }

  getItem(name): string {
    return localStorage.getItem(name);
  }

  removeItem(name): void {
    localStorage.removeItem(name);
  }
}
