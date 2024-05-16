/*class Punkt {
  private loendur = 0;
    constructor(public x: number, public y: number) {
  }
}*/

class Maatukk{
  x:number[] = [];
  y:number[] = [];
  //constructor(_x:number, _y:number){}

  lisa(_x:number, _y:number){
    this.x.push(_x);
    this.y.push(_y);
  }

  piiriPikkus(){
    let ymbermoot:number = 0;
    for (var i: number = 0; i<this.x.length; i++){
      let dx = this.x[i]-(this.x[i+1]);
      let dy = this.y[i]-(this.y[i+1]);
      ymbermoot += Math.sqrt(dx*dx + dy*dy);
    }
    console.log(ymbermoot);
  }

  /*naaber(maatukk1: Maatukk, maatukk2:Maatukk){
    //kui kaks punkti on samad on naabrid
  }*/
}

/*const punkt1 = new Punkt(1, 2);
const punkt2 = new Punkt(3, 2);
const punkt3 = new Punkt(3, 4);
const punkt4 = new Punkt(1, 4);*/

const maatukk1 = new Maatukk();

maatukk1.lisa(1, 2);
maatukk1.lisa(3, 2);
maatukk1.lisa(3, 4);
maatukk1.lisa(1, 4);

console.log(maatukk1.x);
console.log(maatukk1.y);

console.log(maatukk1.piiriPikkus());
