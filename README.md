# ngx-carouselin  --> on early development

A lightweight carousel option for angular 2+

#Usage 

Include CarouselModule in your app module:
```javascript
import { NgxCarouselinModule } from 'ngx-carouselin';

@NgModule({
  imports: [
    NgxCarouselinModule
  ],
})
export class AppModule { }
```

Use it on a component template by passing currentSlide option

```html
<ngx-carouselin
  [currentSlide]="selectedSlide">
  <ngx-carousel-item *ngFor="let item of items">
      <-- content-->
  </ngx-carousel-item>
</ngx-carouselin>
