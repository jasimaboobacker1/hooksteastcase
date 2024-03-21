import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck {

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
