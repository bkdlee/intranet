import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import * as moment from 'moment-timezone';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public greeting: string;
	public timelist: any[];
	public asset_track_website: any[];
	public text_time: string;

	constructor() { }

	ngOnInit() {
		let now 	= new Date();
		let hour 	= now.getHours();
		let min 	= now.getMinutes();
		this.greeting = this.getGreeting(hour);
		this.text_time = this.getRoughTime(hour, min);

		// show Global Time.
		this.timelist = this.getGlobalTime();
		setInterval(()=>{
			this.timelist = this.getGlobalTime()
		}, 1000);
		this.asset_track_website = this.getAssetTrackWebiste();
	}

	private getAssetTrackWebiste(){
		let website: any[];
		website = [
			{"name": "Fonterra Brands (Anchor)","url":"http://www.assettrack.co.nz/anchor/"},
			{"name": "Quality Bakers","url": "http://www.assettrack.co.nz/qb/"},
			{"name": "Red Bull", "url": "http://www.assettrack.co.nz/rbnz/"},
			{"name": "Nestle", "url": "http://www.assettrack.co.nz/nestle/"}
		];
		return website;
	}

	private getRoughTime(hour: number, min: number){
		let text_time: string;
		let text_hour: string;
		text_time = "It's ";

		let last_digi = min.toString().split('').pop();
		text_time += this.getRoughTimePrefix( parseInt(last_digi) );
		text_hour = this.getRoughHour(hour, min);
		text_time += this.getRoughMin(min, text_hour);
		return text_time;
	}

	private getRoughMin(min: number, hour: string){
		let text_min: string;
		switch( min ){
			case 0:
			case 1:
			case 2:
			case 58:
			case 59:
				text_min = hour + " 0'clock";
				break;
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				text_min = "five past " + hour;
				break;
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
				text_min ="ten past " + hour;
				break;
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
				text_min = "a quarter past " + hour;
				break;
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
				text_min = "twenty past " + hour;
				break;
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
				text_min = "twenty-five past " + hour;
				break;
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
				text_min = "half past " + hour;
				break;
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
				text_min = "twenty-five to " + hour;
				break;
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
				text_min = "twenty to " + hour;
				break;
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
				text_min = "a quarter to " + hour;
				break;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
				text_min = "ten to " + hour;
				break;
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
				text_min = "five to " + hour;
				break;
		}
		return text_min;
	}

	private getRoughHour(hour: number, min: number){
		let text_h12: number;
		let text_hour = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
		
		text_h12 = hour;
		if (min >= 33){
			text_h12 = text_h12 + 1;
		}
		if ( text_h12 > 12 ){
			text_h12 = text_h12 - 12;
		}

		return text_hour[text_h12];
	}

	private getRoughTimePrefix(last_digi: number){
		let text_time = [];
		text_time[1] = text_time[6] = "just gone ";
		text_time[2] = text_time[7] = "a little after ";
		text_time[3] = text_time[8] = "almost ";
		text_time[4] = text_time[9] = "just before ";
		text_time[5] = text_time[0] = "";

		return text_time[last_digi];
	}

	private getGlobalTime(){

		// use moment
		let today = moment(); // today date
		let timelist: any[];
		timelist = [{
			"name": "Jamaica",
			"time": today.tz("America/Jamaica").format('YYYY-MM-DD HH:mm:ss')
		},{
			"name": "Eastern",
			"time": today.tz("America/New_York").format('YYYY-MM-DD HH:mm:ss')
		},{
			"name": "London",
			"time": today.tz("Europe/London").format('YYYY-MM-DD HH:mm:ss')
		},{
			"name": "Sydney",
			"time": today.tz("Australia/Sydney").format('YYYY-MM-DD HH:mm:ss')
		},{
			"name": "Auckland",
			"time": today.tz("Pacific/Auckland").format('YYYY-MM-DD HH:mm:ss')
		}];
		//this.timelist = timelist;
		return timelist;
	}

	private getGreeting(hour:number){
		let greeting: string;
		if ( hour >= 0 && hour <= 11 ){
			greeting = "Good morning ";
		} else if ( hour >= 12 && hour <= 17 ){
			greeting = "Good afternoon ";
		} else if ( hour >= 18 && hour <= 23 ){
			greeting = "Good evening ";
		} else{
			greeting = " Welcome back ";
		}
		return greeting;
	}

}
