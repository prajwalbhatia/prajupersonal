import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {Response } from '@angular/http'
import { DivShow } from '../divShow.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  show = false;
  
  articleData : any = []
  constructor(private serverService : ServerService , private divShow : DivShow) { }

  ngOnInit() {

    this.serverService.getArticles()
      .subscribe((response : Response) => {
        const articleData = response.json();
        this.articleData = articleData;
        
      });
      
  }

  onShow() : void
  {
        this.show = !this.show;
      this.divShow.getDiv(this.show);
      
      
  }

}
