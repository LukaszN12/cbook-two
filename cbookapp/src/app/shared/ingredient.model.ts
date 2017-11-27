export class Ingredient{
  // name, amount, unit

 // public id : number;
  public name : string;
  public amount: number;
  public unit: string;

  // nie ma id w konstruktorze
  constructor( name: string, amount: number, unit:string){
   // this.id = id;
    this.name = name;
    this.amount = amount;
    this.unit = unit;
  }
}
