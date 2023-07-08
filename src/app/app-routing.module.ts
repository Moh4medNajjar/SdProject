import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeComponent } from './demande/demande.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'demande', component: DemandeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/demande' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
