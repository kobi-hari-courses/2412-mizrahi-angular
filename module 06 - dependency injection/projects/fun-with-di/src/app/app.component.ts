import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcComponent } from "./components/calc/calc.component";
import { GroupComponent } from "./components/group/group.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CalcComponent, GroupComponent]
})
export class AppComponent {}
