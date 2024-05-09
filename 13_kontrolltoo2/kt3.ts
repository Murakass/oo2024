class Toiduaine{
  constructor(
    protected nimetus:string,
    protected valgud:number, 
    protected rasvad:number,
    protected sysivesikud: number
  ){
    this.errorMsg();
  }

  getNimetus(){return this.nimetus}

  getRasvad():number{
    return this.rasvad;
  }

  getValgud():number{
    return this.valgud;
  }

  getSysivesikud():number{
    return this.sysivesikud;
  }

  errorMsg(){
    if (this.valgud + this.rasvad + this.sysivesikud > 1){
      throw new Error ('too many');
    }
  }
}

class Toidukomponent{
  constructor(
     protected kogus: number,
     protected toiduaine: Toiduaine
  ){}

  getNimetus(){return this.toiduaine.getNimetus()}

  getKogus(){return this.kogus}

  getRasvakogus(){
    return this.kogus * this.toiduaine.getRasvad();
  }

  getSysivesikud(){
    return this.kogus * this.toiduaine.getValgud();
  }

  getValgud(){
    return this.kogus * this.toiduaine.getSysivesikud();
  }
}

class Toit{
  constructor(
    protected kogus: number,
    protected nimetus: string,
    protected toidukomponendid: Toidukomponent[] = []
  ){}

  getRasvakogus(){
    let rasvakogus:number = 0;
    for (let i in this.toidukomponendid){
      rasvakogus += this.toidukomponendid[i].getRasvakogus();
    }
    return ('rasvad ' + rasvakogus);
  }

  getValgukogus(){
    let valgud:number = 0;
    for (let i in this.toidukomponendid){
      valgud += this.toidukomponendid[i].getValgud();
    }
    return ('valgud ' + valgud);
  }

  getSysivesikudkogus(){
    let sysivesikud:number = 0;
    for (let i in this.toidukomponendid){
      sysivesikud += this.toidukomponendid[i].getSysivesikud();
    }
    return ('sysivesikud ' + sysivesikud);
  }

  getKomponendid(){
    for (let i in this.toidukomponendid){
      console.log(this.toidukomponendid[i].getNimetus() + " " + this.toidukomponendid[i].getKogus() + " grammi")
    }
  }

  kokku(){
    let kokku: number = 0;
    for(let i in this.toidukomponendid){
      kokku += this.toidukomponendid[i].getKogus();
    }
    return kokku;
  }

  getUusKogus(asi:number){
    this.kogus = asi;
    let protsent: number = 0;
    let uusKogus: number = 0;
    for (let i in this.toidukomponendid){
      protsent = this.toidukomponendid[i].getKogus() / this.kokku();
      console.log (protsent * this.kogus);
    }
  }
}

let kartul = new Toiduaine('kartul', 0.0205, 0.0009, 0.16);
let chorizo = new Toiduaine('chorizo', 0.201, 0.251, 0.034);
let hapukoor = new Toiduaine('hapukoor', 0.033, 0.215, 0.038);
let khunnik = new Toidukomponent(100, kartul);
let chunnik = new Toidukomponent(50, chorizo);
let hhunnik = new Toidukomponent(80, hapukoor);

console.log(kartul);
console.log(khunnik.getRasvakogus());
console.log(chunnik.getRasvakogus());
console.log(hhunnik.getRasvakogus());

let kartulisalat = new Toit(1000, 'kartulisalat', [khunnik, chunnik, hhunnik]);
console.log(kartulisalat);
console.log(kartulisalat.getRasvakogus());
console.log(kartulisalat.getSysivesikudkogus());
console.log(kartulisalat.getValgukogus());
kartulisalat.getKomponendid();

kartulisalat.getUusKogus(5000);
