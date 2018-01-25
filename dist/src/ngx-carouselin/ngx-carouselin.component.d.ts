import { AfterViewInit, ChangeDetectorRef, ElementRef, Renderer, OnInit, OnChanges, SimpleChanges } from '@angular/core';
/**
 * Neverending Carousel
 * // TODO add comments here
 */
export declare class NgxCarouselinComponent implements AfterViewInit, OnInit, OnChanges {
    private ChangeDetectorRef;
    private el;
    private renderer;
    contentRef: ElementRef;
    private carouselMain1;
    private carouselInner1;
    options: any;
    currentSlide: number;
    private carousel;
    private carouselMain;
    private carouselInner;
    private carouselItems;
    private center;
    private itemWidth;
    private contentIsStale;
    constructor(ChangeDetectorRef: ChangeDetectorRef, el: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    private setStyle(el, prop, val);
    private setFade();
    private setLayout();
    private move();
    /**
     * Move the Carousel to the right a
     * @param position : number of places to move
     */
    moveToRight(position: number): void;
    /**
     * Move the Carousel to the left a
     * @param  position : number places to move
     */
    moveToLeft(position: number): void;
    private transform(index, moveUnit);
    private removeClass();
}
