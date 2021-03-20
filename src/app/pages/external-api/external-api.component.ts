import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../../environments/environment';
import {AuthService} from '@auth0/auth0-angular';
import {JwtService} from '../../services/jwt.service';

interface Message {
  description: string;
}

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
})
export class ExternalApiComponent implements OnInit {
  description: string = null;

  constructor(
    private http: HttpClient,
    public auth: AuthService,
    private decoder: JwtService
    ) {}

  ngOnInit(): void {
    this.auth.getAccessTokenSilently().subscribe((token) => {
      console.log(token);
      console.log(this.decoder.decode(token));
    });
  }

  callSecureApi(): void {
    this.http
      .get(`${env.dev.serverUrl}/private-scoped`)
      .subscribe((result: Message) => {
        this.description = result.description;
      });
  }
}
