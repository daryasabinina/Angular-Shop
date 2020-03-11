import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setItem(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  getItem(name: string): string {
    return localStorage.getItem(name);
  }

  removeItem(name: string): void {
    localStorage.removeItem(name);
  }
}
