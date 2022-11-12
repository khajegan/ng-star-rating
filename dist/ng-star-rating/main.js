"use strict";
(self["webpackChunkng_star_rating"] = self["webpackChunkng_star_rating"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_ratingElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/ratingElement */ 4308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-starrating */ 1434);





function AppComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 2)(2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_26_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const element_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r1.checkedcolor = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 4)(4, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_26_Template_input_ngModelChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const element_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r1.uncheckedcolor = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 5)(6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_26_Template_input_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const element_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r1.value = $event); })("valueChange", function AppComponent_tr_26_Template_input_valueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r2.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 7)(8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_26_Template_input_ngModelChange_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const element_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r1.size = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 9)(10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_26_Template_input_ngModelChange_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const element_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r1.readonly = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 11)(12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_26_Template_input_ngModelChange_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const element_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r1.totalstars = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 13)(14, "star-rating", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AppComponent_tr_26_Template_star_rating_valueChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const element_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r1.value = $event); })("totalstarsChange", function AppComponent_tr_26_Template_star_rating_totalstarsChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const element_r1 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r1.totalstars = $event); })("rate", function AppComponent_tr_26_Template_star_rating_rate_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onRate($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", element_r1.checkedcolor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r1.checkedcolor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", element_r1.uncheckedcolor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r1.uncheckedcolor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r1.value)("value", _r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", element_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", element_r1.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r1.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", element_r1.totalstars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r1.totalstars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("checkedcolor", element_r1.checkedcolor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("uncheckedcolor", element_r1.uncheckedcolor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("size", element_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("readonly", element_r1.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", element_r1.value)("totalstars", element_r1.totalstars);
} }
class AppComponent {
    constructor() {
        this.title = 'rg-rating';
        this.starRatingElements = [];
    }
    ngOnInit() {
        let ratingElement1 = new _app_ratingElement__WEBPACK_IMPORTED_MODULE_0__.ratingElement();
        //ratingElement1.readonly = true;
        ratingElement1.checkedcolor = "red";
        ratingElement1.uncheckedcolor = "green";
        ratingElement1.value = 1;
        ratingElement1.size = 50;
        ratingElement1.totalstars = 1;
        let ratingElement2 = new _app_ratingElement__WEBPACK_IMPORTED_MODULE_0__.ratingElement();
        //ratingElement2.readonly = true;
        ratingElement2.checkedcolor = "yellow";
        ratingElement2.uncheckedcolor = "red";
        ratingElement2.value = 2;
        ratingElement2.size = 50;
        ratingElement2.totalstars = 2;
        let ratingElement3 = new _app_ratingElement__WEBPACK_IMPORTED_MODULE_0__.ratingElement();
        //ratingElement3.readonly = true;
        ratingElement3.checkedcolor = "orange";
        ratingElement3.uncheckedcolor = "yellow";
        ratingElement3.value = 3.5;
        ratingElement3.size = 50;
        ratingElement3.totalstars = 4;
        let ratingElement4 = new _app_ratingElement__WEBPACK_IMPORTED_MODULE_0__.ratingElement();
        //ratingElement4.readonly = true;
        ratingElement4.checkedcolor = "black";
        ratingElement4.uncheckedcolor = "orange";
        ratingElement4.value = 4;
        ratingElement4.size = 50;
        ratingElement4.totalstars = 6;
        let ratingElement5 = new _app_ratingElement__WEBPACK_IMPORTED_MODULE_0__.ratingElement();
        //ratingElement5.readonly = true;
        ratingElement5.checkedcolor = "pink";
        ratingElement5.uncheckedcolor = "black";
        ratingElement5.value = 7.5;
        ratingElement5.size = 50;
        ratingElement5.totalstars = 10;
        this.starRatingElements.push(ratingElement1);
        this.starRatingElements.push(ratingElement2);
        this.starRatingElements.push(ratingElement3);
        this.starRatingElements.push(ratingElement4);
        this.starRatingElements.push(ratingElement5);
    }
    onRate($event) {
        alert(`Old Value:${$event.oldValue}, New Value: ${$event.newValue}, Checked Color: ${$event.starRating.checkedcolor}, Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 1, consts: [["span", "1"], [4, "ngFor", "ngForOf"], ["data-th", "Checked Color"], ["type", "text", 3, "ngModel", "value", "ngModelChange"], ["data-th", "UnChecked Color"], ["data-th", "Rating Value"], ["type", "number", 3, "ngModel", "value", "ngModelChange", "valueChange"], ["data-th", "Size"], ["type", "number", 3, "ngModel", "value", "ngModelChange"], ["data-th", "Read Only"], ["type", "checkbox", 3, "ngModel", "value", "ngModelChange"], ["data-th", "Total Stars"], ["type", "number", "min", "1", 3, "ngModel", "value", "ngModelChange"], ["data-th", "Star Rating"], [3, "value", "totalstars", "checkedcolor", "uncheckedcolor", "size", "readonly", "valueChange", "totalstarsChange", "rate"], ["starrating", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Checked Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "UnChecked Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Rating Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Read Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Total Stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Star Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "colgroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "col", 0)(19, "col", 0)(20, "col", 0)(21, "col", 0)(22, "col", 0)(23, "col", 0)(24, "col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AppComponent_tr_26_Template, 16, 18, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.starRatingElements);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_starrating__WEBPACK_IMPORTED_MODULE_4__.StarRatingComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-starrating */ 1434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        ng_starrating__WEBPACK_IMPORTED_MODULE_4__.RatingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        ng_starrating__WEBPACK_IMPORTED_MODULE_4__.RatingModule] }); })();


/***/ }),

/***/ 4308:
/*!**********************************!*\
  !*** ./src/app/ratingElement.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ratingElement": () => (/* binding */ ratingElement)
/* harmony export */ });
class ratingElement {
    constructor() {
        this.checkedcolor = "gold";
        this.uncheckedcolor = "gray";
        this.value = 3.5;
        this.size = 24;
        this.totalstars = 5;
    }
    get checkedcolor() {
        return this._checkedColor;
    }
    get uncheckedcolor() {
        return this._unCheckedColor;
    }
    get value() {
        return this._value;
    }
    get size() {
        return this._size;
    }
    get readonly() {
        return this._readOnly;
    }
    get totalstars() {
        return this._totalStars;
    }
    set checkedcolor(value) {
        this._checkedColor = value;
    }
    set uncheckedcolor(value) {
        this._unCheckedColor = value;
    }
    set value(value) {
        this._value = value;
    }
    set size(value) {
        if (!value || value == null) {
            value = 24;
        }
        this._size = value;
    }
    set totalstars(value) {
        if (!value || value == null) {
            value = 5;
        }
        this._totalStars = value;
    }
    set readonly(value) {
        this._readOnly = value;
    }
}


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);



(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
// if (environment.production) {
//   enableProdMode();
// }
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 1434:
/*!************************************************!*\
  !*** ./dist/rating/fesm2020/ng-starrating.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingModule": () => (/* binding */ RatingModule),
/* harmony export */   "StarRatingComponent": () => (/* binding */ StarRatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);





const _c0 = ["starMain"];
class RatingComponent {
  constructor() {}
  ngOnInit() {}
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) {
  return new (t || RatingComponent)();
};
RatingComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RatingComponent,
  selectors: [["lib-rating"]],
  decls: 2,
  vars: 0,
  template: function RatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " rating works! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'lib-rating',
      template: `
    <p>
      rating works!
    </p>
  `
    }]
  }], function () {
    return [];
  }, null);
})();
class StarRatingComponent {
  constructor() {
    this.stars = [];
    this._readOnly = false;
    this._totalStars = 5;
    this.rate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onStarsCountChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.onStarsCountChange.subscribe(() => {
      this.setStars();
      this.generateRating(true);
      this.applySizeAllStars();
      this.applyColorStyleAllStars(false);
      this.addEvents();
    });
    this.onValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.onValueChange.subscribe(() => {
      this.generateRating();
      this.applySizeAllStars();
    });
    this.onCheckedColorChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.onCheckedColorChange.subscribe(() => {
      this.applyColorStyleAllStars(true);
    });
    this.onUnCheckedColorChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.onUnCheckedColorChange.subscribe(() => {
      this.applyColorStyleAllStars(false);
    });
    this.onSizeChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.onSizeChange.subscribe(() => {
      this.applySizeAllStars();
    });
    this.onReadOnlyChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.onReadOnlyChange.subscribe(() => {
      this.readonly ? this.makeReadOnly() : this.makeEditable();
    });
  }
  get checkedcolor() {
    return this._checkedColor;
  }
  get uncheckedcolor() {
    return this._unCheckedColor;
  }
  get value() {
    return this._value;
  }
  get size() {
    return this._size.concat(!this._size.includes("px") ? "px" : "");
  }
  get readonly() {
    return String(this._readOnly) === "true";
  }
  get totalstars() {
    return this._totalStars;
  }
  set checkedcolor(value) {
    this._checkedColor = value;
    this._checkedColor && this.onCheckedColorChange.next(this._checkedColor);
  }
  set uncheckedcolor(value) {
    this._unCheckedColor = value;
    this._unCheckedColor && this.onUnCheckedColorChange.next(this._unCheckedColor);
  }
  set value(value) {
    value = !value || value == null ? 0 : value;
    this._value = value;
    this._value >= 0 && this.onValueChange.next(this._value);
  }
  set size(value) {
    value = !value || value == null || value == "0px" ? "24px" : value;
    this._size = value;
    this.onSizeChange.next(this._size);
  }
  set readonly(value) {
    this._readOnly = value;
    this.onReadOnlyChange.next(value);
  }
  set totalstars(value) {
    this._totalStars = value <= 0 ? 5 : Math.round(value);
    this.onStarsCountChange.next(this._totalStars);
  }
  makeEditable() {
    if (!this.mainElement) return;
    this.mainElement.nativeElement.style.cursor = "pointer";
    this.mainElement.nativeElement.title = this.value;
    this.stars.forEach(star => {
      star.style.cursor = "pointer";
      star.title = star.dataset.index;
    });
  }
  makeReadOnly() {
    if (!this.mainElement) return;
    this.mainElement.nativeElement.style.cursor = "default";
    this.mainElement.nativeElement.title = this.value;
    this.stars.forEach(star => {
      star.style.cursor = "default";
      star.title = "";
    });
  }
  addEvents() {
    if (!this.mainElement) return;
    this.mainElement.nativeElement.addEventListener('mouseleave', this.offStar.bind(this));
    this.mainElement.nativeElement.style.cursor = "pointer";
    this.mainElement.nativeElement.title = this.value;
    this.stars.forEach(star => {
      star.addEventListener('click', this.onRate.bind(this));
      star.addEventListener('mouseenter', this.onStar.bind(this));
      star.style.cursor = "pointer";
      star.title = star.dataset.index;
    });
  }
  ngAfterViewInit() {}
  onRate(event) {
    if (this.readonly) return;
    let star = event.srcElement;
    let oldValue = this.value;
    this.value = parseInt(star.dataset.index);
    // if (this.value == 0) {
    //   this.value = 1;
    // }
    let rateValues = {
      oldValue: oldValue,
      newValue: this.value,
      starRating: this
    };
    this.rate.emit(rateValues);
  }
  onStar(event) {
    if (this.readonly) return;
    let star = event.srcElement;
    let currentIndex = parseInt(star.dataset.index);
    for (let index = 0; index < currentIndex; index++) {
      this.stars[index].className = "";
      this.addDefaultClass(this.stars[index]);
      this.addCheckedStarClass(this.stars[index]);
    }
    for (let index = currentIndex; index < this.stars.length; index++) {
      this.stars[index].className = "";
      this.addDefaultClass(this.stars[index]);
    }
  }
  offStar(event) {
    this.generateRating();
  }
  addDefaultClass(star) {
    star.classList.add(StarRatingComponent.CLS_DEFAULT_STAR);
  }
  addCheckedStarClass(star) {
    star.classList.add(StarRatingComponent.CLS_CHECKED_STAR);
  }
  addHalfStarClass(star) {
    star.classList.add(StarRatingComponent.CLS_HALF_STAR);
  }
  setStars() {
    if (!this.mainElement) return;
    let starContainer = this.mainElement.nativeElement;
    let maxStars = [...Array(Number(this.totalstars)).keys()];
    this.stars.length = 0;
    starContainer.innerHTML = "";
    maxStars.forEach(starNumber => {
      let starElement = document.createElement("span");
      starElement.dataset.index = (starNumber + 1).toString();
      starElement.title = starElement.dataset.index;
      starContainer.appendChild(starElement);
      this.stars.push(starElement);
    });
  }
  applySizeAllStars() {
    if (this._size) {
      this.stars.length == 0 && this.setStars();
      this.stars.forEach(star => {
        let newSize = this.size.match(/\d+/)[0];
        let halfSize = parseInt(newSize) * 10 / 24;
        let halfMargin = 0 - parseInt(newSize) * 20 / 24;
        star.style.setProperty(StarRatingComponent.VAR_SIZE, this.size);
        if (star.classList.contains(StarRatingComponent.CLS_HALF_STAR)) {
          star.style.setProperty(StarRatingComponent.VAR_HALF_WIDTH, `${halfSize}px`);
          star.style.setProperty(StarRatingComponent.VAR_HALF_MARGIN, `${halfMargin}px`);
        }
      });
    }
  }
  applyColorStyleAllStars(setChecked) {
    this.stars.length == 0 && this.setStars();
    this.stars.forEach(star => {
      if (setChecked) {
        this.applyCheckedColorStyle(star);
      } else {
        this.applyUnCheckedColorStyle(star);
      }
    });
  }
  applyColorStyle(starElement) {
    this.applyCheckedColorStyle(starElement);
    this.applyUnCheckedColorStyle(starElement);
  }
  applyCheckedColorStyle(starElement) {
    starElement.style.setProperty(StarRatingComponent.VAR_CHECKED_COLOR, this.checkedcolor);
  }
  applyUnCheckedColorStyle(starElement) {
    starElement.style.setProperty(StarRatingComponent.VAR_UNCHECKED_COLOR, this.uncheckedcolor);
  }
  generateRating(forceGenerate = false) {
    if (!this.mainElement) return;
    if (this.readonly && !forceGenerate) return;
    //if (this.value >= 0) {
    this.stars.length == 0 && this.setStars();
    this.mainElement.nativeElement.title = this.value;
    let hasDecimals = (Number.parseFloat(this.value.toString()) % 1).toString().substring(3, 2) ? true : false;
    let i = 1;
    this.stars.forEach(star => {
      star.className = "";
      this.applyColorStyle(star);
      this.addDefaultClass(star);
      if (this.value >= i) {
        // star on
        this.addCheckedStarClass(star);
      } else {
        // half star
        if (hasDecimals) {
          this.addHalfStarClass(star);
          hasDecimals = false;
        }
      }
      i++;
    });
    //}
  }
}

StarRatingComponent.VAR_CHECKED_COLOR = '--checkedColor';
StarRatingComponent.VAR_UNCHECKED_COLOR = '--unCheckedColor';
StarRatingComponent.VAR_SIZE = '--size';
StarRatingComponent.VAR_HALF_WIDTH = '--halfWidth';
StarRatingComponent.VAR_HALF_MARGIN = '--halfMargin';
StarRatingComponent.CLS_CHECKED_STAR = 'on';
StarRatingComponent.CLS_DEFAULT_STAR = 'star';
StarRatingComponent.CLS_HALF_STAR = 'half';
StarRatingComponent.INP_CHECKED_COLOR = 'checkedcolor';
StarRatingComponent.INP_UNCHECKED_COLOR = 'uncheckedcolor';
StarRatingComponent.INP_VALUE = 'value';
StarRatingComponent.INP_SIZE = 'size';
StarRatingComponent.INP_READONLY = 'readonly';
StarRatingComponent.INP_TOTALSTARS = 'totalstars';
StarRatingComponent.ɵfac = function StarRatingComponent_Factory(t) {
  return new (t || StarRatingComponent)();
};
StarRatingComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: StarRatingComponent,
  selectors: [["star-rating"]],
  viewQuery: function StarRatingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainElement = _t.first);
    }
  },
  inputs: {
    checkedcolor: "checkedcolor",
    uncheckedcolor: "uncheckedcolor",
    value: "value",
    size: "size",
    readonly: "readonly",
    totalstars: "totalstars"
  },
  outputs: {
    rate: "rate"
  },
  decls: 2,
  vars: 0,
  consts: [["starMain", ""]],
  template: function StarRatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    }
  },
  styles: [":root{--checkedColor: gold;--unCheckedColor: gray;--size: 24px;--halfWidth: 10px;--halfMargin: -20px}.star{cursor:pointer;color:gray;color:var(--unCheckedColor);font-size:24px;font-size:var(--size);width:24px;width:var(--size);display:inline-block}.star:last-child{margin-right:0}.star:before{content:\"\\2605\"}.star.on{color:gold;color:var(--checkedColor)}.star.half:after{content:\"\\2605\";color:gold;color:var(--checkedColor);position:absolute;margin-left:-20px;margin-left:var(--halfMargin);width:10px;width:var(--halfWidth);overflow:hidden}\n"],
  encapsulation: 3
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarRatingComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'star-rating',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom,
      template: "<div #starMain>\n</div>",
      styles: [":root{--checkedColor: gold;--unCheckedColor: gray;--size: 24px;--halfWidth: 10px;--halfMargin: -20px}.star{cursor:pointer;color:gray;color:var(--unCheckedColor);font-size:24px;font-size:var(--size);width:24px;width:var(--size);display:inline-block}.star:last-child{margin-right:0}.star:before{content:\"\\2605\"}.star.on{color:gold;color:var(--checkedColor)}.star.half:after{content:\"\\2605\";color:gold;color:var(--checkedColor);position:absolute;margin-left:-20px;margin-left:var(--halfMargin);width:10px;width:var(--halfWidth);overflow:hidden}\n"]
    }]
  }], function () {
    return [];
  }, {
    mainElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['starMain', {
        static: true
      }]
    }],
    rate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    checkedcolor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [StarRatingComponent.INP_CHECKED_COLOR]
    }],
    uncheckedcolor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [StarRatingComponent.INP_UNCHECKED_COLOR]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [StarRatingComponent.INP_VALUE]
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [StarRatingComponent.INP_SIZE]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [StarRatingComponent.INP_READONLY]
    }],
    totalstars: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [StarRatingComponent.INP_TOTALSTARS]
    }]
  });
})();
class RatingModule {
  ngDoBootstrap() {}
}
RatingModule.ɵfac = function RatingModule_Factory(t) {
  return new (t || RatingModule)();
};
RatingModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: RatingModule
});
RatingModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [RatingComponent, StarRatingComponent],
      exports: [StarRatingComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of rating
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map