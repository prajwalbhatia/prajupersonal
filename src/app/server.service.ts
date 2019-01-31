import { Injectable } from "@angular/core";
import {Http} from '@angular/http';



@Injectable()
export class ServerService{
    constructor(private http : Http)
    {  }
    getWritings(){
        return this.http.get('https://snapchat-e21ad.firebaseio.com/writings.json');
    }

    getArticles()
    {
        return this.http.get('https://snapchat-e21ad.firebaseio.com/articles.json')
    }
}