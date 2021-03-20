import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {

  constructor() { }

  public decode(encodedJwt: string): MyToken {
    return jwt_decode<MyToken>(encodedJwt);
  }
}

interface MyToken {
  permissions: string[];
}
