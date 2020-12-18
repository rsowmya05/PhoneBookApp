import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactService } from './services/contact.service';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { FormsModule } from '@angular/forms';

import { UpdatecontactsComponent } from './updatecontacts/updatecontacts.component'
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
// import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule }  from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';


var myRoutes:Routes=[
  {path:'add',component:AddcontactsComponent},
  {path:'update',component:UpdatecontactsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    
    AddcontactsComponent,
   
    UpdatecontactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
