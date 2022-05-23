import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticate: Subject<boolean> = new Subject<boolean>();

  // constructor() { }
}
