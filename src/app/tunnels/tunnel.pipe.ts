import {Injectable, Pipe, PipeTransform} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Tunnel } from './tunnel';

@Pipe({
  name: 'tunnelLevelFilter'
})
@Injectable()
export class TunnelLevelFilter implements PipeTransform {
  
  transform(tunnels: any[], args: any[]): any {
    if (tunnels) {
      return tunnels.filter(tunnel => tunnel.levelId.indexOf(args[0]) !== -1);
    }
  }

}