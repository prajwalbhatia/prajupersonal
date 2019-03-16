import { Component, OnInit } from '@angular/core';
import { DivShow } from '../divShow.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  show:any= false;
  constructor(private divShow : DivShow) { }

  ngOnInit() {
    
  }
  onShow() : void
  {
        this.show = !this.show;
      this.divShow.getDiv(this.show);
      
  }
}
