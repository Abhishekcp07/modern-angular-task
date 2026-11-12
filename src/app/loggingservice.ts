import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Loggingservice {

  islogged= new BehaviorSubject<boolean>(false);
}
