import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

import { ICanyon, Canyon } from './canyon';
import { CanyonService } from './canyon.service';

@Component({
  selector: 'app-canyons',
  templateUrl: './canyons.component.html',
  styleUrls: ['./canyons.component.less']
})
export class CanyonsComponent implements OnInit {

  isLoggedIn: boolean = false;
  canyons: Observable<ICanyon[]>;
  selectedCanyon: ICanyon;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private canyonService: CanyonService,
    public af: AngularFire
  ) {
  
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.isLoggedIn = true;
      }
      else {
        // user not logged in
        this.isLoggedIn = false;
      }
    });
   
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

  onCreateCanyon(canyon: Canyon): void {
    this.canyonService.createCanyon(canyon);
  }

  onUpdateCanyon(canyon: ICanyon): void {
    this.canyonService.update(canyon);
  }

  onDeleteCanyon(canyon: ICanyon): void {
    this.canyonService.remove(canyon.$key);
  }

  onSelectCanyon(canyon: ICanyon): void {
    this.selectedCanyon = canyon;
  }

  addCanyon(): void {
    this.router.navigate(['/canyon']);
  }
  
}
