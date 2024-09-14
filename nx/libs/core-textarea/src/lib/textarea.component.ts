import { Component, Input, inject } from '@angular/core';

import { CoreIdService } from '@scope/core-id';
import { CoreLabelComponent } from '@scope/core-label';

@Component({
  selector: 'scope-core-textarea',
  standalone: true,
  imports: [
    CoreLabelComponent,
  ],
  templateUrl: './textarea.component.html',
  styleUrls: [
    './textarea.component.css'
  ]
})
export class CoreTextareaComponent {

  @Input()
  public label: string = '';

  private readonly idService = inject(CoreIdService);
  public readonly textareaLabelId = this.idService.generateId();
}
