/*
function korrutakahega(arv:number){
  return arv*2;
}

console.log(korrutakahega(7))
*/

let KMI:number = 0;

//koostage kehamassiindeksi leidmise funktsioon
function kehamassiindeks(kaal:number, pikkus:number){
  let KMI:number = kaal/(pikkus**2);
  return KMI;
}

function kmihinnang(KMI:number){
  if (KMI<=20) {return 'alakaal'}
  if (KMI>20) {return 'ideaalkaal'}
  if (KMI>26) {return 'ülekaal'}
  if (KMI>30){return 'rasvumine'}
}


console.log(kehamassiindeks(50, 1.8))