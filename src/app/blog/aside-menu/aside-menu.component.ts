import { Component } from '@angular/core';

@Component({
	selector: 'aside-menu',
	templateUrl: 'aside-menu.component.html'
})
export class AsideMenuComponent {
	toggleSubMenu(e){
		console.log(e);
	}
}