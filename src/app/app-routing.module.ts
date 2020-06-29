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
  {
    path: 'viewpost',
    loadChildren: () => import('./viewpost/viewpost.module').then( m => m.ViewpostPageModule)
  },
  {
    path: 'newpost2',
    loadChildren: () => import('./newpost2/newpost2.module').then( m => m.Newpost2PageModule)
  },
  {
    path: 'editpost2',
    loadChildren: () => import('./editpost2/editpost2.module').then( m => m.Editpost2PageModule)
  },
  {
    path: 'newpost3',
    loadChildren: () => import('./newpost3/newpost3.module').then( m => m.Newpost3PageModule)
  },
  {
    path: 'editpost3',
    loadChildren: () => import('./editpost3/editpost3.module').then( m => m.Editpost3PageModule)
  },
  {
    path: 'newpost4',
    loadChildren: () => import('./newpost4/newpost4.module').then( m => m.Newpost4PageModule)
  },
  {
    path: 'editpost4',
    loadChildren: () => import('./editpost4/editpost4.module').then( m => m.Editpost4PageModule)
  },
  {
    path: 'newpost5',
    loadChildren: () => import('./newpost5/newpost5.module').then( m => m.Newpost5PageModule)
  },
  {
    path: 'editpost5',
    loadChildren: () => import('./editpost5/editpost5.module').then( m => m.Editpost5PageModule)
  },
  {
    path: 'newpost6',
    loadChildren: () => import('./newpost6/newpost6.module').then( m => m.Newpost6PageModule)
  },
  {
    path: 'editpost6',
    loadChildren: () => import('./editpost6/editpost6.module').then( m => m.Editpost6PageModule)
  },
  {
    path: 'editpost7',
    loadChildren: () => import('./editpost7/editpost7.module').then( m => m.Editpost7PageModule)
  },
  {
    path: 'newpost7',
    loadChildren: () => import('./newpost7/newpost7.module').then( m => m.Newpost7PageModule)
  },
  {
    path: 'newpost8',
    loadChildren: () => import('./newpost8/newpost8.module').then( m => m.Newpost8PageModule)
  },
  {
    path: 'editpost8',
    loadChildren: () => import('./editpost8/editpost8.module').then( m => m.Editpost8PageModule)
  },
  {
    path: 'editpost9',
    loadChildren: () => import('./editpost9/editpost9.module').then( m => m.Editpost9PageModule)
  },
  {
    path: 'newpost9',
    loadChildren: () => import('./newpost9/newpost9.module').then( m => m.Newpost9PageModule)
  },
  {
    path: 'newpost10',
    loadChildren: () => import('./newpost10/newpost10.module').then( m => m.Newpost10PageModule)
  },
  {
    path: 'editpost10',
    loadChildren: () => import('./editpost10/editpost10.module').then( m => m.Editpost10PageModule)
  },
  {
    path: 'editpost11',
    loadChildren: () => import('./editpost11/editpost11.module').then( m => m.Editpost11PageModule)
  },
  {
    path: 'newpost11',
    loadChildren: () => import('./newpost11/newpost11.module').then( m => m.Newpost11PageModule)
  },
  {
    path: 'newpost12',
    loadChildren: () => import('./newpost12/newpost12.module').then( m => m.Newpost12PageModule)
  },
  {
    path: 'editpost12',
    loadChildren: () => import('./editpost12/editpost12.module').then( m => m.Editpost12PageModule)
  },
  {
    path: 'editpost13',
    loadChildren: () => import('./editpost13/editpost13.module').then( m => m.Editpost13PageModule)
  },
  {
    path: 'newpost13',
    loadChildren: () => import('./newpost13/newpost13.module').then( m => m.Newpost13PageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
