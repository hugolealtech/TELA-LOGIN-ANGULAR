import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [

  {path: '', component:LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {path: 'principal',
    component: PrincipalComponent
  }
];
