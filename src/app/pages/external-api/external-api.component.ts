import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../../environments/environment';

interface Message {
  description: string;
}

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
})
export class ExternalApiComponent implements OnInit {
  description: string = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  callSecureApi(): void {
    this.http
      .get(`${env.dev.serverUrl}/order-composite/10`)
      .subscribe((result: Message) => {
        this.description = result.description;
      });
  }
}
