import { Injectable } from '@angular/core';

let config = {
  id: '',
  login: '',
  email: ''
};

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  constructor() { }

  setConfig(object): void {
    config = {...config, ...object};
  }

  getConfig(): {} {
    return config;
  }
}
