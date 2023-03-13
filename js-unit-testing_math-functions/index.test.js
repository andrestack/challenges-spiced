import {add} from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add() should add the values inputed", () =>{
    const result = add(2,3);
    expect(result).toBe(5);
})

test("add() returns a negative value if the greater argument is negative", () =>{
    const result = add(2,-3);
    expect(result).toBeLessThan(0);
})

test("add() returns a value close to 0.3", () =>{
    const result = add(0.1,0.2);
    expect(result).toBeCloseTo(0.3);
})


test("subtract() return the subtraction of a minus b", () => {
    const result = subtract(15,5);
    expect(result).toBe(10);
})
test("subtract() return the subtraction of a minus b", () => {
    const result = subtract(5,15);
    expect(result).toBeLessThan(0);
})



test("multiply() returns the multiplied parameters", () => {
    const result = multiply(2,4);
    expect(result).toBe(8)
})

test("multiply() returns the multiplied parameters", () => {
    const result = multiply(-2,4);
    expect(result).toBeLessThan(0)
})

test("multiply() returns the multiplied parameters", () => {
    const result = multiply(2,-4);
    expect(result).toBeLessThan(0)
})

test("multiply() returns the multiplied parameters", () => {
    const result = multiply(-2,-4);
    expect(result).toBeGreaterThan(0)
})

test("divide() divides a by b", () => {
    const result = divide(9,3);
    expect(result).toBe(3);
})
test("divide() divides a by b", () => {
    const result = divide(9,0);
    expect(result).toBe("You should not do this!");
})



