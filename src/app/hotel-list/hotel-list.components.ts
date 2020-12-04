import { Component } from '@angular/core';

@Component({
    selector : 'app-hotel-list',
    templateUrl : './hotel-list.component.html'
    
})
export class HotelListComponent {
public title : 'Liste hotel';

public hotels : any[]=[{
    id:1,
    nom:'jhon'
}];
}
