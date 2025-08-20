import sum from './sum.js';

// test("Sum of 2 and 3 should be 5", () =>{
//     expect(sum(2, 3)).toBe(5);
// })

describe("Sum function tests", () =>{
    test("Sum of 2 and 3 should be 5", () =>{
        expect(sum(2, 3)).toBe(5);
    })
    test("Sum of -1 and 1 should be 0", () =>{
        expect(sum(-1, 1)).toBe(0);
    })
    test("Sum of 0 and 0 should be 0", () =>{
        expect(sum(0, 0)).toBe(0);
    })
    test("Sum of -2 and -4 should be -6", () =>{
        expect(sum(-2, -4)).toBe(-6);
    })
})