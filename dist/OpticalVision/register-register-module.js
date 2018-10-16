(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/custom-validators/custom-validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom-validators/custom-validator.ts ***!
  \*******************************************************/
/*! exports provided: passValidator, UsernameValidator, pincodeValidator, account_validation_messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passValidator", function() { return passValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pincodeValidator", function() { return pincodeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "account_validation_messages", function() { return account_validation_messages; });
function passValidator(control) {
    if (control && (control.value !== null || control.value !== undefined)) {
        var cnfpassValue = control.value;
        var passControl = control.root.get('password');
        if (passControl) {
            var passValue = passControl.value;
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    passValidator: true
                };
            }
        }
    }
    return null;
}
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.validUsername = function (fc) {
        if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
            return ({ validUsername: true });
        }
        else {
            return (null);
        }
    };
    return UsernameValidator;
}());

function pincodeValidator(control) {
    if (control && (control.value !== null || control.value !== undefined)) {
        var regrex = new RegExp('^[0-9]{6}$');
        if (!regrex.test(control.value)) {
            return {
                isError: true
            };
        }
    }
    return null;
}
//   export class PasswordValidator {
//     // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
//     static areEqual(formGroup: FormGroup) {
//       let value;
//       let valid = true;
//       for (let key in formGroup.controls) {
//         if (formGroup.controls.hasOwnProperty(key)) {
//           let control: FormControl = <FormControl>formGroup.controls[key];
//           if (value === undefined) {
//             value = control.value
//           } else {
//             if (value !== control.value) {
//               valid = false;
//               break;
//             }
//           }
//         }
//       }
//       if (valid) {
//         return null;
//       }
//       return {
//         areEqual: true
//       };
//     }
//}
var account_validation_messages = {
    'companyname': [
        { type: 'required', message: 'CompanyName is required' }
    ],
    'username': [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', message: 'Username must be at least 5 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Your username must contain only numbers and letters' },
        { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
        { type: 'required', message: 'Confirm password is required' },
        { type: 'passValidator', message: 'Password mismatch' }
    ],
    'password': [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Password must be at least 3 characters long' },
        { type: 'pattern', message: 'Your password must contain Character Only' }
    ],
    'address': [
        { type: 'required', message: 'Address is required' },
    ],
    'phonenumber': [
        { type: 'required', message: 'phoneNumber is required' },
        { type: 'minlength', message: 'phoneNumber must be a 10 Digit long' },
        { type: 'pattern', message: 'Your phoneNumber must contain Numbers Only' },
    ],
    'terms': [
        { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
};


/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"background-color:#e0e0e0;\">\r\n\r\n    <mat-card fxFlex=\"50\" class=\"mat-elevation-z4 visionheight\">\r\n      <mat-card-title style=\"text-align:center\" class=\"opticvision\">\r\n  \r\n        <img src=\"assets/camera.png\" width=\"50px\">\r\n        <span>ptic Visions</span>\r\n  \r\n      </mat-card-title>\r\n      <mat-card-content class=\"opticvision_1\">\r\n        <div class=\"backgroundcolor\">\r\n          <h3 style=\"text-align:center; padding: 5px;\">Sign Up For Admin</h3>\r\n        </div>\r\n  \r\n        <form  [formGroup]=\"RegistrationForm\" class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n          #userForm=\"ngForm\">\r\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\r\n            <div fxFlex=\"50\" class=\"example-container\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input matInput type=\"text\" placeholder=\"CompanyName\" formControlName=\"companyName\" required>\r\n                    <mat-error *ngFor=\"let validation of account_validation_messages.companyname\">\r\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('companyName').hasError(validation.type) && (RegistrationForm.get('companyName').dirty || RegistrationForm.get('companyName').touched)\">{{validation.message}}</mat-error>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n              \r\n             \r\n            \r\n             \r\n            </div>\r\n            <div fxFlex=\"50\" class=\"example-container\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"Tin Number\" formControlName=\"tinNumber\" id=\"tinNumber\">\r\n  \r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\r\n            <div fxFlex=\"50\" class=\"example-container\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input matInput type=\"text\" placeholder=\"UserName\" formControlName=\"userName\" required>\r\n                    <mat-error *ngFor=\"let validation of account_validation_messages.username\">\r\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('userName').hasError(validation.type) && (RegistrationForm.get('userName').dirty || RegistrationForm.get('userName').touched)\">{{validation.message}}</mat-error>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n              <!-- <mat-form-field class=\"example-container\" fxFlex=\"100\">\r\n                <input matInput placeholder=\"UserName\" formControlName=\"userName\" id=\"userName\"\r\n                  required>\r\n  \r\n              </mat-form-field>\r\n              <span *ngIf=\"isValid('userName')\">userName is required</span> -->\r\n            </div>\r\n            <div fxFlex=\"50\" class=\"example-container\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\r\n                    <mat-error *ngFor=\"let validation of account_validation_messages.email\">\r\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('email').hasError(validation.type) && (RegistrationForm.get('email').dirty || RegistrationForm.get('email').touched)\">{{validation.message}}</mat-error>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                <!-- <mat-form-field>\r\n                  <input matInput placeholder=\"Email\" formControlName=\"email\"  id=\"email\"\r\n                    required>\r\n    \r\n                </mat-form-field>\r\n                <span *ngIf=\"isValid('email')\">Entered email is invalid</span> -->\r\n              </div>\r\n          \r\n          </div>\r\n         \r\n  \r\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\r\n              <div fxFlex=\"50\" class=\"example-container\">\r\n                  <mat-form-field class=\"full-width\">\r\n                      <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\r\n                      <mat-icon matSuffix class=\"cursor\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                      <mat-error *ngFor=\"let validation of account_validation_messages.password\">\r\n                        <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('password').hasError(validation.type) && (RegistrationForm.get('password').dirty || RegistrationForm.get('password').touched)\">{{validation.message}}</mat-error>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  <!-- <mat-form-field>\r\n                    <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" id=\"pass\">\r\n                     <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>  \r\n                  </mat-form-field>\r\n                  <span *ngIf=\"isValid('password')\">Password is a mandatory field</span> -->\r\n                </div>\r\n            <div fxFlex=\"50\" class=\"example-container\">\r\n                <mat-form-field class=\"full-width\">\r\n                    <input matInput placeholder=\"Confirm Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"cnfPassword\"  [errorStateMatcher]=\"parentErrorStateMatcher\" required>\r\n                    <mat-icon matSuffix class=\"cursor\" (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                    <mat-error *ngFor=\"let validation of account_validation_messages.confirm_password\">\r\n                      <mat-error class=\"error-message\" *ngIf=\"(RegistrationForm.get('cnfPassword').hasError(validation.type)|| RegistrationForm.get('password').hasError(validation.type)) && (RegistrationForm.get('cnfPassword').dirty || RegistrationForm.get('cnfPassword').touched)\">{{validation.message}}</mat-error>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                <!-- <mat-form-field class=\"example-container\" fxFlex=\"100\">\r\n                  <input matInput placeholder=\"Re-enter Password\" type=\"password\"  formControlName=\"cnfPassword\"  id=\"cnfPass\">\r\n    \r\n                </mat-form-field>\r\n                <span *ngIf=\"isValid('cnfPassword')\">Password and confirm password should match</span> -->\r\n              </div>\r\n           \r\n          </div>\r\n  \r\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\r\n            <div fxFlex=\"50\" class=\"example-container\">\r\n                <mat-form-field class=\"full-width\" hintLabel=\"Max 256 characters\">\r\n                    <input matInput type=\"text\" #input maxlength=\"256\" placeholder=\"Address\" formControlName=\"address\" required>\r\n                    <mat-hint align=\"end\">{{input.value?.length || 0}}/256</mat-hint>\r\n                    <mat-error *ngFor=\"let validation of account_validation_messages.address\">\r\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('address').hasError(validation.type) && (RegistrationForm.get('address').dirty || RegistrationForm.get('address').touched)\">{{validation.message}}</mat-error>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n              <!-- <mat-form-field class=\"example-container\" fxFlex=\"100\">\r\n                \r\n                <input matInput placeholder=\"Address\" formControlName=\"address\"  id=\"address\"\r\n                  required>\r\n  \r\n              </mat-form-field>\r\n              <span *ngIf=\"isValid('address')\">address is required</span> -->\r\n            </div>\r\n            <div fxFlex=\"50\" class=\"example-container\">\r\n                <mat-form-field class=\"full-width\" hintLabel=\"Max 10 numbers\">\r\n                    <span matPrefix>+91 &nbsp;</span>\r\n                    <input matInput type=\"text\" #input1 maxlength=\"10\" placeholder=\"PhoneNumber\" formControlName=\"phoneNumber\" required>\r\n                    <!-- <mat-icon matSuffix>mode_edit</mat-icon> -->\r\n                    <mat-hint align=\"end\">{{input1.value?.length || 0}}/10</mat-hint>\r\n                    <mat-error *ngFor=\"let validation of account_validation_messages.phonenumber\">\r\n                      <mat-error class=\"error-message\" *ngIf=\"RegistrationForm.get('phoneNumber').hasError(validation.type) && (RegistrationForm.get('phoneNumber').dirty || RegistrationForm.get('phoneNumber').touched)\">{{validation.message}}</mat-error>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n              <!-- <mat-form-field class=\"example-container\" fxFlex=\"100\">\r\n                <input matInput placeholder=\"Phone Number\" type=\"number\" formControlName=\"phoneNumber\" id=\"phoneNumber\"\r\n                  required>\r\n  \r\n              </mat-form-field>\r\n              <span *ngIf=\"isValid('phoneNumber')\">phoneNumber is required</span> -->\r\n            </div>\r\n          </div>\r\n         <div fxLayout=\"row\">\r\n           <div fxFlex=\"100\">\r\n             \r\n                  <input type=\"file\"  (change)=\"onFileChange($event)\" style=\"display:none\" name=\"file-7[]\" id=\"file-7\" class=\"inputfile inputfile-6\" data-multiple-caption=\"{count} files selected\" multiple />\r\n                  <label class=\"box\" for=\"file-7\"><span [ngStyle]=\"styleOne?{'color': 'black'} : {'color': 'white'}\"></span> <strong><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"/></svg> Upload a Image&hellip;</strong></label>\r\n              \r\n              <!-- <label for=\"file-upload\" class=\"custom-file-upload\">\r\n                  Custom Upload\r\n              </label> -->\r\n              <!-- <div class=\"file-field\">\r\n                  <div class=\"btn btn-primary btn-sm float-left\">\r\n                      <span>Choose file</span>\r\n                      <input type=\"file\">\r\n                  </div>\r\n                  <div class=\"file-path-wrapper\">\r\n                      <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload your file\">\r\n                  </div>\r\n              </div> -->\r\n              <!-- <input id=\"file-upload\"style=\"width:200px\" size=\"60\" value=\"upload\" type=\"file\"/> -->\r\n              <!-- <input id=\"photo\" type=\"file\" /> -->\r\n            </div>\r\n            </div>\r\n         \r\n  \r\n  \r\n  \r\n  \r\n          <button mat-raised-button color=\"primary\" type=\"reset\" class=\"login register_margin\" [disabled]=\"userForm.invalid\" (click)=\"signUp()\">REGISTER</button>\r\n       \r\n        </form>\r\n  \r\n      </mat-card-content>\r\n      <div style=\"text-align: center;\">\r\n        <button mat-raised-button color=\"primary\" class=\"login register_margin\" (click)=\"movetologin()\">Back to LoginPage</button>                \r\n      </div>\r\n  \r\n    </mat-card>\r\n   \r\n    \r\n  </div>\r\n  <!-- <div fxLayout=\"column\" fxFlexFill fxLayoutAlign=\"center center\" style=\"background-color:whitesmoke\">\r\n    \r\n    <mat-card>\r\n      <div>\r\n        <mat-card-title>\r\n            <div class=\"opticvision\">\r\n              <img src=\"assets/camera.png\" width=\"30px\"> \r\n              <span>ptic Visions</span>\r\n            </div>\r\n          </mat-card-title>\r\n          <mat-card-content>\r\n              <form class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\r\n                  <mat-form-field class=\"form_bottom\">\r\n                      <input matInput placeholder=\"Email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\r\n                    \r\n                      </mat-form-field>\r\n                    <span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\r\n                    <div *ngIf=\"email.errors.required\">Email is Required</div>\r\n              \r\n                    </span>\r\n                  <mat-form-field class=\"form_bottom\">\r\n                    <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\r\n                      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \r\n                    </mat-form-field>\r\n                    <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\r\n                      <div *ngIf=\"password1.errors.required\">Password is Required</div>\r\n                \r\n                      </span>\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" [disabled]=\"userForm.invalid\">Log In</button>\r\n              </form>\r\n              <div style=\"text-align:right\">\r\n                  <h3><a  class=\"redirect\" [routerLink]=\"['/register']\">Signup For Admin</a></h3>\r\n              </div>\r\n              \r\n            </mat-card-content>\r\n          </div>\r\n    </mat-card>\r\n    \r\n  </div>\r\n       -->\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  <!-- <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center\" style=\"background-color:#677069;\">\r\n  \r\n          <div class=\" mat-elevation-z4\" >\r\n              <mat-card class=\"card\">\r\n                  <mat-card-title>\r\n                    <h2>SIGN IN</h2>\r\n                  </mat-card-title>\r\n                  <mat-card-content>\r\n                      <form fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\r\n                          <mat-form-field>\r\n                              <input matInput placeholder=\"Enter your email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\r\n                            \r\n                              </mat-form-field>\r\n                            <span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\r\n                            <div *ngIf=\"email.errors.required\">Email is Required</div>\r\n                      \r\n                            </span>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Enter your password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\r\n                             <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                            </mat-form-field>\r\n                            <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\r\n                              <div *ngIf=\"password1.errors.required\">Password is Required</div>\r\n                        \r\n                              </span>\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"userForm.invalid\">log in</button>\r\n                      </form>\r\n                    </mat-card-content>\r\n                    <a class=\"redirect\" [routerLink]=\"['/register']\">Register an account</a>\r\n                  </mat-card>\r\n            \r\n  \r\n    </div>\r\n  \r\n  </div> -->\r\n\r\n\r\n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"background-color:#e0e0e0;\">\r\n\r\n  <mat-card fxFlex=\"50\" class=\"mat-elevation-z4 visionheight\">\r\n    <mat-card-title style=\"text-align:center\" class=\"opticvision\">\r\n\r\n      <img src=\"assets/camera.png\" width=\"50px\">\r\n      <span>ptic Visions</span>\r\n\r\n    </mat-card-title>\r\n    <mat-card-content class=\"opticvision_1\">\r\n      <div class=\"backgroundcolor\">\r\n        <h3 style=\"text-align:center; padding: 5px;\">Sign Up For Admin</h3>\r\n      </div>\r\n\r\n      <form  [formGroup]=\"Registeration\" class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\"\r\n        #userForm=\"ngForm\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\r\n          <div fxFlex=\"50\" class=\"example-container\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"CompanyName\" #companyname=\"ngModel\" [ngModel]=\"companyName\" name=\"companyname\"\r\n                required>\r\n\r\n            </mat-form-field>\r\n            <span style=\"color:red\" *ngIf=\"companyname.touched && !companyname.valid\">\r\n                <div *ngIf=\"companyname.errors.required\">CompanyName is Required</div>\r\n  \r\n              </span>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"example-container\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Tin Number\" #tinnumber=\"ngModel\" [ngModel]=\"tinNumber\" name=\"tinnumber\"\r\n                required>\r\n\r\n            </mat-form-field>\r\n            <span style=\"color:red\" *ngIf=\"tinnumber.touched && !tinnumber.valid\">\r\n                <div *ngIf=\"tinnumber.errors.required\">Tin.No is Required</div>\r\n  \r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\r\n          <div fxFlex=\"50\" class=\"example-container\">\r\n            <mat-form-field class=\"example-container\" fxFlex=\"100\">\r\n              <input matInput placeholder=\"UserName\" #userName=\"ngModel\" [ngModel]=\"username\" name=\"username\"\r\n                required>\r\n\r\n            </mat-form-field>\r\n            <span style=\"color:red\" *ngIf=\"userName.touched && !userName.valid\">\r\n              <div *ngIf=\"userName.errors.required\">FirstName is Required</div>\r\n\r\n            </span>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"example-container\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Email\" #email=\"ngModel\" [ngModel]=\"emailname\" name=\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\r\n                  required>\r\n  \r\n              </mat-form-field>\r\n              <span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\r\n                <div *ngIf=\"email.errors.required\">Email is Required</div>\r\n                <div *ngIf=\"email.errors.pattern\">Not a Valid Email</div>\r\n              </span>\r\n            </div>\r\n        \r\n        </div>\r\n       \r\n\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\r\n            <div fxFlex=\"50\" class=\"example-container\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\"\r\n                    required>\r\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>  \r\n                </mat-form-field>\r\n                <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\r\n                  <div *ngIf=\"password1.errors.required\">Password is Required</div>\r\n    \r\n                </span>\r\n              </div>\r\n          <div fxFlex=\"50\" class=\"example-container\">\r\n              <mat-form-field class=\"example-container\" fxFlex=\"100\">\r\n                <input matInput placeholder=\"ConfirmPassword\" #cnfPassword=\"ngModel\" [ngModel]=\"cnfpassword\" name=\"cnfpassword\" required>\r\n  \r\n              </mat-form-field>\r\n              <span style=\"color:red\" *ngIf=\"cnfPassword.touched && !cnfPassword.valid\">\r\n                <div *ngIf=\"cnfPassword.errors.required\">LastName is Required</div>\r\n              </span>\r\n            </div>\r\n         \r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.gt-md=\"20px\">\r\n          <div fxFlex=\"50\" class=\"example-container\">\r\n            <mat-form-field class=\"example-container\" fxFlex=\"100\">\r\n              \r\n              <input matInput placeholder=\"Address\" #address=\"ngModel\" [ngModel]=\"Address\" name=\"address\"\r\n                required>\r\n\r\n            </mat-form-field>\r\n            <span style=\"color:red\" *ngIf=\"address.touched && !address.valid\">\r\n                <div *ngIf=\"address.errors.required\">Address is Required</div>\r\n  \r\n              </span>\r\n          </div>\r\n          <div fxFlex=\"50\" class=\"example-container\">\r\n            <mat-form-field class=\"example-container\" fxFlex=\"100\">\r\n              <input matInput placeholder=\"Phone Number\" #phonenumber=\"ngModel\" [ngModel]=\"Phonenumber\" name=\"phonenumber\"\r\n                required>\r\n\r\n            </mat-form-field>\r\n            <span style=\"color:red\" *ngIf=\"phonenumber.touched && !phonenumber.valid\">\r\n                <div *ngIf=\"phonenumber.errors.required\">Phone Number is Required</div>\r\n  \r\n              </span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" [disabled]=\"userForm.invalid\" (click)=\"signUp()\">REGISTER</button>\r\n\r\n      </form>\r\n\r\n    </mat-card-content>\r\n\r\n\r\n  </mat-card>\r\n</div>\r\n <div fxLayout=\"column\" fxFlexFill fxLayoutAlign=\"center center\" style=\"background-color:whitesmoke\">\r\n\t\r\n\t<mat-card>\r\n\t\t<div>\r\n\t\t\t<mat-card-title>\r\n\t\t\t\t\t<div class=\"opticvision\">\r\n\t\t\t\t\t\t<img src=\"assets/camera.png\" width=\"30px\"> \r\n\t\t\t\t\t\t<span>ptic Visions</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card-title>\r\n\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t<form class=\"example-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"form_bottom\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t  </mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\">Email is Required</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"form_bottom\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\r\n\t\t\t\t\t\t\t\t\t  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon> \r\n\t\t\t\t\t\t\t\t  </mat-form-field>\r\n\t\t\t\t\t\t\t\t  <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password1.errors.required\">Password is Required</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" class=\"login\" [disabled]=\"userForm.invalid\">Log In</button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<div style=\"text-align:right\">\r\n\t\t\t\t\t\t\t\t<h3><a  class=\"redirect\" [routerLink]=\"['/register']\">Signup For Admin</a></h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t</div>\r\n\t</mat-card>\r\n\t\r\n</div>\r\n\t\t -->\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"center\" style=\"background-color:#677069;\">\r\n\r\n\t\t\t\t<div class=\" mat-elevation-z4\" >\r\n\t\t\t\t\t\t<mat-card class=\"card\">\r\n\t\t\t\t\t\t\t\t<mat-card-title>\r\n\t\t\t\t\t\t\t\t\t<h2>SIGN IN</h2>\r\n\t\t\t\t\t\t\t\t</mat-card-title>\r\n\t\t\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t\t\t\t<form fxLayout=\"column\" fxLayoutAlign=\"start stretch\" (submit)=\"loginUser($event)\" #userForm=\"ngForm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter your email\" #email=\"ngModel\"  [ngModel]=\"emailname\"  name =\"email\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngIf=\"email.touched && !email.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"email.errors.required\">Email is Required</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter your password\" type=\"password\" name=\"password\" #password1=\"ngModel\" [ngModel]=\"passwordname\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <span style=\"color:red\" *ngIf=\"password1.touched && !password1.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"password1.errors.required\">Password is Required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"userForm.invalid\">log in</button>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t\t\t\t\t<a class=\"redirect\" [routerLink]=\"['/register']\">Register an account</a>\r\n\t\t\t\t\t\t\t\t</mat-card>\r\n\t        \r\n\r\n\t</div>\r\n\r\n</div> --> "

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n  font-family: -webkit-body; }\n\n.forget {\n  color: dodgerblue;\n  text-align: right; }\n\n.opticvision {\n  font-size: 50px;\n  font-family: -webkit-body; }\n\n.opticvision span {\n  color: dodgerblue; }\n\ndiv > span {\n  font-size: 0.75rem;\n  color: firebrick; }\n\n.is-invalid {\n  font-size: 0.75rem;\n  color: firebrick; }\n\n.form_bottom {\n  margin: 20px 0px; }\n\n.visionheight {\n  background-color: #ffffff; }\n\n.cursor {\n  cursor: pointer; }\n\n@media only screen and (min-width: 1281px) {\n  .opticvision_1 {\n    font-size: 18px;\n    font-family: -webkit-body; } }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-validators/custom-validator */ "./src/app/custom-validators/custom-validator.ts");
/* harmony import */ var _services_signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/signup.service */ "./src/app/services/signup.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    //RegistrationForm: FormBuilder;
    function RegisterComponent(router, elem, fb, signupservice, snackbar, cd) {
        this.router = router;
        this.elem = elem;
        this.fb = fb;
        this.signupservice = signupservice;
        this.snackbar = snackbar;
        this.cd = cd;
        this.email = "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";
        this.hide = true;
        this.account_validation_messages = _custom_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__["account_validation_messages"];
        this.selectedfile = null;
        this.RegistrationForm = this.fb.group({
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tinNumber: [''],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z_ ]*$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
                ])
            ],
            cnfPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _custom_validators_custom_validator__WEBPACK_IMPORTED_MODULE_3__["passValidator"]
                ])],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$') //this is for the letters (both uppercase and lowercase) and numbers validation
                ])],
        });
        // this.Registeration = new FormGroup({
        //   companyName: new FormControl(null, Validators.required),
        //   tinNumber: new FormControl(null, Validators.required),
        //   userName: new FormControl(null, Validators.required),
        //   email: new FormControl(null, Validators.email),
        //   password: new FormControl(null, Validators.required),
        //   cnfPassword: new FormControl(null, this.passValidator),
        //   address: new FormControl(null, Validators.required),
        //   phoneNumber: new FormControl(null, Validators.required)
        // });
        // this.Registeration.controls.password.valueChanges
        //   .subscribe(
        //     x => this.Registeration.controls.cnfPassword.updateValueAndValidity()
        //   );
    }
    RegisterComponent.prototype.ngOnInit = function () {
        ;
        (function (document, window, index) {
            var inputs = document.querySelectorAll('.inputfile');
            Array.prototype.forEach.call(inputs, function (input) {
                var label = input.nextElementSibling, labelVal = label.innerHTML;
                input.addEventListener('change', function (e) {
                    var fileName = '';
                    if (this.files && this.files.length > 1)
                        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                    else
                        fileName = e.target.value.split('\\').pop();
                    if (fileName)
                        label.querySelector('span').innerHTML = fileName;
                    else
                        label.innerHTML = labelVal;
                });
                // Firefox bug fix
                input.addEventListener('focus', function () { input.classList.add('has-focus'); });
                input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
            });
        }(document, window, 0));
    };
    RegisterComponent.prototype.onFileChange = function (event) {
        // let count=<File>event.target.files
        this.styleOne = true;
        this.countfilelength = event.target.files.length;
        this.selectedfile = event.target.files[0];
        // console.log(this.selectedFile)
        // let inputEl: HTMLInputElement = this.elem.nativeElement.querySelector('#file-7');
        // console.log(inputEl.files.item(0));
        // this.RegistrationForm.getValue('photo').value
        // const reader = new FileReader();
        // if(event.target.files && event.target.files.length) {
        //   const [file] = event.target.files;
        //   reader.readAsDataURL(file);
        //   reader.onload = () => {
        //     this.RegistrationForm.patchValue({
        //       file: reader.result
        //    });
        //     // need to run CD since file load runs outside of zone
        //     this.cd.markForCheck();
        //   };
        // }
    };
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        var formData = new FormData();
        if (this.countfilelength >= 0) {
            formData.append('userImage', this.selectedfile);
            formData.append('companyName', this.RegistrationForm.value.companyName);
            formData.append('tinNumber', this.RegistrationForm.value.tinNumber);
            formData.append('userName', this.RegistrationForm.value.userName);
            formData.append('email', this.RegistrationForm.value.email);
            formData.append('password', this.RegistrationForm.value.password);
            formData.append('cnfPassword', this.RegistrationForm.value.cnfPassword);
            formData.append('address', this.RegistrationForm.value.address);
            formData.append('phoneNumber', this.RegistrationForm.value.phoneNumber);
        }
        // let files=this.elem.nativeElement.querySelector('#selectedFile').files;
        // let fb=new FormData();
        // let file= files[0];
        // fb.append('selectedFile',file,file.name);
        // console.log(fb);
        //   console.log(this.RegistrationForm.value);
        if (this.RegistrationForm.valid) {
            this.signupservice.submitRegister(formData)
                .subscribe(function (response) {
                _this.styleOne = false;
                _this.selectedfile = null;
                _this.snackbar.open("Registration Success", "Success", {
                    duration: 2000,
                });
            }, function (err) {
                console.log(err);
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                    if (err.status === 401) {
                        _this.snackbar.open(err.error, 'Alert', {
                            duration: 3000
                        });
                    }
                    else {
                        _this.snackbar.open(err.statusText, 'Alert', {
                            duration: 3000
                        });
                    }
                }
            });
        }
    };
    RegisterComponent.prototype.movetologin = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes),
            ],
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/services/signup.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signup.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupService = /** @class */ (function () {
    function SignupService(httpClient) {
        this.httpClient = httpClient;
    }
    SignupService.prototype.getAll = function () {
        return this.httpClient.get("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getSignupURL());
    };
    SignupService.prototype.submitRegister = function (body) {
        return this.httpClient.post("" + _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getSignupURL(), body);
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map