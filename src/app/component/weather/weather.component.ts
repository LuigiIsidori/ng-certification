import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input() zipCode:string;
    @Output() removeEvent = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    closeBox(){
        this.removeEvent.emit();
    }
}
