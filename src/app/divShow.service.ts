import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable()


export class DivShow{

    public newSubject = new Subject<any>();
    show = false;
    constructor(){}

    getDiv(show){
        this.show = show;   
        this.newSubject.next(show);
    }
}