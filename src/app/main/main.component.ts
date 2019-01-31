import { Component, OnInit, Input } from '@angular/core';
import {ServerService} from '../server.service';
import {Response } from '@angular/http'
import {DivShow} from '../divShow.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  show = false;
  data : any = [];
  single : any = ["You loose a oppourtunity?? no worry that was the oppourtunity not your last chance"];
  constructor(private serverService : ServerService , private divShow : DivShow) { 
  }
  ngOnInit(){
    
    
    this.onShow();
    this.serverService.getWritings()
      .subscribe((response : Response)=>{
        const data = response.json();
        this.data = data;
        var i =1;
       
        setInterval(()=>{
            this.single[0] = data[i];
            i++;
            if(i === this.data.length)
            {
              i=1
            }
            
        } ,10000) ;
      });
      
      
  }

 

  

  onShow() : void
  {
          this.show = !this.show;
      this.divShow.getDiv(this.show);
      
  }
        
 }
