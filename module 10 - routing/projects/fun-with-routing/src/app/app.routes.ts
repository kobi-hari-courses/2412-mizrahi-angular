import { Routes } from '@angular/router';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { PageCComponent } from './pages/page-c/page-c.component';

export const routes: Routes = [
    { path: 'a', component: PageAComponent }, 
    { path: 'b', component: PageBComponent },
    { path: 'c', component: PageCComponent }
    
];
