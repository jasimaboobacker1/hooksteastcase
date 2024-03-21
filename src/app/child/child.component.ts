import { Component,OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,ChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  inputs:['books']
})
export class ChildComponent implements OnChanges {
  books:any;
  

  ngOnChanges(){
    console.log("the book property changed");
    
  }


}