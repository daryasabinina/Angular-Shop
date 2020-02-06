import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'shop';

  @ViewChild('appTitle', {static: false})
  appTitle: ElementRef;

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = this.title;
  }
}
