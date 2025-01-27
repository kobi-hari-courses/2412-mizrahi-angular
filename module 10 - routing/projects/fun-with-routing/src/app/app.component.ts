import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from "./pages/page-b/page-b.component";
import { PageCComponent } from "./pages/page-c/page-c.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fun-with-routing';
}
