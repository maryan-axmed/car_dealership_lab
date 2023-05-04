const Car = require("./car");

const Dealership = function(name, maxNumberOfCars){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.currentStock = [];
}

// 1. count the number of cars in stock
Dealership.prototype.stockCount = function(){
    return this.currentStock.length;
}

// 2. add car to stock of dealership
Dealership.prototype.addCarToStock = function(car){
    this.currentStock.push(car);
}
// 3. return an array of the manufacturer of each car
// i need all the cars and then their maufacturers 
// i could loop through all the cars in the current stock
// then get their manufacturers
// then add them to a new array
Dealership.prototype.getCarManufacturers = function(dealership){
    carManufacturers = [];
    car = new Car();
    for(car of dealership.currentStock){
        carManufacturers.push(car.manufacturer);
    }
    return carManufacturers;
}

//4. find all the cars from a given manufatuer
Dealership.prototype.getCarsOfManufacturer = function(manufacturer){
    cars = [];
    for(car of dealership.currentStock){
        cars.push()
    }
}

//5. find the total value of all the cars in stock
Dealership.prototype.valueOfCars = function(){
    carValue = 0;
    const car = new Car(this.manufacturer, this.price, this.engineType);
    for(car of this.currentStock){
        value = car.this.price;
        carValue += value;
    }
    return carValue;
}
module.exports = Dealership;


