import { Component, OnInit } from '@angular/core';
import {Categories} from '../categories.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {
  name: 'first';
  description: 'first component';
  price: 100;
  category: Categories;
  isAvailable: true;

  constructor() { }

  ngOnInit() {
  }

}
