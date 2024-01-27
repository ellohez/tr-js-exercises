// TODO: import all the functions in exercise4.js
import { 
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
    test("returns the sum of just numbers that are multiples of 3 or 5", () => {
        expect(sumMultiples([30, 2, 4, 7, 15, 25, 8])).toBe(70);
        expect(sumMultiples([7, 18, 297, 64, 1, 53])).toBe(315);  
    });

    test("numbers that are multiples of both 3 and 5 are only summed once", () => {
        expect(sumMultiples([1, 88, 30, 62, 15, 90, 65])).toBe(200);
    })

    test("returns zero if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([88, 2, 4, 64, 7])).toBe(0);
    });
});