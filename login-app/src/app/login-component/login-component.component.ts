import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html'
})
export class LoginComponent {

  username = 'root';
  password = '';
  error = null;

  constructor(private http: HttpClient) {}

  login() {
    this.error = null;
    this.http.post('/login', {username: this.username, password: this.password})
      .subscribe(
        () => console.log('Login successful'),
        error => this.error = error.error
      );
  }
}


