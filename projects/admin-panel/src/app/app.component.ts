import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Avatar } from 'primeng/avatar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [CommonModule, Avatar, Card, ButtonModule]
})
export class AppComponent implements OnInit {

	public sidebarVisible = false;

  public constructor(){}
  public ngOnInit(){}
}
