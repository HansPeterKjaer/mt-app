import {Directive, ElementRef, Input, HostListener} from '@angular/core';
import {Observable} from 'rxjs/rx';

import {WindowRefService} from 'app/shared/window-ref.service';

@Directive({
    selector: '[stick]'
})
export class StickDirective {

    private topMargin: number = 0;

    constructor(private _element: ElementRef, private _window: WindowRefService) {
        console.log(this._element.nativeElement);
    }

    @HostListener('window:scroll', ['$event'])
    handleScrollEvent(e) {
        var sidebarHeight = this._element.nativeElement.offsetHeight;
        var pageHeight = this._window.nativeWindow.innerHeight - 50;
        var scrollHeight = this._window.nativeWindow.pageYOffset;

        if (sidebarHeight < pageHeight) {
            console.log(pageHeight);
            this._element.nativeElement.style.marginTop = `${scrollHeight}px`;
            return;
        }
        let topMargin = 0;

        if (scrollHeight > (sidebarHeight - pageHeight)){
            console.log("scroll");
            topMargin = scrollHeight - (sidebarHeight - pageHeight)
        }
        if (topMargin < this.topMargin){
            console.log("keep old topmargin");
            topMargin = this.topMargin;
        }
        if (topMargin > scrollHeight){
            console.log("max scrollup");
            topMargin = scrollHeight;
        }
        this.topMargin = topMargin;
        this._element.nativeElement.style.marginTop = `${topMargin}px`;
        console.log(topMargin);
    }
}
// https://github.com/mikkeldamm/angular2-playground/blob/master/app/stick.rx.directive.ts