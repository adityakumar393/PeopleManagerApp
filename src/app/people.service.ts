import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // sample REST API

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  updatePerson(person: Person): Observable<any> {
    return this.http.put(`${this.apiUrl}/${person.id}`, person);
  }
}
