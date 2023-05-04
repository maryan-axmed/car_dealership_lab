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
Dealership.prototype.getAllCarManufacturers = function(carDealership){
    carManufacturers = [];
    const car = new Car();
    for(car of this.currentStock){
        
    }
}

//4. find all the cars from a given manufatuer

//5. find the total value of all the cars in stock

module.exports = Dealership;


