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
				path: 'cardboard',
				loadComponent: () => import('./features/cardboard/cardboard.page').then( m => m.CardboardPage)
			},
			{
				path: 'vent',
				loadComponent: () => import('./features/vent/vent.page').then( m => m.VentPage)
			},
			{
				path: 'spray',
				loadComponent: () => import('./features/spray/spray.page').then( m => m.SprayPage)
			},
			{
				path: 'plug-in',
				loadComponent: () => import('./features/plug-in/plug-in.page').then( m => m.PlugInPage)
			},
			{
				path: 'bag',
				loadComponent: () => import('./features/bag/bag.page').then( m => m.BagPage)
			},
			{
				path: 'oil-diffuser',
				loadComponent: () => import('./features/oil-diffuser/oil-diffuser.page').then( m => m.OilDiffuserPage)
			},
			{
				path: 'bead-sachets',
				loadComponent: () => import('./features/bead-sachets/bead-sachets.page').then( m => m.BeadSachetsPage)
			},
			{
				path: 'under-seat',
				loadComponent: () => import('./features/under-seat/under-seat.page').then( m => m.UnderSeatPage)
			},
			{
				path: 'electronic-ioniser',
				loadComponent: () => import('./features/electronic-ioniser/electronic-ioniser.page').then( m => m.ElectronicIoniserPage)
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
  {
    path: 'cardboard',
    loadComponent: () => import('./admin/cardboard/cardboard.page').then( m => m.CardboardPage)
  },
  {
    path: 'vent',
    loadComponent: () => import('./admin/vent/vent.page').then( m => m.VentPage)
  },
  {
    path: 'spray',
    loadComponent: () => import('./admin/spray/spray.page').then( m => m.SprayPage)
  },
  {
    path: 'plug-in',
    loadComponent: () => import('./admin/plug-in/plug-in.page').then( m => m.PlugInPage)
  },
  {
    path: 'bag',
    loadComponent: () => import('./admin/bag/bag.page').then( m => m.BagPage)
  },
  {
    path: 'oil-diffuser',
    loadComponent: () => import('./admin/oil-diffuser/oil-diffuser.page').then( m => m.OilDiffuserPage)
  },
  {
    path: 'bead-sachets',
    loadComponent: () => import('./admin/bead-sachets/bead-sachets.page').then( m => m.BeadSachetsPage)
  },
  {
    path: 'electronic-ioniser',
    loadComponent: () => import('./admin/electronic-ioniser/electronic-ioniser.page').then( m => m.ElectronicIoniserPage)
  },
  {
    path: 'under-seat',
    loadComponent: () => import('./admin/under-seat/under-seat.page').then( m => m.UnderSeatPage)
  },
];
