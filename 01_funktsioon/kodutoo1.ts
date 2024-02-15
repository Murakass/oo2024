//https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
//Oddish or Evenish

function oddishOrEvenish(arv:number){
  let summa:number = 0;  
  let eraldatudNumbrid = arv.toString().split('');
  //console.log(eraldatudNumbrid);
  for (let i:number=0; i<eraldatudNumbrid.length; i++){
    let arv2 = parseInt(eraldatudNumbrid[i]);
    //console.log(arv2);
    summa = arv2 + summa;
    //console.log(summa);
  }
  if (summa%2 == 0){
    console.log('Evenish');
  }
  else{
    console.log('Oddish');
  }
}

oddishOrEvenish(699);
