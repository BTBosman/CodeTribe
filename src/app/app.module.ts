import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';
import { ConfimationComponent } from './confimation/confimation.component';
import { RoomsComponent } from './rooms/rooms.component';

const appRoutes: Routes = [
  {path: 'bookings', component: BookingsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'confirmation', component:ConfimationComponent},
  {path: 'rooms', component:RoomsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    HomeComponent,
    ConfimationComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
