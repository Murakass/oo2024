class Art{
  constructor(protected title:string, protected author:string, protected year:number, protected price:number){}
  getYear(){
    return this.year;
  }
}


const piece1 = new Art('Mona Lisa', 'da Vinci', 1503, 860);
const piece2 = new Art('Starry Night', 'van Gogh', 1886, 100);

let artPieces: Art[] = [];
artPieces.push(piece1);
artPieces.push(piece2);
function getArt(){return artPieces}

function getOldest(){
  let oldest:number = -1;
  for(let artPiece of artPieces){
    if (oldest < artPiece.getYear()){
      oldest = artPiece.getYear();
    }
    return oldest;
  }
}

console.log(getArt());
console.log(getOldest());
