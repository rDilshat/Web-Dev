import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Убедись, что путь правильный

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Добавляем маршрутизацию
}).catch(err => console.error(err));
