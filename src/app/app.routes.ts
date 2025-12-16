import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'tabs',
		loadComponent: () => import('./features/tabs/tabs.page').then(m => m.TabsPage),
		children: [
			{
				path: 'home',
				loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full',
			}
		]
	},
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
];
