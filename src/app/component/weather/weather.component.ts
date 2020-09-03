import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input() zipCode:String;
    @Output() removeEvent = new EventEmitter<String>();

    constructor() { }

    ngOnInit(): void {
    }

    closeBox(){
        this.removeEvent.emit();
    }
}
