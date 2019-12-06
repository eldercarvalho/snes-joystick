import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  onDirectionalBtnTap(direction) {
    console.log(direction)
  }

  onOptionBtnTap(option) {
    console.log(option)
  }

  onControlBtnTap(control) {
    console.log(control)
  }
}
