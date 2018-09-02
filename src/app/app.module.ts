import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module'; 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar'; 
import { SplashScreen } from '@ionic-native/splash-screen';
/* 검색 부분 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* 탭 페이지 */
import { ItemonePage } from '../pages/itemone/itemone'
import { ItemtwoPage } from '../pages/itemtwo/itemtwo'
import { ItemthreePage } from '../pages/itemthree/itemthree'


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ItemonePage,
    ItemtwoPage,
    ItemthreePage
  ],
  imports: [
    LoginPageModule,
    BrowserModule,
    BrowserAnimationsModule, //검색 부분 모듈 추가
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ItemonePage,
    ItemtwoPage,
    ItemthreePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
