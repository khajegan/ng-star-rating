import * as i0 from '@angular/core';
import { Component, EventEmitter, ViewEncapsulation, ViewChild, Output, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

class RatingComponent {
    constructor() { }
    ngOnInit() {
    }
}
RatingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RatingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: RatingComponent, selector: "lib-rating", ngImport: i0, template: `
    <p>
      rating works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-rating', template: `
    <p>
      rating works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class StarRatingComponent {
    constructor() {
        this.stars = [];
        this._readOnly = false;
        this._totalStars = 5;
        this.rate = new EventEmitter();
        this.onStarsCountChange = new Subject();
        this.onStarsCountChange.subscribe(() => {
            this.setStars();
            this.generateRating(true);
            this.applySizeAllStars();
            this.applyColorStyleAllStars(false);
            this.addEvents();
        });
        this.onValueChange = new Subject();
        this.onValueChange.subscribe(() => {
            this.generateRating();
            this.applySizeAllStars();
        });
        this.onCheckedColorChange = new Subject();
        this.onCheckedColorChange.subscribe(() => {
            this.applyColorStyleAllStars(true);
        });
        this.onUnCheckedColorChange = new Subject();
        this.onUnCheckedColorChange.subscribe(() => {
            this.applyColorStyleAllStars(false);
        });
        this.onSizeChange = new Subject();
        this.onSizeChange.subscribe(() => {
            this.applySizeAllStars();
        });
        this.onReadOnlyChange = new Subject();
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
        return this._size.concat((!this._size.includes("px") ? "px" : ""));
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
        value = (!value || value == null) ? 0 : value;
        this._value = value;
        this._value >= 0 && this.onValueChange.next(this._value);
    }
    set size(value) {
        value = (!value || value == null || value == "0px") ? "24px" : value;
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
        if (!this.mainElement)
            return;
        this.mainElement.nativeElement.style.cursor = "pointer";
        this.mainElement.nativeElement.title = this.value;
        this.stars.forEach((star) => {
            star.style.cursor = "pointer";
            star.title = star.dataset.index;
        });
    }
    makeReadOnly() {
        if (!this.mainElement)
            return;
        this.mainElement.nativeElement.style.cursor = "default";
        this.mainElement.nativeElement.title = this.value;
        this.stars.forEach((star) => {
            star.style.cursor = "default";
            star.title = "";
        });
    }
    addEvents() {
        if (!this.mainElement)
            return;
        this.mainElement.nativeElement.addEventListener('mouseleave', this.offStar.bind(this));
        this.mainElement.nativeElement.style.cursor = "pointer";
        this.mainElement.nativeElement.title = this.value;
        this.stars.forEach((star) => {
            star.addEventListener('click', this.onRate.bind(this));
            star.addEventListener('mouseenter', this.onStar.bind(this));
            star.style.cursor = "pointer";
            star.title = star.dataset.index;
        });
    }
    ngAfterViewInit() {
    }
    onRate(event) {
        if (this.readonly)
            return;
        let star = event.srcElement;
        let oldValue = this.value;
        this.value = parseInt(star.dataset.index);
        // if (this.value == 0) {
        //   this.value = 1;
        // }
        let rateValues = { oldValue: oldValue, newValue: this.value, starRating: this };
        this.rate.emit(rateValues);
    }
    onStar(event) {
        if (this.readonly)
            return;
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
        if (!this.mainElement)
            return;
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
            this.stars.forEach((star) => {
                let newSize = this.size.match(/\d+/)[0];
                let halfSize = (parseInt(newSize) * 10) / 24;
                let halfMargin = 0 - ((parseInt(newSize) * 20) / 24);
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
        this.stars.forEach((star) => {
            if (setChecked) {
                this.applyCheckedColorStyle(star);
            }
            else {
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
        if (!this.mainElement)
            return;
        if (this.readonly && !forceGenerate)
            return;
        //if (this.value >= 0) {
        this.stars.length == 0 && this.setStars();
        this.mainElement.nativeElement.title = this.value;
        let hasDecimals = ((Number.parseFloat(this.value.toString()) % 1)
            .toString()
            .substring(3, 2)) ? true : false;
        let i = 1;
        this.stars.forEach((star) => {
            star.className = "";
            this.applyColorStyle(star);
            this.addDefaultClass(star);
            if (this.value >= i) {
                // star on
                this.addCheckedStarClass(star);
            }
            else {
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
StarRatingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StarRatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StarRatingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StarRatingComponent, selector: "star-rating", inputs: { checkedcolor: "checkedcolor", uncheckedcolor: "uncheckedcolor", value: "value", size: "size", readonly: "readonly", totalstars: "totalstars" }, outputs: { rate: "rate" }, viewQueries: [{ propertyName: "mainElement", first: true, predicate: ["starMain"], descendants: true, static: true }], ngImport: i0, template: "<div #starMain>\n</div>", styles: [":root{--checkedColor: gold;--unCheckedColor: gray;--size: 24px;--halfWidth: 10px;--halfMargin: -20px}.star{cursor:pointer;color:var(--unCheckedColor);font-size:var(--size);width:var(--size);display:inline-block}.star:last-child{margin-right:0}.star:before{content:\"\\2605\"}.star.on{color:var(--checkedColor)}.star.half:after{content:\"\\2605\";color:var(--checkedColor);position:absolute;margin-left:var(--halfMargin);width:var(--halfWidth);overflow:hidden}\n"], encapsulation: i0.ViewEncapsulation.ShadowDom });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StarRatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'star-rating', encapsulation: ViewEncapsulation.ShadowDom, template: "<div #starMain>\n</div>", styles: [":root{--checkedColor: gold;--unCheckedColor: gray;--size: 24px;--halfWidth: 10px;--halfMargin: -20px}.star{cursor:pointer;color:var(--unCheckedColor);font-size:var(--size);width:var(--size);display:inline-block}.star:last-child{margin-right:0}.star:before{content:\"\\2605\"}.star.on{color:var(--checkedColor)}.star.half:after{content:\"\\2605\";color:var(--checkedColor);position:absolute;margin-left:var(--halfMargin);width:var(--halfWidth);overflow:hidden}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { mainElement: [{
                type: ViewChild,
                args: ['starMain', { static: true }]
            }], rate: [{
                type: Output
            }], checkedcolor: [{
                type: Input,
                args: [StarRatingComponent.INP_CHECKED_COLOR]
            }], uncheckedcolor: [{
                type: Input,
                args: [StarRatingComponent.INP_UNCHECKED_COLOR]
            }], value: [{
                type: Input,
                args: [StarRatingComponent.INP_VALUE]
            }], size: [{
                type: Input,
                args: [StarRatingComponent.INP_SIZE]
            }], readonly: [{
                type: Input,
                args: [StarRatingComponent.INP_READONLY]
            }], totalstars: [{
                type: Input,
                args: [StarRatingComponent.INP_TOTALSTARS]
            }] } });

class RatingModule {
    ngDoBootstrap() { }
}
RatingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: RatingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RatingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: RatingModule, declarations: [RatingComponent,
        StarRatingComponent], imports: [FormsModule,
        CommonModule], exports: [StarRatingComponent] });
RatingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: RatingModule, imports: [FormsModule,
        CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: RatingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        CommonModule
                    ],
                    declarations: [
                        RatingComponent,
                        StarRatingComponent
                    ],
                    exports: [StarRatingComponent]
                }]
        }] });

/*
 * Public API Surface of rating
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RatingModule, StarRatingComponent };
//# sourceMappingURL=ng-starrating.mjs.map
