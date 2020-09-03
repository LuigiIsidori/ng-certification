import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    private zipCode: string;

    @Output() addEvent = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    addClick(){
        this.addEvent.emit(this.zipCode);
    }
}
