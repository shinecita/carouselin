import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  SimpleChanges
} from '@angular/core';

/**
 * Neverending Carousel 
 * // TODO add comments here
 */
@Component({
  selector: 'ngx-carouselin',
  templateUrl: 'ngx-carouselin.component.html'
})

export class NgxCarouselinComponent implements AfterViewInit, OnInit, OnChanges {

  @ViewChild('content') public contentRef: ElementRef;

  @ViewChild('carouselin', { read: ElementRef })
  private carouselMain1: ElementRef;

  @ViewChild('carouselinItems', { read: ElementRef })
  private carouselInner1: ElementRef;

  @Input() options: any;
  @Input() currentSlide: number;


  private carousel: any;
  private carouselMain: any;
  private carouselInner: any;
  private carouselItems: any;
  private center: number;
  private itemWidth: number;
  private contentIsStale: boolean;


  constructor(
    private ChangeDetectorRef: ChangeDetectorRef,
    private el: ElementRef,
    private renderer: Renderer
  ) {
    this.contentIsStale = true;
  }

  ngOnInit() {
    this.carouselMain = this.carouselMain1.nativeElement;
    this.carouselInner = this.carouselInner1.nativeElement;
    this.carouselItems = this.carouselInner.getElementsByClassName('ngx-carouselin-item');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.currentSlide !== undefined && !changes.currentSlide.isFirstChange()) {
        this.move();
        this.setFade();
      }
  }

  ngAfterViewInit() {
    this.itemWidth = this.carouselItems[0].clientWidth + 4;
    this.center = Math.floor(this.carouselItems.length / 2);
    this.setLayout();
    this.move();
  }

  private setStyle(el: any, prop: any, val: any): void {
    this.renderer.setElementStyle(el, prop, val);
  }

  private setFade() {
    const lastSlide = (this.currentSlide + this.center) % this.carouselItems.length;
    const firstSlide = (this.currentSlide + this.center + 1) % this.carouselItems.length;

    this.renderer.setElementClass(this.carouselItems[lastSlide], 'faded', true);
    this.renderer.setElementClass(this.carouselItems[firstSlide], 'faded', true);
  }

  private setLayout(): void {
    // check if its even and center using item element center
    if (this.carouselItems.length % 2 === 0) {
      const itemCenter = (this.itemWidth / 2);
      this.renderer.setElementStyle(this.carouselMain, 'left', `-${itemCenter}px`);
    }
  }

  private move() {
    const moveSteps = this.currentSlide - this.center;
    if (moveSteps < 0) {
        this.moveToRight(Math.abs(moveSteps));
    } else if (moveSteps > 0) {
        this.moveToLeft(Math.abs(moveSteps));
    } else {
       this.moveToLeft(this.carouselItems.length);
    }
  }

  /**
   * Move the Carousel to the right a
   * @param position : number of places to move
   */
  public moveToRight(position: number): void {
    let moveUnit = this.itemWidth * position;
    for (let i = 0; i < this.carouselItems.length; i++) {
      if (i === (this.carouselItems.length - position)) {
        moveUnit = -(this.itemWidth * (this.carouselItems.length - position));
      }
      this.transform(i, moveUnit);
    }
  }

  /**
   * Move the Carousel to the left a
   * @param  position : number places to move
   */
  public moveToLeft(position: number): void {
    for (let i = 0; i < this.carouselItems.length; i++) {
      let moveUnit = -(this.itemWidth * position);
      if ((i - position) < 0) {
        moveUnit = (this.itemWidth * (this.carouselItems.length - position));
      }
      this.transform(i, moveUnit);
    }
  }

  private transform(index: number, moveUnit: number): void {
    this.setStyle(this.carouselItems[index], 'transform', `translate3d(${moveUnit}px, 0, 0)`);
    setTimeout(() => {
      this.removeClass();
    }, 600);
  }

  private removeClass(): void {
    for (let i = 0; i < this.carouselItems.length; i++) {
      this.renderer.setElementClass(this.carouselItems[i], 'faded', false);
    }
  }
}
