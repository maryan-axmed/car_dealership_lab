const { beforeEach } = require("node:test");
const {Dealership} = require("./dealership");
const { describe } = require("yargs");

let dealership;
beforeEach(() =>{
    dealership = new Dealership("Autotrader", 100);
})

describe('dealership properties', () => {
    test('dealership has name', () => {
        expected = "Autotrader";
        actual = // ??
        expect(actual).toBe(expected);
    });

    test('dealership has maximum number of cars', () => {
        expected = "Autotrader";
        actual = // ??
        expect(actual).toBe(expected);
    });

    test('dealership has stock of cars, which is 0', () => {
        expected = "Autotrader";
        actual = // ??
        expect(actual).toBe(expected);
    });

});

// describe('')