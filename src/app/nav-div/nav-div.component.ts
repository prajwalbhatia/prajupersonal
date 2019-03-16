import { Component, OnInit } from '@angular/core';
import { DivShow } from '../divShow.service';

@Component({
  selector: 'app-nav-div',
  templateUrl: './nav-div.component.html',
  styleUrls: ['./nav-div.component.css']
})
export class NavDivComponent implements OnInit {
  showDiv = false;
  menuList = ["Home" , "Experience" , "Projects" , "Education" , "Get In Touch"];
  
  constructor(public divShow : DivShow) { }

  
    
  ngOnInit() {
    this.divShow.newSubject
    .subscribe((data) => {
      this.showDiv = data;
      
    });
  }

  

  
}
