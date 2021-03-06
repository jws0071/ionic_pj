import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
/* 탭 페이지 부분 */
import { ItemonePage } from '../itemone/itemone'
import { ItemtwoPage } from '../itemtwo/itemtwo'
import { ItemthreePage } from '../itemthree/itemthree'


import { trigger, style, state, transition, animate  } from '@angular/core'  // 검색부분 Import



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations:[
    trigger('mysearchbar', [
        state('visible', style({
          opacity: 1
        })),
        state('invisible', style({
          opacity: 0
        })),
        transition('invisible => visible', [
          style({transform: 'translateX(100%)', opacity:'0'}),
          animate('700ms ease-out')
        ]),
        transition('visible => invisible', [
            animate('700ms ease-in', style({transform: 'translateX(100%)', opacity:'0'}))
        ])
      ])
  ]
})
export class HomePage {
  visibleState = 'invisible';

	tab1Root = ItemonePage;
  tab2Root = ItemtwoPage;
  tab3Root = ItemthreePage;

  constructor(public navCtrl: NavController) {
  }
  toggleVisible(){
    this.visibleState = (this.visibleState == 'visible') ? 'invisible':'visible';
  }
}
