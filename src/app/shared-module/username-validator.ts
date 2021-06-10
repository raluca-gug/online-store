import {AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, first, map, switchMap, take} from 'rxjs/operators';
import { AccountService } from '../core/services/account.service';

export class usernameValidator {
  static createValidator(accountService: AccountService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      console.log('control in validator', control)
      // return accountService.checkUsernameNotTaken(control.value).pipe(
      //   take(1),
      //   map((result: boolean) => !result ?  of ({invalidAsync: true}) : of (null) )
      // );

      return control.valueChanges.pipe(
        debounceTime(500),
        take(1),
        switchMap(_ =>
          accountService
          .checkUsernameNotTaken(control.value)
            .pipe(
              map((result: boolean) => !result ?  of ({invalidAsync: true}) : of (null)
              )
            )
        )
      )
    };
  }
}


// export class usernameValidator implements AsyncValidator {
//   constructor(private accountService: AccountService) {}

//   validate(
//     control: AbstractControl
//   ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//     return this.accountService.checkUsernameNotTaken(control.value).pipe(
//       map(isTaken => (isTaken ? {invalidAsync: true} : null)),
//       catchError(() => of(null))
//     );
//   }
// }