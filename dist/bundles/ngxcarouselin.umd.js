(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.ngxcarouselin = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * Neverending Carousel
 */
var NgxCarouselinComponent = /** @class */ (function () {
    function NgxCarouselinComponent(ChangeDetectorRef, el, renderer) {
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.el = el;
        this.renderer = renderer;
        this.contentIsStale = true;
    }
    NgxCarouselinComponent.prototype.ngOnInit = function () {
        this.carouselMain = this.carouselMain1.nativeElement;
        this.carouselInner = this.carouselInner1.nativeElement;
        this.carouselItems = this.carouselInner.getElementsByClassName('gss-carousel-item');
    };
    NgxCarouselinComponent.prototype.ngOnChanges = function (changes) {
        if (this.currentSlide !== undefined && !changes.currentSlide.isFirstChange()) {
            this.move();
            this.setFade();
        }
    };
    NgxCarouselinComponent.prototype.ngAfterViewInit = function () {
        this.itemWidth = this.carouselItems[0].clientWidth + 4;
        this.center = Math.floor(this.carouselItems.length / 2);
        this.setLayout();
        this.move();
    };
    NgxCarouselinComponent.prototype.setStyle = function (el, prop, val) {
        this.renderer.setElementStyle(el, prop, val);
    };
    NgxCarouselinComponent.prototype.setFade = function () {
        var lastSlide = (this.currentSlide + this.center) % this.carouselItems.length;
        var firstSlide = (this.currentSlide + this.center + 1) % this.carouselItems.length;
        this.renderer.setElementClass(this.carouselItems[lastSlide], 'faded', true);
        this.renderer.setElementClass(this.carouselItems[firstSlide], 'faded', true);
    };
    NgxCarouselinComponent.prototype.setLayout = function () {
        // check if its even and center using item element center
        if (this.carouselItems.length % 2 === 0) {
            var itemCenter = (this.itemWidth / 2);
            this.renderer.setElementStyle(this.carouselMain, 'left', "-" + itemCenter + "px");
        }
    };
    NgxCarouselinComponent.prototype.move = function () {
        var moveSteps = this.currentSlide - this.center;
        if (moveSteps < 0) {
            this.moveToRight(Math.abs(moveSteps));
        }
        else if (moveSteps > 0) {
            this.moveToLeft(Math.abs(moveSteps));
        }
        else {
            this.moveToLeft(this.carouselItems.length);
        }
    };
    /**
     * Move the Carousel to the right a
     * @param position : number of places to move
     */
    /**
       * Move the Carousel to the right a
       * @param position : number of places to move
       */
    NgxCarouselinComponent.prototype.moveToRight = /**
       * Move the Carousel to the right a
       * @param position : number of places to move
       */
    function (position) {
        var moveUnit = this.itemWidth * position;
        for (var i = 0; i < this.carouselItems.length; i++) {
            if (i === (this.carouselItems.length - position)) {
                moveUnit = -(this.itemWidth * (this.carouselItems.length - position));
            }
            this.transform(i, moveUnit);
        }
    };
    /**
     * Move the Carousel to the left a
     * @param  position : number places to move
     */
    /**
       * Move the Carousel to the left a
       * @param  position : number places to move
       */
    NgxCarouselinComponent.prototype.moveToLeft = /**
       * Move the Carousel to the left a
       * @param  position : number places to move
       */
    function (position) {
        for (var i = 0; i < this.carouselItems.length; i++) {
            var moveUnit = -(this.itemWidth * position);
            if ((i - position) < 0) {
                moveUnit = (this.itemWidth * (this.carouselItems.length - position));
            }
            this.transform(i, moveUnit);
        }
    };
    NgxCarouselinComponent.prototype.transform = function (index, moveUnit) {
        var _this = this;
        this.setStyle(this.carouselItems[index], 'transform', "translate3d(" + moveUnit + "px, 0, 0)");
        setTimeout(function () {
            _this.removeClass();
        }, 600);
    };
    NgxCarouselinComponent.prototype.removeClass = function () {
        for (var i = 0; i < this.carouselItems.length; i++) {
            this.renderer.setElementClass(this.carouselItems[i], 'faded', false);
        }
    };
    NgxCarouselinComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-carouselin',
                    templateUrl: 'ngx-carouselin.component.html'
                },] },
    ];
    /** @nocollapse */
    NgxCarouselinComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef, },
        { type: core.ElementRef, },
        { type: core.Renderer, },
    ]; };
    NgxCarouselinComponent.propDecorators = {
        "contentRef": [{ type: core.ViewChild, args: ['content',] },],
        "carouselMain1": [{ type: core.ViewChild, args: ['carouselin', { read: core.ElementRef },] },],
        "carouselInner1": [{ type: core.ViewChild, args: ['carouselinItems', { read: core.ElementRef },] },],
        "options": [{ type: core.Input },],
        "currentSlide": [{ type: core.Input },],
    };
    return NgxCarouselinComponent;
}());

var NgxCarouselinItemComponent = /** @class */ (function () {
    function NgxCarouselinItemComponent() {
    }
    NgxCarouselinItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-carouselin-item',
                    templateUrl: './ngx-carouselin-item.component.html'
                },] },
    ];
    /** @nocollapse */
    NgxCarouselinItemComponent.ctorParameters = function () { return []; };
    return NgxCarouselinItemComponent;
}());

var NgxCarouselinModule = /** @class */ (function () {
    function NgxCarouselinModule() {
    }
    NgxCarouselinModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [
                        NgxCarouselinComponent,
                        NgxCarouselinItemComponent
                    ],
                    declarations: [
                        NgxCarouselinComponent,
                        NgxCarouselinItemComponent
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    NgxCarouselinModule.ctorParameters = function () { return []; };
    return NgxCarouselinModule;
}());

exports.NgxCarouselinModule = NgxCarouselinModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngxcarouselin.umd.js.map
