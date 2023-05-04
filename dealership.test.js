
const Dealership = require("./dealership");
const Car = require("./car");

let dealership;
let carOne;
let carTwo;

beforeEach(() =>{
    dealership = new Dealership("Autotrader", 100);
    carOne = new Car("Honda", 1000, "W engine");
    carTwo = new Car("Fiat", 5000, "Z engine");

})

describe('dealership properties', () => {
    test('dealership has name', () => {
        expected = "Autotrader";
        actual = dealership.name;
        expect(actual).toBe(expected);
    });

    test('dealership has maximum number of cars', () => {
        expected = 100;
        actual = dealership.maxNumberOfCars;
        expect(actual).toBe(expected);
    });

    test('dealership has stock of cars, which is 0', () => {
        expected = 0;
        actual = dealership.currentStock.length;
        expect(actual).toBe(expected);
    });

});

describe('can add car to the dealership stock', () =>{
    test('adding cars to stock', () =>{
        dealership.currentStock.push(carOne);
        dealership.currentStock.push(carTwo);
        expected = 2;
        actual = dealership.currentStock.length;
        expect(actual).toBe(expected);
    });
});

describe('can get all the car manufacturers', () =>{
    test('can get manufacturers', () =>{
        dealership.currentStock.push(carOne);
        dealership.currentStock.push(carTwo);
        expected = 2;
        actual =  dealership.getCarManufacturers.length;
        expect(actual).toBe(expected);
    });
});

describe('can calculate car value', () =>{
    test.skip('can get value', () =>{
        dealership.currentStock.push(carOne);
        dealership.currentStock.push(carTwo);
        expected = 6000;
        actual =  dealership.valueOfCars;
        expect(actual).toBe(expected);
    });
});