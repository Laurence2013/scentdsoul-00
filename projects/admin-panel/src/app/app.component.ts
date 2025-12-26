import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	imports: [ButtonModule, RippleModule]
})
export class AppComponent implements OnInit {

  public constructor(){}
  public ngOnInit(){}
}
