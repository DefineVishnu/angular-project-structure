import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveOnPage2(){
    alert("save on page 2")
  }

  cancellOnPage2(){
    alert("cancell on page 2")
  }
}
