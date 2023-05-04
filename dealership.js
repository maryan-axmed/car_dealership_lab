
// dealership object with: name, number of cars and list of stock
// which should be autowired to 'empty' for now.

const Dealership = function(name, maxNumberOfCars, currentStock){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.currentStock = [];
}

// 1. count the number of cars in stock
Dealership.prototype.getStock = function(){
    return this.currentStock.length;
}

// 2. add car to stock of dealership
Dealership.prototype.addCar = function(carToAdd){
    this.currentStock.push(carToAdd);
}
// 3. return an array of the manufacturer of each car
Dealership.prototype.returnManufacturer = function(carDealership){
    
}

//4. find all the cars from a given manufatuer

//5. find the total value of all the cars in stock

module.exports = {Dealership};


