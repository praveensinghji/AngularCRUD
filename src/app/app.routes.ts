import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"list",component:ReservationListComponent},
    {path:"add",component:ReservationFormComponent},
    {path:"edit/:id", component:ReservationFormComponent},
];
