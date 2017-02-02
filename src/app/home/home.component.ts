import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //markers: Observable<Location[]>;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private locationService: LocationService
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
        else {
          window.scrollTo(0,0);
        }
      }
    });
  }

  ngOnInit() { 
    //this.markers = this.locationService.getAllLocations();
  }

  title: string = 'My first angular2-google-maps project';
  lat: number = -21.115141;
  lng: number = 55.536384;
  zoom: number = 10;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  
  markers: marker[] = [
{
    lat : -20.947537546905576,
    lng : 55.58349258274744,
    name : 'CANYON STE SUZANNE',
    label : 'C'
}, {
    lat : -21.1387034944479596,
    lng : 55.44022240675986,
    name : 'CANYON MINI FLEURS JAUNE',
    label : 'C'
}, {
    lat : -21.312974009645174,
    lng : 55.64131088554859,
    name : 'RANDO AQUATIQUE PETIT GALET',
    label : 'C'
}, {
    lat : -21.119111280838748,
    lng : 55.44460907578468,
    name : 'CANYON MINI GOBERT',
    label : 'C'
}, {
    lat : -21.112404373043898,
    lng : 55.4594162106514,
    name : 'CANYON BRAS ROUGE MEDIAN',
    label : 'C'
}, {
    lat : -21.29498176443199,
    lng : 55.64607448875904,
    name : 'CANYON TI CAP',
    label : 'C'
}, {
    lat : -21.12153919178012,
    lng : 55.448567010462284,
    name : 'CANYON GOBERT INTEGRAL',
    label : 'C'
}, {
    lat : -21.118070422653886,
    lng : 55.45473709702492,
    name : 'CANYON BRAS ROUGE INTEGRAL',
    label : 'C'
}, {
    lat : -21.137751351072026,
    lng : 55.443567372858524,
    name : 'CANYON FLEUR JAUNE',
    label : 'C'
}, {
    lat : -21.138596623938003,
    lng : 55.44767685234547,
    name : 'CANYON FLEUR JAUNE INTEGRAL',
    label : 'C'
}, {
    lat : -21.11345715619068,
    lng : 55.56719608604908,
    name : 'CANYON TAKAMAKA',
    label : 'C'
}, {
    lat : -21.089354495321686,
    lng : 55.62358684837818,
    name : 'CANYON DUDU',
    label : 'C'
}, {
    lat : -21.084839190512348,
    lng : 55.62622681260109,
    name : 'CANYON BRAS SEC',
    label : 'C'
}
]

}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	name?: string;
}
