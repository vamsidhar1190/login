import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from "@angular/router";
import { DetailsComponent } from './details/details.component';
import { EmployessComponent } from './employess/employess.component';
import { OwnersComponent } from './owners/owners.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PopupComponent } from './popup/popup.component';


const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'details',component:DetailsComponent,
    children:[
      {
        path:'employess',component:EmployessComponent
      },
      {
        path:'owners',component:OwnersComponent
      },
    ]
  },
  {
    path:'**',component:AppComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    EmployessComponent,
    OwnersComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ModalModule

  ],
  providers: [BsModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
