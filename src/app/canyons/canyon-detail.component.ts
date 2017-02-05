import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFire } from 'angularfire2';

import { Canyon } from './canyon';
import { CanyonService } from './canyon.service';

@Component({
  selector: 'app-canyon-detail',
  templateUrl: './canyon-detail.component.html',
  styleUrls: ['./canyon-detail.component.less']
})
export class CanyonDetailComponent implements OnInit {

  canyon: Canyon;
  isLoggedIn: boolean = false;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private canyonService: CanyonService,
    private location: Location,
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
    this.route.params
      .switchMap((params: Params) => this.canyonService.getCanyonById(params['id']))
      .subscribe(canyon => this.canyon = canyon);
  }

  goBack(): void {
    this.location.back();
  }
  
  save() {
    this.canyonService.save(this.canyon);
    this.location.back();
  }

}
