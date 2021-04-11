import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { LogoComponent } from './components/logo/logo.component';
import { SectionOneComponent } from './components/SectionOne/section-one/section-one.component';
import { LeftsideComponent } from './components/SectionOne/leftside/leftside.component';
import { RightsideComponent } from './components/SectionOne/rightside/rightside.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
