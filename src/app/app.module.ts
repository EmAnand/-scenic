import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InternationaPackageComponent } from './internationa-package/internationa-package.component';
import { ViewPackageComponent } from './view-package/view-package.component';

import { DetailsThailandComponent } from './details-thailand/details-thailand.component';
import { DetailsParisComponent } from './details-paris/details-paris.component';
import { DomesticDetailsComponent } from './domestic-details/domestic-details.component';
import { InternationalDetailsComponent } from './international-details/international-details.component';
import { FormsModule } from '@angular/forms';
import { PlaceComponent } from './place/place.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    InternationaPackageComponent,
    ViewPackageComponent,
    
    DetailsThailandComponent,
    DetailsParisComponent,
    DomesticDetailsComponent,
    InternationalDetailsComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
