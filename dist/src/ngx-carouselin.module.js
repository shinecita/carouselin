import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCarouselinComponent } from './ngx-carouselin/ngx-carouselin.component';
import { NgxCarouselinItemComponent } from './ngx-carouselin-item/ngx-carouselin-item.component';
var NgxCarouselinModule = /** @class */ (function () {
    function NgxCarouselinModule() {
    }
    NgxCarouselinModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
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
export { NgxCarouselinModule };
//# sourceMappingURL=ngx-carouselin.module.js.map