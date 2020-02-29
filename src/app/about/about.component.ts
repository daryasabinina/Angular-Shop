import { Component, OnInit, Optional, InjectionToken, Inject } from '@angular/core';

import { LocalStorageService } from '../shared/local-storage.service';
import { ConfigOptionsService } from '../shared/config-options.service';
import { NString, GeneratorFactory } from '../shared/generator-n.service';
import { GeneratorService } from '../shared/generator.service';
import ConstantService from '../shared/constant.service';

const ConstService = new InjectionToken<string>('ConstService');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    ConfigOptionsService,
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConstService, useValue: ConstantService},
    { provide: NString,
      useFactory: GeneratorFactory(7),
      deps: [GeneratorService]
    }
  ]
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private myLocalStorage: LocalStorageService,
    @Optional() private configService: ConfigOptionsService,
    @Inject(NString) private nString: string
  ) { }

  ngOnInit() {
    this.myLocalStorage.setItem('1', '2');
    console.log(this.myLocalStorage.getItem('1'));

    this.configService.setConfig({login: 'darya', email: 'darya@da.sha', iceCream: true});
    console.log(this.configService.getConfig());

    console.log(this.nString);
  }
}
