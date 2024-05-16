class Jook{
  constructor(
    public nimetus: string, 
    public omahind: number, 
    public tihedus: number
  ){}

  kysiLiitriOmaHind(){
    return this.omahind;
  }

  kysiTihedus(){
    return this.tihedus;
  }
}

class Joogipudel{
  constructor(
    protected maht: number,
    protected pudelityyp: string,
    protected mass: number,
    protected taara: number,
    protected jook: Jook
  ){}

  kysiJook(){
    return this.jook;
  }

  kysiMaht(){
    return this.maht;
  }

  muudaJook(j:Joogivaat){
    this.jook = j.kysiJook();
  }

  kysiMass(){
    if (this.jook != null){
      return ((this.maht*this.jook.kysiTihedus())+this.mass);
    }
    if(this.jook == null) {
      return this.mass;
    }
  }

  kysiOmaMaksmus(){
    if(this.jook != null){
      return this.maht*this.jook.kysiLiitriOmaHind()+this.taara;
    }
    else{
      return this.taara;
    }
  }
}

class Joogivaat{
  constructor(
    protected ruumala: number,
    protected kogus: number,
    public jook: Jook
  ){}

  kysiJook(){
    return this.jook;
  }

  villiPudel(p:Joogipudel){
    if(p.kysiJook() == null){
      if(p.kysiMaht() <= this.kogus){
        p.muudaJook(this);
        this.kogus -= p.kysiMaht();
      }
      if(p.kysiMaht() > this.kogus){
        return("vaadis pole piisavalt jooki");
      }
    }
    if(p.kysiJook() != null){
      return("pudelis juba on jook");
    }
  }

  villiPudelid(pudelid:Joogipudel[]){
    for (let pudel of pudelid){
      this.villiPudel(pudel);
    }
  }
}

class Kast{
  constructor(
  protected kastityyp: string,
  protected kastihind: number, 
  protected kastimass: number,
  protected pesad: number,
  protected pudelid: number[]
  ){}
  
  lisaPudel(p:Joogipudel[]){
    for (let pudel of p){
      if (this.pesad-pudelid.length())
    }
  }
}

export{
  Jook,
  Joogipudel,
  Joogivaat
}
