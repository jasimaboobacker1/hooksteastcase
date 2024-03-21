import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
 
})
export class ParentComponent {

  books: string[] = [
    'To Kill a Mockingbird',
    'The Great Gatsby',
    '1984'
  ];
  newBookTitle: string = '';

  addBook() {
    if (this.newBookTitle.trim() !== '') {
      this.books.push(this.newBookTitle);
      this.newBookTitle = '';
    }
  }

}