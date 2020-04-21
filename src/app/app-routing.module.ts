import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'newdiary',
    loadChildren: () => import('./newdiary/newdiary.module').then( m => m.NewdiaryPageModule)
  },
  {
    path: 'alldiary',
    loadChildren: () => import('./alldiary/alldiary.module').then( m => m.AlldiaryPageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'detaildiary',
    loadChildren: () => import('./detaildiary/detaildiary.module').then( m => m.DetaildiaryPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'newpost',
    loadChildren: () => import('./newpost/newpost.module').then( m => m.NewpostPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'addreminder',
    loadChildren: () => import('./addreminder/addreminder.module').then( m => m.AddreminderPageModule)
  },
  {
    path: 'detailreminder',
    loadChildren: () => import('./detailreminder/detailreminder.module').then( m => m.DetailreminderPageModule)
  },
  {
    path: 'editreminder',
    loadChildren: () => import('./editreminder/editreminder.module').then( m => m.EditreminderPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'changepwd',
    loadChildren: () => import('./changepwd/changepwd.module').then( m => m.ChangepwdPageModule)
  },
  {
    path: 'forgotpwd',
    loadChildren: () => import('./forgotpwd/forgotpwd.module').then( m => m.ForgotpwdPageModule)
  },  {
    path: 'editpost',
    loadChildren: () => import('./editpost/editpost.module').then( m => m.EditpostPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
