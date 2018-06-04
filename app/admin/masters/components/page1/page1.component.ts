import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveOnPage1(){
    alert("save on page 1")
  }

  cancellOnPage1(){
    alert("cancell on page 1")
  }
}
