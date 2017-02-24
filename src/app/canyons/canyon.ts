export interface ICanyon {
  $key?: string;
  $value?: string;
  name: string;
  lat: number;
	lng: number;
  img: string;
  subTitle: string;
  levelId: string;
  level: string;
  price: string;
  desc: string;
  approche: string;
  return: string;
  duration: string;
  rdv: string;
  from: string;
  icon: string;
  
}

export class Canyon implements ICanyon {
  name: string;
  lat: number;
	lng: number;
  img: string;
  subTitle: string;
  levelId: string;
  level: string;
  price: string;
  desc: string;
  approche: string;
  return: string;
  duration: string;
  rdv: string;
  from: string;
  icon: string;
  
  constructor() {} 
  
  clear(){
    this.name = '';
    this.lat = 0;
    this.lng = 0;
    this.img = '';
    this.subTitle = '';
    this.levelId = '';
    this.level = '';
    this.price = '';
    this.desc = '';
    this.approche = '';
    this.return = '';
    this.duration = '';
    this.rdv = '';
    this.from = '';  
  }
}

