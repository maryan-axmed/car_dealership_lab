
const Car = require("./car");
let car;

beforeEach(() =>{
    car = new Car("Honda", 1000, "W engine");
})

test('car has price', () =>{
    expected = 1000;
    actual = car.price;
    expect(actual).toBe(expected);
});

test('car has manufacturer', () =>{
    expected = "Honda";
    actual = car.manufacturer;
    expect(actual).toBe(expected);
});

test('car has engineType', () =>{
    expected = "W engine";
    actual = car.engineType;
    expect(actual).toBe(expected);
});
    
