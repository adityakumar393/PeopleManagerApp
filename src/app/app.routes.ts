import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

export const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'edit/:id', component: EditPersonComponent }
];
