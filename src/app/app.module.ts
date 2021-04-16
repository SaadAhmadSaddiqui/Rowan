import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { LogoComponent } from './components/logo/logo.component';
import { SectionOneComponent } from './components/homepage/SectionOne/section-one/section-one.component';
import { LeftsideComponent } from './components/homepage/SectionOne/leftside/leftside.component';
import { RightsideComponent } from './components/homepage/SectionOne/rightside/rightside.component';
import { SectionTwoComponent } from './components/homepage/SectionTwo/section-two/section-two.component';
import { CarouselpartComponent } from './components/homepage/SectionTwo/carouselpart/carouselpart.component';
import { SteppartComponent } from './components/homepage/SectionTwo/steppart/steppart.component';
import { SwiperModule } from 'swiper/angular';
import { StepComponent } from './components/homepage/SectionTwo/steppart/step/step.component';
import { SectionThreeComponent } from './components/homepage/SectionThree/section-three/section-three.component';
import { LeftSideComponent } from './components/homepage/SectionThree/left-side/left-side.component';
import { RightSideComponent } from './components/homepage/SectionThree/right-side/right-side.component';
import { SectionFourComponent } from './components/homepage/SectionFour/section-four/section-four.component';
import { ReviewComponent } from './components/homepage/SectionFour/review/review.component';
import { SectionFiveComponent } from './components/homepage/SectionFive/section-five/section-five.component';
import { SectionSixComponent } from './components/homepage/SectionSix/section-six/section-six.component';
import { SectionSevenComponent } from './components/homepage/SectionSeven/section-seven/section-seven.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    NavbarItemComponent,
    LogoComponent,
    SectionOneComponent,
    LeftsideComponent,
    RightsideComponent,
    SectionTwoComponent,
    CarouselpartComponent,
    SteppartComponent,
    StepComponent,
    SectionThreeComponent,
    LeftSideComponent,
    RightSideComponent,
    SectionFourComponent,
    ReviewComponent,
    SectionFiveComponent,
    SectionSixComponent,
    SectionSevenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
