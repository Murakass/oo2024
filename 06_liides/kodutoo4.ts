interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Triangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return (this.width * this.height) / 2;
  }
}

export{
  
}

const ring1 = new Circle(5);
const ruut1 = new Rectangle(4, 4);
const risttahukas1 = new Rectangle(5, 10);
const kolmnurk1 = new Triangle(4, 5);

console.log("Ring", ring1.calculateArea());
console.log("Ruut", ruut1.calculateArea());
console.log("Risttahukas", risttahukas1.calculateArea());
console.log("Kolmnurk", kolmnurk1.calculateArea());
