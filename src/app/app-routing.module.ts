import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailsParisComponent } from './details-paris/details-paris.component';
import { DetailsThailandComponent } from './details-thailand/details-thailand.component';
import { DomesticDetailsComponent } from './domestic-details/domestic-details.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';

import { HomeComponent } from './home/home.component';
import { InternationaPackageComponent } from './internationa-package/internationa-package.component';
import { InternationalDetailsComponent } from './international-details/international-details.component';
import { PlaceComponent } from './place/place.component';
import { ViewPackageComponent } from './view-package/view-package.component';

const routes: Routes = [
  // {path:'International-package', component:InternationaPackageComponent},
  // {path:'Domestic-package', component: ViewPackageComponent},
  {path: 'contact', component:ContactComponent},
 
 {path:'domestic-details/:id', component:DomesticDetailsComponent},
 {path:'International-details/:id', component:InternationalDetailsComponent},
 {path:'Places/:id', component:PlaceComponent},
 {path:'enquiry', component:EnquiryformComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
