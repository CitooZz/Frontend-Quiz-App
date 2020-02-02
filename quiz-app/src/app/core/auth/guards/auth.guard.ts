import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthHandler implements CanActivate {
  canActivate(): any {}
}

@Injectable()
export class UnAuthHandler implements CanActivate {
  canActivate(): any {}
}
