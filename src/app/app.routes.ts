import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'tabs',
		loadComponent: () => import('./features/tabs/tabs.page').then(m => m.TabsPage),
		children: [
			{
				path: 'home',
				loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
			},
			{
				path: 'scents',
				loadComponent: () => import('./features/scents/scents.page').then( m => m.ScentsPage)
			},
			{
				path: 'personalised',
				loadComponent: () => import('./features/personalised/personalised.page').then( m => m.PersonalisedPage)
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full',
			}
		]
	},
];
