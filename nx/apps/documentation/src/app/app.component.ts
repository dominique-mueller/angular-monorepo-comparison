import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreInputComponent, CoreButtonComponent, CoreTextareaComponent } from '@scope/core';

@Component({
  selector: 'scope-app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoreInputComponent,
    CoreButtonComponent,
    CoreTextareaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
