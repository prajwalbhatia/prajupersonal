import { Component, OnInit } from '@angular/core';
import { DivShow } from '../divShow.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  show = false;
  constructor(private divShow : DivShow) { }

  ngOnInit() {
    this.onShow();
  }

  onShow() : void
  {
        this.show = !this.show;
      this.divShow.getDiv(this.show);
      
  }
}
