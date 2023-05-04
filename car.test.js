const { beforeEach } = require("node:test");
const {Car} = require("./car");
let car;

beforeEach(() =>{
    car = new Car("Honda", 1000, "W engine");
})

test('car has price', () =>{
    expected = 1000;
    actual = // this needs to be getting the Car this.price?
    expect(actual).toBe(expected);
});
test('car has manufacturer', () =>{
    expected = "Honda";
    actual = // this needs to be getting the Car this.manufacturer?
    expect(actual).toBe(expected);
});
test('car has engineType', () =>{
    expected = "W engine";
    actual = // this needs to be getting the Car this.engineType?
    expect(actual).toBe(expected);
});
    
