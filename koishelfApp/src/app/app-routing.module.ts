import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/store/store.module').then(m => m.StorePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'buscador',
    loadChildren: () => import('./pages/buscador/buscador.module').then( m => m.BuscadorPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./pages/premium/premium.module').then(m => m.PremiumPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then(m => m.PreferencesPageModule)
  },
  {
    path: 'genres',
    loadChildren: () => import('./pages/genres/genres.module').then(m => m.GenresPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./pages/forum/forum.module').then(m => m.ForumPageModule)
  },
    {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'section',
    loadChildren: () => import('./pages/section/section.module').then( m => m.SectionPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },

{
    path: 'synopsis',
    loadChildren: () => import('./pages/synopsis/synopsis.module').then(m => m.SynopsisPageModule)
  },
  {
    path: 'manga-detail',
    loadChildren: () => import('./pages/manga-detail/manga-detail.module').then(m => m.MangaDetailPageModule)
  },
  {
    path: 'manga-purchase-info',
    loadChildren: () => import('./pages/manga-purchase-info/manga-purchase-info.module').then(m => m.MangaPurchaseInfoPageModule)
  },
  {
    path: 'mangateca',
    loadChildren: () => import('./pages/mangateca/mangateca.module').then( m => m.MangatecaPageModule)
  },
  {
    path: 'mangateca-edicion',
    loadChildren: () => import('./pages/mangateca-edicion/mangateca-edicion.module').then( m => m.MangatecaEdicionPageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./pages/purchase/purchase.module').then( m => m.PurchasePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
