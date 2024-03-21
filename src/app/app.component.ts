import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, RouterOutlet,RouterLink,RouterLinkActive,NgcontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'testcase-lyfecyclehooks';
 



}
