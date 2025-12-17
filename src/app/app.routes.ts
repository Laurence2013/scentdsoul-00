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
				path: 'personalised',
				loadComponent: () => import('./features/personalised/personalised.page').then( m => m.PersonalisedPage)
			},
			{
				path: 'orders',
				loadComponent: () => import('./features/orders/orders.page').then( m => m.OrdersPage)
			},
			{
				path: 'account',
				loadComponent: () => import('./features/account/account.page').then( m => m.AccountPage)
			},
			{
				path: 'scents',
				loadComponent: () => import('./features/scents/scents.page').then( m => m.ScentsPage)
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
