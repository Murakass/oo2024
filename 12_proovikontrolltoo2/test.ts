import {Jook} from "../yl1";
import {Joogipudel} from "../yl1";
import {Joogivaat} from "../yl1";

/*test('joogiloomine', ()=>{
    let j1:Jook = new Jook("piim", 0.3, 1.02);
    let p1:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, j1)
    expect (p1.kysiMass()).toBeCloseTo(0.86, 2);
    expect (p1.kysiOmaMaksmus()).toBeCloseTo(0.29, 2);
});*/

test("villimine", ()=>{
  let j1:Jook = new Jook("piim", 0.3, 1.02);
  let p1:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, null);
  let p2:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, null);
  let v1:Joogivaat = new Joogivaat (100, 10, j1);
  expect (p1.kysiJook()).toBe(null);
  v1.villiPudel(p1);
  expect (p1.kysiMass()).toBeCloseTo(0.86, 2);
});

test("koikpudelid", ()=>{
  let j1:Jook = new Jook("piim", 0.3, 1.02);
  let p1:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, null);
  let p2:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, null);
  let p3:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, null);
  let p4:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, null);
  let p5:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, null);
  let p6:Joogipudel = new Joogipudel (0.5, "klaas", 0.35, 0.1, null);
  let m:Joogipudel[]=[p1, p2];
  let v1:Joogivaat = new Joogivaat (100, 10, j1);
  v1.villiPudelid(m);
  expect(p1.kysiJook()).toBe(j1);
})
