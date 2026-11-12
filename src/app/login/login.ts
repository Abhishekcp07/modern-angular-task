import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Loggingservice } from '../loggingservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private loggingservice=inject(Loggingservice);
  private router=inject(Router);
  username='';
  password='';

  login(){
    if(this.username==='admin' && this.password==='admin123'){
      this.loggingservice.islogged.next(true);
      this.router.navigate(['/dashboard'])
    }
  }

}
