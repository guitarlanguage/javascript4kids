var Car = function (x, y) {

    this.x = x;
    this.y = y;
}


tesla;

Car.prototype.draw = function (car) {

    var carHtml = '<img src="http://nostarch.com/images/car.png">';

    var carElement = $(carHtml);

    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y
    });

    $('body').append(carElement);

};

Car.prototype.moveRight = function () {

    this.x += 5;

    carElement.css({

        left: this.x,
        top: this.y
    });

};

var tesla = new Car(20, 20);

var volkswagen = new Car(600, 45);

tesla.draw();
volkswagen.draw();