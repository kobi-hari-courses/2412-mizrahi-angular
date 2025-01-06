import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AdditionService } from './services/addition.service';
import { AUDIT_PREFIX } from './tokens/audit-prefix.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    {
      provide: AUDIT_PREFIX, 
      useValue: 'info'
    }
  ]
};
