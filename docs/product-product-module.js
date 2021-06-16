(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "6K4N":
/*!************************************************************************************!*\
  !*** ./src/app/product/product-details-dialog/product-details-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductDetailsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsDialogComponent", function() { return ProductDetailsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_module_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-module/product-item/product-item.component */ "rLYD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








const _c0 = function (a0) { return { dark: a0 }; };
class ProductDetailsDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.darkTheme = JSON.parse(localStorage.getItem('darkTheme'));
    }
}
ProductDetailsDialogComponent.ɵfac = function ProductDetailsDialogComponent_Factory(t) { return new (t || ProductDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ProductDetailsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsDialogComponent, selectors: [["app-product-details-dialog"]], decls: 12, vars: 13, consts: [[1, "modal", 3, "ngClass"], [1, "product-modal"], ["mat-dialog-close", "", "id", "continue", "routerLink", "/"], ["id", "product", 3, "product"], ["routerLink", "/cart", "mat-dialog-close", "", "id", "checkout-cart"]], template: function ProductDetailsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-product-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.darkTheme));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "ProductDetailsDialog.Success"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" < ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "ProductDetailsDialog.ContinueShopping"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "ProductDetailsDialog.GoToCart"), ">");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _shared_module_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media only screen and (max-width: 992px) {\n  .modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font: 400 18px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  }\n}\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #634fbd;\n}\n.modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n  align-items: center;\n}\n.modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 15px;\n  cursor: pointer;\n  margin: 10px;\n  color: black;\n  font-weight: 500;\n  height: 20px;\n  padding: 5px;\n}\n.modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   #continue[_ngcontent-%COMP%] {\n  background-color: #5fd4d2;\n}\n.modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   #checkout-cart[_ngcontent-%COMP%] {\n  background-color: #634fbd;\n}\n.modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   #continue[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   #checkout-cart[_ngcontent-%COMP%] {\n  width: 40%;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  min-width: 11rem;\n}\n@media only screen and (max-width: 992px) {\n  .modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%] {\n    display: grid;\n    margin-top: 0;\n    justify-items: center;\n  }\n  .modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font: 400 18px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  }\n  .modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   #continue[_ngcontent-%COMP%] {\n    grid-row-start: 1;\n  }\n  .modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   #checkout-cart[_ngcontent-%COMP%] {\n    grid-row-start: 2;\n  }\n  .modal[_ngcontent-%COMP%]   .product-modal[_ngcontent-%COMP%]   #product[_ngcontent-%COMP%] {\n    grid-row-start: 3;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0U7SUFDRSx3REFBQTtFQUVKO0FBQ0Y7QUFBRTtFQUNFLGNBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBREk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBR047QUFESTtFQUNFLHlCQUFBO0FBR047QUFESTtFQUNFLHlCQUFBO0FBR047QUFESTs7RUFFRSxVQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFHTjtBQUFJO0VBNUJGO0lBNkJJLGFBQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7RUFHSjtFQUZJO0lBQ0Usd0RBQUE7RUFJTjtFQUZJO0lBQ0UsaUJBQUE7RUFJTjtFQUZJO0lBQ0UsaUJBQUE7RUFJTjtFQUZJO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0VBSU47QUFDRiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBmb250OiA0MDAgMThweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIH1cclxuICBoMiB7XHJcbiAgICBjb2xvcjogIzYzNGZiZDtcclxuICB9XHJcbiAgLnByb2R1Y3QtbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgI2NvbnRpbnVlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmZDRkMjtcclxuICAgIH1cclxuICAgICNjaGVja291dC1jYXJ0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNGZiZDtcclxuICAgIH1cclxuICAgICNjb250aW51ZSxcclxuICAgICNjaGVja291dC1jYXJ0IHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogMTFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250OiA0MDAgMThweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgICNjb250aW51ZSB7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgIH1cclxuICAgICAgI2NoZWNrb3V0LWNhcnQge1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gICAgICB9XHJcbiAgICAgICNwcm9kdWN0IHtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details-dialog',
                templateUrl: './product-details-dialog.component.html',
                styleUrls: ['./product-details-dialog.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "M+kB":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../product-details-dialog/product-details-dialog.component */ "6K4N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_models_cartBE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/models/cartBE */ "T3Jw");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/product.service */ "aiL1");
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/cart.service */ "7pSQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_module_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-module/navbar/navbar.component */ "FfIU");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-starrating */ "oaav");
/* harmony import */ var _shared_module_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared-module/product-item/product-item.component */ "rLYD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














function ProductDetailsComponent_div_0_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductDetailsComponent_div_0_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r5.addToCart(); return ctx_r5.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " shopping_cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductDetailsComponent_div_0_button_19_Template_div_click_3_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductDetailsComponent_div_0_button_19_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.modifyQuantity(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductDetailsComponent_div_0_button_19_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.qty < ctx_r9.product.itemsInStock ? ctx_r9.modifyQuantity(1) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 2, "ProductDetails.Add"));
} }
function ProductDetailsComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ProductDetails.Out of stock"), " ");
} }
function ProductDetailsComponent_div_0_h4_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r4.product.itemsInStock >= 20 ? "goodStock" : ctx_r4.product.itemsInStock > 15 ? "someStock" : "limitedStock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "ProductDetails.Quantity"), " ", ctx_r4.product.itemsInStock, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "ProductDetails.pcs"), " ");
} }
const _c0 = function (a0) { return { dark: a0 }; };
function ProductDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-navbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("curentTheme", function ProductDetailsComponent_div_0_Template_app_navbar_curentTheme_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.receive($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "star-rating", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProductDetailsComponent_div_0_button_19_Template, 13, 4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProductDetailsComponent_div_0_div_20_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProductDetailsComponent_div_0_h4_21_Template, 4, 8, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx_r0.darkTheme));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 13, ctx_r0.product.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 15, "ProductDetails.Rating"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.product.rating)("totalstars", 5)("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r0.product.rating, "/5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.product.price, " lei");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.outOfStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.outOfStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.product.itemsInStock);
} }
const _c1 = function () { return { margin: "15px" }; };
function ProductDetailsComponent_app_product_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-product-item", 25);
} if (rf & 2) {
    const product_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r12)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1))("darkTheme", ctx_r1.darkTheme);
} }
class ProductDetailsComponent {
    constructor(route, productServ, cartService, dialog, router, elementRef) {
        this.route = route;
        this.productServ = productServ;
        this.cartService = cartService;
        this.dialog = dialog;
        this.router = router;
        this.elementRef = elementRef;
        this.cart = new _core_models_cartBE__WEBPACK_IMPORTED_MODULE_2__["cartBE"]();
        this.history = [];
        this.displayHistory = [];
        this.id = this.route.snapshot.params.id;
        this.qty = 1;
        this.outOfStock = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    addToCart() {
        this.cartService.currentCart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe((res) => {
            if (Object.keys(res).length !== 0)
                this.cart = res;
            let existInCart = false;
            for (let key in this.cart.products)
                if (key === this.product.id) {
                    if (this.cart.products[key] + this.qty <= this.product.itemsInStock) {
                        this.cart.products[key] += this.qty;
                    }
                    else
                        this.cart.products[key] = this.product.itemsInStock;
                    existInCart = true;
                }
            if (!existInCart) {
                this.cart.products[this.product.id] = this.qty;
                if (localStorage.hasOwnProperty('user'))
                    this.cart.userId = JSON.parse(localStorage.getItem('user') || '{}').id;
            }
            if (this.cart.products != null)
                delete this.cart.products[''];
            this.cartService.update(this.cart);
        });
    }
    openDialog() {
        if (this.darkTheme) {
            this.dialog.open(_product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailsDialogComponent"], {
                panelClass: 'custom-modalbox',
                data: this.product
            });
        }
        else
            this.dialog.open(_product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailsDialogComponent"], {
                data: this.product
            });
    }
    modifyQuantity(val) {
        if (!(val === -1 && this.qty === 1)) {
            this.qty += val;
        }
        ;
    }
    //add to history the current product
    //display from history only 5 products and exclude current product
    handleHistory(product) {
        this.history = JSON.parse(localStorage.getItem('history') || '[]');
        this.displayHistory = this.history.filter((val) => val.id !== product.id);
        this.displayHistory = this.displayHistory.reverse();
        let exist = false;
        this.history.forEach((val) => {
            if (val.id === product.id)
                exist = true;
        });
        if (!exist) {
            this.history.push(product);
        }
        if (this.displayHistory.length > 5) {
            this.displayHistory = this.displayHistory.slice(this.displayHistory.length - 5, this.displayHistory.length);
        }
        if (this.history.length > 6) {
            this.history = this.history.slice(this.history.length - 5, this.history.length);
        }
        localStorage.setItem('history', JSON.stringify(this.history));
    }
    ngOnInit() {
        this.darkTheme = JSON.parse(localStorage.getItem('darkTheme'));
        this.productServ.getProduct(this.id).subscribe((product) => {
            this.product = product;
            (this.product.itemsInStock <= 0) ? this.outOfStock = true : null;
            this.handleHistory(product);
        });
    }
    ngAfterViewInit() {
        this.darkTheme ?
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#3d3c3c"
            : this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafbfc';
    }
    receive(event) {
        this.curentTheme = event;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.curentTheme;
        this.darkTheme = JSON.parse(localStorage.getItem('darkTheme'));
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 10, vars: 5, consts: [["class", "details", 3, "ngClass", 4, "ngIf"], [1, "margin"], [1, "product-list"], [3, "product", "ngStyle", "darkTheme", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "details", 3, "ngClass"], [3, "curentTheme"], [1, "product-information"], ["alt", "", 3, "src"], [1, "product-details"], [1, "rating-description"], ["checkedcolor", "#ffd700", "uncheckedcolor", "#dcdcdc", "size", "24px", 3, "value", "totalstars", "readonly"], [1, "product-description"], [1, "add-to-cart"], [3, "click", 4, "ngIf"], ["class", "outOfStock button", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "click"], [1, "material-icons", "shopping"], [1, "quantity", 3, "click"], [1, "quantity-buttons", 3, "click"], [1, "larger"], [1, "add-text"], [1, "outOfStock", "button"], [3, "ngClass"], [3, "product", "ngStyle", "darkTheme"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductDetailsComponent_div_0_Template, 22, 19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductDetailsComponent_app_product_item_5_Template, 1, 4, "app-product-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "ProductDetails.Recent"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayHistory);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _shared_module_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], ng_starrating__WEBPACK_IMPORTED_MODULE_10__["StarRatingComponent"], _shared_module_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_11__["ProductItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: [".details[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  border-bottom: 3px solid #4cb5cf;\n  margin-bottom: 15px;\n  padding-bottom: 15px;\n  text-align: center;\n}\n.details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 500;\n  padding: 20px 0;\n}\n@media only screen and (max-width: 992px) {\n  .details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  min-height: 400px;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .rating-description[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .rating-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  margin: 0 auto;\n  justify-content: center;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .rating-description[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  margin: 30px auto;\n  width: 80%;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 65%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  object-fit: contain;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .outOfStock[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 250px;\n  color: #fff;\n  border: none;\n  line-height: 25px;\n  background: #808080;\n  font-size: 20px;\n  border-radius: 5px;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 250px;\n  background-image: linear-gradient(to right, #5fd4d2, #634fbd 40%);\n  border: none;\n  color: white;\n  font-size: 20px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .shopping[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  flex-grow: 3;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  padding: 0 0.7rem;\n  flex-grow: 6;\n  flex-shrink: 0;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  vertical-align: middle;\n  font-size: 1.6rem;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .quantity-buttons[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .add-text[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n  font-size: 1.2rem;\n  flex-grow: 11;\n}\n@media only screen and (max-width: 992px) {\n  .details[_ngcontent-%COMP%]   .product-information[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.product-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-evenly;\n  margin-left: 4%;\n  min-width: 40%;\n}\n@media only screen and (max-width: 992px) {\n  .product-details[_ngcontent-%COMP%] {\n    margin-top: 6%;\n    flex-direction: column;\n  }\n  .product-details[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n    margin-bottom: 4%;\n  }\n}\n.product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  cursor: pointer;\n  width: 80%;\n  margin: 20px auto;\n}\n@media only screen and (max-width: 992px) {\n  .product-list[_ngcontent-%COMP%] {\n    justify-content: space-evenly;\n  }\n}\n.product-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 16px;\n}\n.margin[_ngcontent-%COMP%] {\n  margin-left: 120px;\n}\n.limitedStock[_ngcontent-%COMP%] {\n  color: #ff0000;\n  font-size: large;\n  margin: 0 auto;\n}\n.someStock[_ngcontent-%COMP%] {\n  color: #ffa500;\n  margin: 0 auto;\n}\n.goodStock[_ngcontent-%COMP%] {\n  color: #008000;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQVNBLGtCQUFBO0FBUEY7QUFERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHSjtBQUZJO0VBSkY7SUFLSSxlQUFBO0VBS0o7QUFDRjtBQUZFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUo7QUFISTtFQUNFLG1CQUFBO0FBS047QUFKTTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBTVI7QUFKTTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQU1SO0FBSEk7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUFLTjtBQUZJO0VBQ0UsaUJBQUE7QUFJTjtBQUhNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLUjtBQUhNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUtSO0FBSE07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlFQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFLUjtBQUpRO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBTVY7QUFKUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFNVjtBQUpRO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQU1WO0FBSlE7RUFDRSxlQUFBO0FBTVY7QUFKUTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBTVY7QUFGSTtFQW5GRjtJQW9GSSxzQkFBQTtFQUtKO0FBQ0Y7QUFGQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLRjtBQUpFO0VBTkY7SUFPSSxjQUFBO0lBQ0Esc0JBQUE7RUFPRjtFQU5FO0lBQ0UsaUJBQUE7RUFRSjtBQUNGO0FBTEE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVFGO0FBUEU7RUFQRjtJQVFJLDZCQUFBO0VBVUY7QUFDRjtBQVRFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFXSjtBQVJBO0VBQ0Usa0JBQUE7QUFXRjtBQVRBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVlGO0FBVkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQWFGO0FBWEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFjRiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0Y2I1Y2Y7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAucHJvZHVjdC1pbmZvcm1hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAucmF0aW5nLWRlc2NyaXB0aW9uIHtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtaW4td2lkdGg6IDY1JTtcclxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkLXRvLWNhcnQge1xyXG4gICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAub3V0T2ZTdG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4MDgwODA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNWZkNGQyLCAjNjM0ZmJkIDQwJSk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC5zaG9wcGluZyB7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucXVhbnRpdHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwLjdyZW07XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDY7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1YW50aXR5LWJ1dHRvbnMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1YW50aXR5LWJ1dHRvbnM6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkLXRleHQge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnByb2R1Y3QtZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIG1pbi13aWR0aDogNDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5hZGQtdG8tY2FydCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucHJvZHVjdC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG4gIGkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gIH1cclxufVxyXG4ubWFyZ2luIHtcclxuICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbn1cclxuLmxpbWl0ZWRTdG9jayB7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc29tZVN0b2NrIHtcclxuICBjb2xvcjogI2ZmYTUwMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZ29vZFN0b2NrIHtcclxuICBjb2xvcjogIzAwODAwMDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: _core_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "Mj6s":
/*!******************************************************************!*\
  !*** ./src/app/recommended/recommended/recommended.component.ts ***!
  \******************************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/product.service */ "aiL1");
/* harmony import */ var _core_services_additional_details_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/additional-details-service.service */ "vK6I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_module_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-module/product-item/product-item.component */ "rLYD");






const _c0 = function () { return { margin: "15px" }; };
function RecommendedComponent_div_3_app_product_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 6);
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r3)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("darkTheme", false);
} }
function RecommendedComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecommendedComponent_div_3_app_product_item_1_Template, 1, 4, "app-product-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.finalProducts);
} }
function RecommendedComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fill in your additional details to get personalized recommendations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RecommendedComponent {
    constructor(productService, additionalDetailsService) {
        this.productService = productService;
        this.additionalDetailsService = additionalDetailsService;
        this.products = [];
        this.finalProducts = [];
        this.productsDetails = [];
        this.user = JSON.parse(localStorage.getItem('user'));
        this.aproximateWheel = [];
        this.exactWheel = [];
        this.ageAppropriate = [];
    }
    ngOnInit() {
        if (this.user) {
            this.userDetails = this.additionalDetailsService.get(this.user.id);
            // if (localStorage.getItem('productsDetails') === null)      
            //   getProductDetailsArray.getProductDetail(this.productService);
            this.productsDetails = JSON.parse(localStorage.getItem('productsDetails'));
            this.idealWheel = this.computeIdealWheel(this.userDetails.height);
            if (this.userDetails.id) {
                this.productsDetails = this.filterByWeight();
                if (this.productsDetails.length > 3) {
                    this.aproximateWheel = this.filterByWheelRange(this.productsDetails);
                    if (this.aproximateWheel.length < 3) {
                        this.fill(this.aproximateWheel, this.productsDetails);
                    }
                    else {
                        this.exactWheel = this.filterByWheelDiameter(this.aproximateWheel);
                        if (this.exactWheel.length < 3) {
                            this.fill(this.exactWheel, this.aproximateWheel);
                        }
                        else {
                            this.ageAppropriate = this.filterByAge(this.exactWheel);
                            if (this.ageAppropriate.length < 3)
                                this.fill(this.ageAppropriate, this.exactWheel);
                            this.productsDetails = this.ageAppropriate;
                        }
                    }
                }
                this.productsDetails = this.productsDetails.slice(0, 3);
                this.productsDetails.forEach((el, i) => this.productService.getProduct(el.id).subscribe(res => this.finalProducts[i] = res));
            }
        }
    }
    computeIdealWheel(height) {
        if (height > 190)
            return 29;
        if (height > 175)
            return 27.5;
        if (height > 145)
            return 26;
        return 24;
    }
    computeIdealCategory(year) {
        let age = new Date().getFullYear() - year;
        if (age > 60)
            return 'Electrica';
        if (age > 30)
            return 'All mountain';
        if (age > 12)
            return 'MTB';
        return 'Copii';
    }
    fill(receiver, giver) {
        let needed = 3 - receiver.length;
        let unused;
        if (receiver[0])
            unused = giver.filter(({ id: id1 }) => !receiver.some(({ id: id2 }) => id2 === id1));
        else
            unused = giver.slice(0, 3);
        let i = 0;
        while (needed) {
            receiver.push(unused[i]);
            i++;
            needed--;
        }
        this.productsDetails = receiver;
    }
    filterByWeight() {
        return this.productsDetails.filter(el => el.maxWeight >= this.userDetails.weight);
    }
    filterByWheelRange(array) {
        return array.filter((el) => el.wheelDiameter <= this.idealWheel + 2 && el.wheelDiameter >= this.idealWheel - 2);
    }
    filterByWheelDiameter(array) {
        return array.filter((el) => el.wheelDiameter == this.idealWheel);
    }
    filterByAge(array) {
        let idealCategory = this.computeIdealCategory(this.userDetails.yearOfBirth);
        return array.filter((el) => el.category == idealCategory);
    }
}
RecommendedComponent.ɵfac = function RecommendedComponent_Factory(t) { return new (t || RecommendedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_additional_details_service_service__WEBPACK_IMPORTED_MODULE_2__["AdditionalDetailsServiceService"])); };
RecommendedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendedComponent, selectors: [["app-recommended"]], decls: 5, vars: 2, consts: [[1, "container"], ["class", "product-list", 4, "ngIf"], ["class", "no-products", 4, "ngIf"], [1, "product-list"], [3, "product", "ngStyle", "darkTheme", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [3, "product", "ngStyle", "darkTheme"], [1, "no-products"]], template: function RecommendedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recommended for you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecommendedComponent_div_3_Template, 6, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecommendedComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetails == null ? null : ctx.userDetails.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_module_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.product-list[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 10px;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  width: 89vw;\n  background-color: #eceff1;\n}\nh1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\nh1[_ngcontent-%COMP%]:before, h1[_ngcontent-%COMP%]:after {\n  content: \" \";\n  flex: 1 1;\n  border-bottom: 2px solid #4cb5cf;\n  margin: auto 1rem;\n}\n.no-products[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWNvbW1lbmRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTs7RUFFRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7QUFBRiIsImZpbGUiOiJyZWNvbW1lbmRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAuY2hpbGQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHdpZHRoOiA4OXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjE7XHJcbn1cclxuXHJcbmgxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbmgxOmJlZm9yZSxcclxuaDE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGZsZXg6IDEgMTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzRjYjVjZjtcclxuICBtYXJnaW46IGF1dG8gMXJlbTtcclxufVxyXG5cclxuLm5vLXByb2R1Y3RzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recommended',
                templateUrl: './recommended.component.html',
                styleUrls: ['./recommended.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _core_services_additional_details_service_service__WEBPACK_IMPORTED_MODULE_2__["AdditionalDetailsServiceService"] }]; }, null); })();


/***/ }),

/***/ "T3Jw":
/*!***************************************!*\
  !*** ./src/app/core/models/cartBE.ts ***!
  \***************************************/
/*! exports provided: cartBE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartBE", function() { return cartBE; });
class cartBE {
    constructor(userId = '', products = {
        '': 0,
    }) {
        this.userId = userId;
        this.products = products;
    }
}


/***/ }),

/***/ "cjwk":
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details/product-details.component */ "M+kB");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "codU");






const routes = [
    { path: '', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'products/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"] },
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "codU":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/product.service */ "aiL1");
/* harmony import */ var _core_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/search.service */ "TZhc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_module_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-module/navbar/navbar.component */ "FfIU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _recommended_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../recommended/recommended/recommended.component */ "Mj6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_module_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-module/product-item/product-item.component */ "rLYD");
/* harmony import */ var _shared_module_bike_details_bike_details_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-module/bike-details/bike-details.directive */ "K5G+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_module_pipes_filter_product_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared-module/pipes/filter-product.pipe */ "a/I3");













function ProductListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeSortDirection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_circle_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("gray", ctx_r0.sortBy == "" || ctx_r0.sortBy == "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ProductList.Descending"), " ");
} }
function ProductListComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeSortDirection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_circle_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "ProductList.Ascending"), " ");
} }
function ProductListComponent_app_product_item_26_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("id", function ProductListComponent_app_product_item_26_Template_app_product_item_id_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.receiveFromItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r14)("darkTheme", ctx_r2.darkTheme);
} }
function ProductListComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageSizeItem_r17 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", pageSizeItem_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", pageSizeItem_r17 === ctx_r3.pageSize ? "isSelected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSizeItem_r17, " ");
} }
function ProductListComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.showFirstPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " << ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductListComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.decreasePageNo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" < ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ProductList.Previous"), " ");
} }
function ProductListComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_button_42_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const pageNo_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.showPageNo(pageNo_r22 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNo_r22 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r6.pageNumber === pageNo_r22 - 1 ? "black" : null)("text-decoration", ctx_r6.pageNumber === pageNo_r22 - 1 ? "underline" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageNo_r22, " ");
} }
function ProductListComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductListComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.increasePageNo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ProductList.Next"), " > ");
} }
function ProductListComponent_button_47_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.showLastPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " >> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { dark: a0 }; };
const _c1 = function (a0) { return { "elevated-dark": a0 }; };
class ProductListComponent {
    constructor(elementRef, productServ, searchService, scroll) {
        this.elementRef = elementRef;
        this.productServ = productServ;
        this.searchService = searchService;
        this.scroll = scroll;
        this.products = [];
        this.multiplePages = [];
        this.searchTerm = '';
        this.pageNumber = 0;
        this.totalPages = 0;
        this.numberOfMultiplePages = 5;
        this.pageSizeSelector = [10, 20, 50];
        this.orderOptions = ['-', 'Price', 'Rating', 'Name', 'Brand'];
        this.descending = true;
        this.sortBy = '';
    }
    receiveFromItem($event) {
        console.log('Am primit de la copil id: ', $event);
    }
    callForProducts() {
        this.productServ
            .getProducts(this.pageNumber, this.pageSize, (this.orderOptions.includes(this.sortBy)) ? this.sortBy.toLowerCase() : '', this.descending ? 'DESC' : 'ASC')
            .subscribe((products) => {
            this.products = products.content;
            this.totalPages = products.totalPages;
            this.showMultiplePages(this.pageNumber);
        });
        this.scroll.scrollToPosition([0, 0]);
    }
    showFirstPage() {
        this.pageNumber = 0;
        this.callForProducts();
    }
    decreasePageNo() {
        this.pageNumber--;
        this.callForProducts();
    }
    showPageNo(pageNo) {
        this.pageNumber = pageNo;
        this.callForProducts();
    }
    increasePageNo() {
        this.pageNumber++;
        this.callForProducts();
    }
    showLastPage() {
        this.pageNumber = this.totalPages - 1;
        this.callForProducts();
    }
    selectPageSizeHandler(event) {
        this.pageSize = event.target.value;
        sessionStorage.setItem('pageSize', JSON.stringify(this.pageSize));
        this.pageNumber = 0;
        this.callForProducts();
    }
    showMultiplePages(pageNo) {
        let viewPages = this.totalPages - this.numberOfMultiplePages;
        this.multiplePages = [];
        /* istanbul ignore else */
        if (this.totalPages < this.numberOfMultiplePages) {
            pageNo = 0;
            do {
                pageNo++;
                this.multiplePages.push(pageNo);
            } while (pageNo != this.totalPages);
        }
        else if (pageNo - 1 < viewPages) {
            pageNo =
                pageNo - Math.floor(this.numberOfMultiplePages / 2) <= 0
                    ? 0
                    : pageNo <= this.numberOfMultiplePages
                        ? pageNo - Math.floor(this.numberOfMultiplePages / 2)
                        : pageNo;
            do {
                pageNo++;
                this.multiplePages.push(pageNo);
            } while (this.multiplePages.length != this.numberOfMultiplePages &&
                [...this.multiplePages].pop() != this.totalPages);
        }
        else {
            pageNo = this.totalPages - this.numberOfMultiplePages;
            do {
                pageNo++;
                this.multiplePages.push(pageNo);
            } while (this.multiplePages.length != this.numberOfMultiplePages);
        }
    }
    ngOnInit() {
        this.darkTheme = JSON.parse(localStorage.getItem('darkTheme'));
        this.pageSize = parseInt(JSON.parse(sessionStorage.getItem('pageSize') || '10'));
        this.sortBy = JSON.parse(sessionStorage.getItem('sortBy') || '{}');
        this.descending = JSON.parse(sessionStorage.getItem('descending') || 'true');
        this.productServ
            .getProducts(this.pageNumber, this.pageSize, (this.orderOptions.includes(this.sortBy)) ? this.sortBy.toLowerCase() : '', this.descending ? 'DESC' : 'ASC')
            .subscribe((products) => {
            this.products = products.content;
            this.totalPages = products.totalPages;
            this.showMultiplePages(this.pageNumber);
            this.scroll.scrollToPosition([0, 0]);
        });
        this.subscription = this.searchService.currentSearchTerm.subscribe((term) => {
            this.searchTerm = term;
        });
    }
    ngAfterViewInit() {
        this.darkTheme ?
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#3d3c3c"
            : this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafbfc';
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    changeSortDirection() {
        if (this.sortBy != '' && this.sortBy != '-')
            this.descending = !this.descending;
        sessionStorage.setItem('descending', JSON.stringify(this.descending));
        this.callForProducts();
    }
    selectSortCriteria(event) {
        this.sortBy = event.target.value;
        sessionStorage.setItem('sortBy', JSON.stringify(this.sortBy));
        this.callForProducts();
    }
    receive(event) {
        this.curentTheme = event;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.curentTheme;
        this.darkTheme = JSON.parse(localStorage.getItem('darkTheme'));
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["ViewportScroller"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 49, vars: 45, consts: [[3, "curentTheme"], [1, "sort-container", 3, "ngClass"], [1, "sort-item"], ["for", "order"], ["name", "order", 3, "ngModel", "ngClass", "change", "ngModelChange"], ["value", "-"], ["value", "Price"], ["value", "Rating"], ["value", "Name"], ["value", "Brand"], ["class", "sort-button", 3, "gray", "click", 4, "ngIf"], ["class", "sort-button", 3, "click", 4, "ngIf"], [1, "product-list"], ["class", "child", "appBikeDetails", "product", 3, "product", "darkTheme", "id", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "page-controls"], ["for", "pageSize"], ["name", "pageSize", "id", "pageSize", "title", "The number of products per page", 1, "pageSize", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["title", "Go to first page", 3, "click", 4, "ngIf"], ["title", "Go to previous page", 3, "click", 4, "ngIf"], ["title", "Go to page", 3, "color", "text-decoration", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Go to next page", 3, "click", 4, "ngIf"], ["title", "Go to last page", 3, "click", 4, "ngIf"], [1, "footer"], [1, "sort-button", 3, "click"], ["appBikeDetails", "product", 1, "child", 3, "product", "darkTheme", "id"], [3, "value", "selected"], ["title", "Go to first page", 3, "click"], ["title", "Go to previous page", 3, "click"], ["title", "Go to page", 3, "click"], ["title", "Go to next page", 3, "click"], ["title", "Go to last page", 3, "click"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("curentTheme", function ProductListComponent_Template_app_navbar_curentTheme_0_listener($event) { return ctx.receive($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_select_change_6_listener($event) { return ctx.selectSortCriteria($event); })("ngModelChange", function ProductListComponent_Template_select_ngModelChange_6_listener($event) { return ctx.sortBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductListComponent_div_21_Template, 5, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductListComponent_div_22_Template, 5, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProductListComponent_app_product_item_26_Template, 1, 2, "app-product-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "filterProduct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_select_change_36_listener($event) { return ctx.selectPageSizeHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProductListComponent_option_37_Template, 2, 3, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProductListComponent_button_38_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProductListComponent_button_39_Template, 3, 3, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductListComponent_button_42_Template, 2, 5, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProductListComponent_span_43_Template, 2, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProductListComponent_button_46_Template, 3, 3, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProductListComponent_button_47_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 25);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, ctx.darkTheme));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 22, "ProductList.Sort"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sortBy)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c1, ctx.darkTheme));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 24, "ProductList.Price"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 26, "ProductList.Rating"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 28, "ProductList.Name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 30, "ProductList.Brand"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.descending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.descending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 32, ctx.products, ctx.searchTerm));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 35, "ProductList.Products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizeSelector);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageNumber > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageNumber > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 37, "ProductList.Page"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.multiplePages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageNumber + ctx.numberOfMultiplePages <= ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 39, "ProductList.of"), " ", ctx.totalPages, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageNumber + 1 < ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageNumber + 1 < ctx.totalPages);
    } }, directives: [_shared_module_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _recommended_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_6__["RecommendedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _shared_module_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemComponent"], _shared_module_bike_details_bike_details_directive__WEBPACK_IMPORTED_MODULE_9__["BikeDetailsDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _shared_module_pipes_filter_product_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterProductPipe"]], styles: [".product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 1.1 em;\n  justify-content: space-between;\n  align-items: stretch;\n  margin: auto;\n  width: 90%;\n}\n@media only screen and (max-width: 575px) {\n  .product-list[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 575px) and (max-width: 460px) {\n  .product-list[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%] {\n    width: 98%;\n  }\n}\n.product-list[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 10px;\n}\n.recommended[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.product-light[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #000;\n}\ni[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 16px;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n.pageSize[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.page-controls[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\n.page-controls[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: #0000ff;\n}\n.page-controls[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.page-controls[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:active {\n  color: red;\n}\n.page-controls[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #0000ff;\n}\n.footer[_ngcontent-%COMP%] {\n  height: 10px;\n}\n.sort-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 80%;\n  margin: 130px auto 20px;\n  font-size: 1.1rem;\n}\n@media only screen and (max-width: 575px) {\n  .sort-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    margin: 180px auto 20px;\n  }\n  .sort-container[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%] {\n    margin-bottom: 3%;\n  }\n}\n.sort-container[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.sort-item[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  display: inline-block;\n}\n.sort-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  min-width: 4.5rem;\n}\n.sort-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 2rem;\n  min-width: 8rem;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 0.2rem;\n}\n.gray[_ngcontent-%COMP%] {\n  color: #808080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFVRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBUkY7QUFQRTtFQURGO0lBRUksdUJBQUE7SUFDQSxXQUFBO0VBVUY7QUFDRjtBQVZJO0VBQ0U7SUFDRSxVQUFBO0VBWU47QUFDRjtBQUZFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFJSjtBQUFBO0VBQ0UsWUFBQTtBQUdGO0FBREE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUFJRjtBQURBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFJRjtBQURBO0VBQ0UsaUJBQUE7QUFJRjtBQURBO0VBQ0UsZUFBQTtBQUlGO0FBREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBSUY7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFJRjtBQURBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBSUY7QUFEQTtFQUNFLFVBQUE7QUFJRjtBQURBO0VBQ0UsY0FBQTtBQUlGO0FBREE7RUFDRSxZQUFBO0FBSUY7QUFGQTtFQVlFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQU5GO0FBUkU7RUFERjtJQUVJLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtFQVdGO0VBVkU7SUFDRSxpQkFBQTtFQVlKO0FBQ0Y7QUFWRTtFQUNFLGlCQUFBO0FBWUo7QUFMQTtFQUNFLGlCQUFBO0VBS0EscUJBQUE7QUFJRjtBQVJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQVVKO0FBTkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVNGO0FBUEE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBVUY7QUFSQTtFQUNFLGNBQUE7QUFXRiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1saXN0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gICAgICAuY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZm9udC1zaXplOiAxLjEgZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIC5jaGlsZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVjb21tZW5kZWQge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ucHJvZHVjdC1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmkge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDE2cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLnBhZ2VTaXplIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRyb2xzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBhZ2UtY29udHJvbHMgPiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzAwMDBmZjtcclxufVxyXG5cclxuLnBhZ2UtY29udHJvbHMgPiBidXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnBhZ2UtY29udHJvbHMgPiBidXR0b246YWN0aXZlIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucGFnZS1jb250cm9scyA+IHNwYW4ge1xyXG4gIGNvbG9yOiAjMDAwMGZmO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuLnNvcnQtY29udGFpbmVyIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxODBweCBhdXRvIDIwcHg7XHJcbiAgICAuc29ydC1pdGVtIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zb3J0LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDEzMHB4IGF1dG8gMjBweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG4uc29ydC1pdGVtIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBtaW4td2lkdGg6IDQuNXJlbTtcclxuICB9XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zb3J0LWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIG1pbi13aWR0aDogOHJlbTtcclxufVxyXG4ubWF0LWljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XHJcbn1cclxuLmdyYXkge1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _core_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["ViewportScroller"] }]; }, null); })();


/***/ }),

/***/ "kQbG":
/*!***************************************************!*\
  !*** ./src/app/recommended/recommended.module.ts ***!
  \***************************************************/
/*! exports provided: RecommendedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedModule", function() { return RecommendedModule; });
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared-module/shared-module.module */ "QYs8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommended/recommended.component */ "Mj6s");





class RecommendedModule {
}
RecommendedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RecommendedModule });
RecommendedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RecommendedModule_Factory(t) { return new (t || RecommendedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecommendedModule, { declarations: [_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__["RecommendedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]], exports: [_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__["RecommendedComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__["RecommendedComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ],
                exports: [_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_3__["RecommendedComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "qvFY":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _recommended_recommended_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../recommended/recommended.module */ "kQbG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared-module/shared-module.module */ "QYs8");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../modules/material/material.module */ "7J/h");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-starrating */ "oaav");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "codU");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details/product-details.component */ "M+kB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-routing.module */ "cjwk");
/* harmony import */ var _product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-details-dialog/product-details-dialog.component */ "6K4N");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app.module */ "ZAI4");

















class ProductModule {
}
ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function ProductModule_Factory(t) { return new (t || ProductModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProductRoutingModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _recommended_recommended_module__WEBPACK_IMPORTED_MODULE_0__["RecommendedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_14__["HttpLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"],
        _product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsDialogComponent"],
        _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _product_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProductRoutingModule"],
        ng_starrating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _recommended_recommended_module__WEBPACK_IMPORTED_MODULE_0__["RecommendedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
        args: [{
                declarations: [
                    _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"],
                    _product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsDialogComponent"],
                    _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _product_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProductRoutingModule"],
                    ng_starrating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
                    _modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _recommended_recommended_module__WEBPACK_IMPORTED_MODULE_0__["RecommendedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                            useFactory: _app_module__WEBPACK_IMPORTED_MODULE_14__["HttpLoaderFactory"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                        }
                    }),
                ],
                entryComponents: [_product_details_dialog_product_details_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsDialogComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map