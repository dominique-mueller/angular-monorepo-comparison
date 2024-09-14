import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreIdService {

  private internalIdCounter = 0;

  public generateId(): number {
    this.internalIdCounter++;
    return this.internalIdCounter;
  }
}
