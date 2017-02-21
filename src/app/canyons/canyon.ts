export interface ICanyon {
  //$exists?:();
  $key?: string;
  $value?: string;
  name: string;
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
}

export class Canyon implements ICanyon {
  name: string;
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
  
  constructor() {} 
  
  clear(){
    this.name = '';
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

