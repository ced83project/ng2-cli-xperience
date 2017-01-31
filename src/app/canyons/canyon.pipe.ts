import {Injectable, Pipe, PipeTransform} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Canyon } from './canyon';

@Pipe({
  name: 'canyonLevelFilter'
})
@Injectable()
export class CanyonLevelFilter implements PipeTransform {
  
  transform(canyons: any[], args: any[]): any {
    if (canyons) {
      return canyons.filter(canyon => canyon.levelId.indexOf(args[0]) !== -1);
    }
  }

}