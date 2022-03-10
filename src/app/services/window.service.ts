import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  public isMobile: Subject<Boolean>;

  constructor() {
    this.isMobile = new Subject();
  }
}
