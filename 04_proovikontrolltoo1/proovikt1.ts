class Kolmnurk{
  x:number[] = [];
  y:number[] = [];
  kyljepikkused: number[] = [];
  
/*  punktiPaarid(){
    let v= [];
    for(var i: number = 1; i<this.x.length; i++){
      v.push([i, i-1]);
    }
    v.push([this.x.length, 0]);
    return v;
  }

  ymbermoot(){

  }*/

  lisa(_x: number, _y:number){
    this.x.push(_x);
    this.y.push(_y);
    let ymbermoot:number = 0;
    var kyljepikkus:number = 0;

    if (this.x.length > 2){
      for(var i: number = 0; i<this.x.length; i++){

        if(i == this.x.length-1){
          let dx = this.x[0]-this.x[i];
          let dy = this.y[0]-this.y[i];
          kyljepikkus = Math.sqrt(dx*dx + dy*dy);
        }
        else{
          let dx = this.x[i]-(this.x[i+1]);
          let dy = this.y[i]-(this.y[i+1]);
          kyljepikkus = Math.sqrt(dx*dx + dy*dy);
        }

        ymbermoot = ymbermoot + kyljepikkus;
        this.kyljepikkused.push(kyljepikkus);
      }

      console.log(this.kyljepikkused);
      console.log(ymbermoot);
    }
  }


}

let kolmnurk = new Kolmnurk();

kolmnurk.lisa(0, 0);
kolmnurk.lisa(0, 1);
kolmnurk.lisa(0, 2);
