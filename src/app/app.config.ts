import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: PeopleListComponent },
      { path: 'edit/:id', component: EditPersonComponent }
    ]),
  ]
};
