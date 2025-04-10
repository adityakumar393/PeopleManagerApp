import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { PeopleService, Person } from '../people.service';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  editingPersonId: number | null = null;
  editedPerson: Partial<Person> = {};

  constructor(private personService: PeopleService) {}

  ngOnInit() {
    this.personService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  editPerson(id: number) {
    this.editingPersonId = id;
    const person = this.people.find(p => p.id === id);
    this.editedPerson = { ...person };
  }

  savePerson(id: number) {
    const index = this.people.findIndex(p => p.id === id);
    if (index > -1) {
      this.people[index] = { ...this.people[index], ...this.editedPerson };
    }
    this.editingPersonId = null;
    alert(`Person ${id} updated.`);
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(() => {
      this.people = this.people.filter(p => p.id !== id);
      alert(`Deleted person ${id}`);
    });
  }
}
