import {Triangle} from "../kt5";
import {Rectangle} from "../kt5";
import {Circle} from "../kt5";

test('triangle', ()=>{
    let t1:Triangle = new Triangle(5, 4);
    expect (t1.calculateArea()).toBe(10);
});

test('rectangle', ()=>{
    let r1:Rectangle = new Rectangle(5, 4);
    expect (r1.calculateArea()).toBe(20);
});

test('circle', ()=>{
    let c1:Circle = new Circle(5);
    expect (c1.calculateArea()).toBeCloseTo(78.53, 1);
});
