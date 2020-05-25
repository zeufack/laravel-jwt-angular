import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(private http: HttpClient) { }

  onSubmit() {
    const option = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    return this.http.post('http://127.0.0.1:8000/api/singup', this.form, option).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  ngOnInit() {
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
