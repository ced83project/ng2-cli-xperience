import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Tunnel } from './tunnel';
import { TunnelService } from './tunnel.service';

@Component({
  selector: 'app-tunnels',
  templateUrl: './tunnels.component.html',
  styleUrls: ['./tunnels.component.less']
})
export class TunnelsComponent implements OnInit {

  tunnels: Observable<Tunnel[]>;
  selectedTunnel: Tunnel;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private tunnelService: TunnelService,
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
    this.tunnels = this.tunnelService.getAllTunnels();
  }

  onSelect(tunnel: Tunnel): void {
    this.selectedTunnel = tunnel;
  }

  gotoDetail(): void {
    this.router.navigate(['/tunnel', this.selectedTunnel.id]);
  }


}
