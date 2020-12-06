import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector : 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls : ['./star-rating.component.css']

})

export class StartRatingComponent implements OnChanges{

    public starWidth:number;

    @Input()
    public rating: number= 2;

    ngOnChanges(){
      this.starWidth = this.rating * 125/5;
    }

    @Output()
    public starRatingClicked:EventEmitter<string>= new EventEmitter<string>();

    public sendRating(): void{
      this.starRatingClicked.emit(`La note est de ${this.rating}`)
    }

}