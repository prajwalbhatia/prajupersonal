import { Component, OnInit } from '@angular/core';
import { DivShow } from '../divShow.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  show = false;
  constructor(private divShow : DivShow) { }

  ngOnInit() {
    
  }

  onShow() : void
  {
        this.show = !this.show;
      this.divShow.getDiv(this.show);
  
      
  }

}