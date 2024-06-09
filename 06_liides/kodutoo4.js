var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var ring1 = new Circle(5);
var ruut1 = new Rectangle(4, 4);
var risttahukas1 = new Rectangle(5, 10);
console.log("Ring", ring1.calculateArea());
console.log("Ruut", ruut1.calculateArea());
console.log("Risttahukas", risttahukas1.calculateArea());
