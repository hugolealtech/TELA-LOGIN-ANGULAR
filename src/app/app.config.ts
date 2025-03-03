import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

// Configuração do Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYDkbaLCBddsVwdKhgSyR0DtY-i4wSw8k",
  authDomain: "auth-advocaciaaws.firebaseapp.com",
  projectId: "auth-advocaciaaws",
  storageBucket: "auth-advocaciaaws.firebasestorage.app",
  messagingSenderId: "1027780834429",
  appId: "1:1027780834429:web:071483b0af40c6e95cad14",
  measurementId: "G-L8YXS362WQ"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Não usa importProvidersFrom, mas agora passa diretamente os provedores
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
