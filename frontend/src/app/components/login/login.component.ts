import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }


  onSubmit() {

    const option = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    return this.http.post('http://127.0.0.1:8000/api/login', this.form, option).subscribe(
      paylaod => console.log(paylaod),

      error => this.handleError(error)

    );
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
