import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  transform(errorResponse: HttpErrorResponse) {
    const errors = [];
    switch (true) {
      case errorResponse.status === 500:
        errors.push('Something went wrong');
        break;
      case [400, 401].indexOf(errorResponse.status) > -1:
        for (const error in errorResponse.error) {
          if (errorResponse.error.hasOwnProperty(error)) {
            errors.push(`${error} : ${errorResponse.error[error]}`);
          }
        }
        break;
    }

    return throwError(errors);
  }
}
