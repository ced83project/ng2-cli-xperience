import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Canyon } from './canyon';
import { CanyonService } from './canyon.service';

@Component({
  selector: 'app-canyons',
  templateUrl: './canyons.component.html',
  styleUrls: ['./canyons.component.less']
})
export class CanyonsComponent implements OnInit {


  canyons: Observable<Canyon[]>;
  selectedCanyon: Canyon;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private canyonService: CanyonService,
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
  
  ngOnInit(): void {
    this.canyons = this.canyonService.getAllCanyons();
  }

  onSelect(canyon: Canyon): void {
    this.selectedCanyon = canyon;
  }

  gotoDetail(): void {
    this.router.navigate(['/canyon', this.selectedCanyon.id]);
  }


}
