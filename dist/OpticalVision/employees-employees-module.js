(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-employees-module"],{

/***/ "./src/app/employees/add-employees/add-employees.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/employees/add-employees/add-employees.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n    <div fxFlex class=\"form-component-holder mat-elevation-z4\">\n      <mat-toolbar class=\"form-header\">\n        <h1 class=\"mat-headline center-align\"> Add Employee</h1>\n      </mat-toolbar>\n      <div [hidden]=\"submitted\" style=\"background-color: white;\">\n  \n        <form (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" class=\"example-container\" >\n          <mat-form-field class=\"example-container\">\n            <input matInput type=\"text\" [(ngModel)]=\"employee.employeeName\" name=\"name\" #name=\"ngModel\" required minlength=\"4\">\n          </mat-form-field>\n  \n          <div  style=\"color:red\" *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n  \n            <div *ngIf=\"name.errors.required\">\n              Name is required.\n            </div>\n            <div *ngIf=\"name.errors.minlength\">\n              Name must be at least 4 characters long.\n            </div>\n          </div>\n          <mat-form-field class=\"example-container\">\n              <input matInput type=\"text\" [(ngModel)]=\"employee.mobileNumber\" name=\"name\" #name=\"ngModel\" required minlength=\"4\">\n            </mat-form-field>\n    \n            <div  style=\"color:red\" *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n    \n              <div *ngIf=\"name.errors.required\">\n                Name is required.\n              </div>\n              <div *ngIf=\"name.errors.minlength\">\n                Name must be at least 4 characters long.\n              </div>\n            </div>\n            <mat-form-field class=\"example-container\">\n                <input matInput type=\"text\" [(ngModel)]=\"employee.employeeEmail\" name=\"name\" #name=\"ngModel\" required minlength=\"4\">\n              </mat-form-field>\n      \n              <div  style=\"color:red\" *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"mat-body-1 center-align\">\n      \n                <div *ngIf=\"name.errors.required\">\n                  Name is required.\n                </div>\n                <div *ngIf=\"name.errors.minlength\">\n                  Name must be at least 4 characters long.\n                </div>\n              </div>\n          <mat-form-field>\n            <input matInput type=\"number\"  [(ngModel)]=\"employee.employeePassword\"  name=\"number\" #number=\"ngModel\" required minlength=\"10\">\n          </mat-form-field>\n          <div  style=\"color:red\" *ngIf=\"number.invalid && (number.dirty || number.touched)\"\n          >\n            <div *ngIf=\"number.errors.required\">\n              number is required.\n            </div>\n            <div *ngIf=\"number.errors.minlength\">\n              number must be at least 10 characters long.\n            </div>\n          </div>\n          <mat-form-field>\n              <input matInput type=\"number\"  [(ngModel)]=\"employee.employeePassword\"  name=\"number\" #number=\"ngModel\" required minlength=\"10\">\n            </mat-form-field>\n            <div  style=\"color:red\" *ngIf=\"number.invalid && (number.dirty || number.touched)\"\n            >\n              <div *ngIf=\"number.errors.required\">\n                number is required.\n              </div>\n              <div *ngIf=\"number.errors.minlength\">\n                number must be at least 10 characters long.\n              </div>\n            </div>\n            <mat-form-field>\n                <input matInput type=\"number\"  [(ngModel)]=\"employee.employeePassword\"  name=\"number\" #number=\"ngModel\" required minlength=\"10\">\n              </mat-form-field>\n              <div  style=\"color:red\" *ngIf=\"number.invalid && (number.dirty || number.touched)\"\n              >\n                <div *ngIf=\"number.errors.required\">\n                  number is required.\n                </div>\n                <div *ngIf=\"number.errors.minlength\">\n                  number must be at least 10 characters long.\n                </div>\n              </div>\n            <mat-form-field>\n               <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" >\n               <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n             </mat-form-field>\n\n             <mat-form-field>\n                <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"employee.DOB\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                <mat-datepicker #picker3></mat-datepicker>\n              </mat-form-field>\n              <!-- <mat-form-field>\n                  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"employee.DOJ\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker3></mat-datepicker>\n                </mat-form-field> -->\n                <mat-radio-group>\n                    <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n                    <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n                  </mat-radio-group>\n          <button mat-raised-button type=\"submit\" class=\"mat-subheading-2 center-align button-style\">Submit</button>\n        </form>\n        \n      </div>\n  \n      <!-- <div [hidden]=\"!submitted\" style=\"background-color: white;\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" >\n          <h2 class=\"mat-subheading-2 center-align\">You submitted the following:</h2>\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n            <div >Name</div>\n            <div>{{ model.name }}</div>\n          </div>\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n            <div>Number</div>\n            <div>{{ model.number }}</div>\n          </div>\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"mat-body center-align\">\n            <div >Password</div>\n            <div>{{ model.pwd}}</div>\n          </div>\n          <br>\n          <button mat-raised-button  type=\"submit\" class=\"button-style\" (click)=\"submitted=false\">Edit</button>\n        </div>\n      </div> -->\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <h1>tfghuj</h1>\n  </div>"

/***/ }),

/***/ "./src/app/employees/add-employees/add-employees.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/employees/add-employees/add-employees.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.mat-form-field {\n  padding-left: 10px; }\n\n.container {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.form-container {\n  padding: 5px 15px 15px 15px; }\n\n.form-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.button-style {\n  background-color: #327ebd;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/employees/add-employees/add-employees.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/add-employees/add-employees.component.ts ***!
  \********************************************************************/
/*! exports provided: AddEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeesComponent", function() { return AddEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/employee */ "./src/app/models/employee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddEmployeesComponent = /** @class */ (function () {
    function AddEmployeesComponent() {
        this.employee = new src_app_models_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]('', '', '', '', '', '', this.dob, this.doj, '', this.companysignup);
    }
    AddEmployeesComponent.prototype.ngOnInit = function () {
    };
    AddEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-employees',
            template: __webpack_require__(/*! ./add-employees.component.html */ "./src/app/employees/add-employees/add-employees.component.html"),
            styles: [__webpack_require__(/*! ./add-employees.component.scss */ "./src/app/employees/add-employees/add-employees.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddEmployeesComponent);
    return AddEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.module.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.module.ts ***!
  \***********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employees_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees.router */ "./src/app/employees/employees.router.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-employees/add-employees.component */ "./src/app/employees/add-employees/add-employees.component.ts");
/* harmony import */ var _list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-employees/list-employees.component */ "./src/app/employees/list-employees/list-employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _employees_router__WEBPACK_IMPORTED_MODULE_2__["EmployeesRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"]
            ],
            declarations: [_add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_7__["AddEmployeesComponent"], _list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_8__["ListEmployeesComponent"]]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/employees/employees.router.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.router.ts ***!
  \***********************************************/
/*! exports provided: EmployeesRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesRouterModule", function() { return EmployeesRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-employees/add-employees.component */ "./src/app/employees/add-employees/add-employees.component.ts");
/* harmony import */ var _list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-employees/list-employees.component */ "./src/app/employees/list-employees/list-employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var employeeroutes = [
    { path: 'addemployees', component: _add_employees_add_employees_component__WEBPACK_IMPORTED_MODULE_2__["AddEmployeesComponent"] },
    { path: 'listemployees', component: _list_employees_list_employees_component__WEBPACK_IMPORTED_MODULE_3__["ListEmployeesComponent"] },
];
var EmployeesRouterModule = /** @class */ (function () {
    function EmployeesRouterModule() {
    }
    EmployeesRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(employeeroutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EmployeesRouterModule);
    return EmployeesRouterModule;
}());



/***/ }),

/***/ "./src/app/employees/list-employees/list-employees.component.html":
/*!************************************************************************!*\
  !*** ./src/app/employees/list-employees/list-employees.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list-employees works!\n</p>\n"

/***/ }),

/***/ "./src/app/employees/list-employees/list-employees.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/employees/list-employees/list-employees.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/list-employees/list-employees.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/employees/list-employees/list-employees.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeesComponent", function() { return ListEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListEmployeesComponent = /** @class */ (function () {
    function ListEmployeesComponent() {
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
    };
    ListEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-employees',
            template: __webpack_require__(/*! ./list-employees.component.html */ "./src/app/employees/list-employees/list-employees.component.html"),
            styles: [__webpack_require__(/*! ./list-employees.component.scss */ "./src/app/employees/list-employees/list-employees.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListEmployeesComponent);
    return ListEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/models/employee.ts":
/*!************************************!*\
  !*** ./src/app/models/employee.ts ***!
  \************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, mobileNumber, employeeEmail, employeePassword, address, DOB, DOJ, adminAccess, companySignUp) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.mobileNumber = mobileNumber;
        this.employeeEmail = employeeEmail;
        this.employeePassword = employeePassword;
        this.address = address;
        this.DOB = DOB;
        this.DOJ = DOJ;
        this.adminAccess = adminAccess;
        this.companySignUp = companySignUp;
    }
    return Employee;
}());



/***/ })

}]);
//# sourceMappingURL=employees-employees-module.js.map