import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent {
  person = {
    name: '',
    email: ''
  };

  savePerson() {
    console.log('Person saved:', this.person);
    alert(`Saved: ${this.person.name} (${this.person.email})`);
  }
}
