import { ChangeDetectorRef, Component, ElementRef, Renderer, Input, ViewChild } from '@angular/core';
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
        this.carouselItems = this.carouselInner.getElementsByClassName('ngx-carouselin-item');
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
        { type: Component, args: [{
                    selector: 'ngx-carouselin',
                    templateUrl: 'ngx-carouselin.component.html'
                },] },
    ];
    /** @nocollapse */
    NgxCarouselinComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    NgxCarouselinComponent.propDecorators = {
        "contentRef": [{ type: ViewChild, args: ['content',] },],
        "carouselMain1": [{ type: ViewChild, args: ['carouselin', { read: ElementRef },] },],
        "carouselInner1": [{ type: ViewChild, args: ['carouselinItems', { read: ElementRef },] },],
        "options": [{ type: Input },],
        "currentSlide": [{ type: Input },],
    };
    return NgxCarouselinComponent;
}());
export { NgxCarouselinComponent };
//# sourceMappingURL=ngx-carouselin.component.js.map