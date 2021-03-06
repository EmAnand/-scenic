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
import { SharedModuleModule } from './shared-module/shared-module.module';
import { checkEmailValidator } from './shared-module/Validators/checkEmailValidators.Diractive';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { MypipePipe } from './mypipe.pipe';
import { TestComponent } from './test/test.component';

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
    PlaceComponent,
    checkEmailValidator,
    EnquiryformComponent,
    MypipePipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
