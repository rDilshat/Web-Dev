import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ProductService } from './products/product.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), ProductService]
};
