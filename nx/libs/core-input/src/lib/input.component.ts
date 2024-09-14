import { Component, Input, inject } from '@angular/core';

import { CoreIdService } from '@scope/core-id';
import { CoreLabelComponent } from '@scope/core-label';

@Component({
  selector: 'scope-core-input',
  standalone: true,
  imports: [
    CoreLabelComponent,
  ],
  templateUrl: './input.component.html',
  styleUrls: [
    './input.component.css'
  ]
})
export class CoreInputComponent {

  @Input()
  public label: string = '';

  private readonly idService = inject(CoreIdService);
  public readonly inputLabelId = this.idService.generateId();
}
