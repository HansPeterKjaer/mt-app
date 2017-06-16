import {Directive, ElementRef, Input, HostListener} from '@angular/core';
import {Observable} from 'rxjs/rx';

import {WindowRefService} from 'app/shared/window-ref.service';

@Directive({
    selector: '[stick]'
})

export class StickDirective {
    private topMargin = 0;
    private leftPosition: number;
    private sidebarHeight: number;
    private pageHeight: number;

    constructor(private _element: ElementRef, private _window: WindowRefService) {

    }

    ngOnInit() {
        this.sidebarHeight = (this._element.nativeElement.offsetHeight)<< 0;
        this.pageHeight = (this._window.nativeWindow.innerHeight - 50)<< 0;
        console.log(this.pageHeight);
        console.log(this.sidebarHeight);
    }

    @HostListener('window:scroll', ['$event'])
    handleScrollEvent(e) {
        var scrollHeight = (this._window.nativeWindow.pageYOffset)<< 0;

        if (this.sidebarHeight < this.pageHeight) {
            //this._element.nativeElement.style.marginTop = `${scrollHeight}px`;
            return;
        }
        let topMargin = 0;

        if (scrollHeight > (this.sidebarHeight - this.pageHeight)){
            topMargin = scrollHeight - (this.sidebarHeight - this.pageHeight)
        }
        if (topMargin < this.topMargin){
            topMargin = this.topMargin;
        }
        if (topMargin > scrollHeight){
            topMargin = scrollHeight;
        }
        this.topMargin = topMargin;
        console.log(topMargin);
        this._element.nativeElement.style.marginTop = `${topMargin}px`;
    }
}
// https://github.com/mikkeldamm/angular2-playground/blob/master/app/stick.rx.directive.ts