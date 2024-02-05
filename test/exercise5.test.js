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

describe("isValidDNA", () => {
    test("returns true if the string only contains C, G, T or A", () => {
        expect(isValidDNA("CTGAGTACCTGA")).toBe(true);
        expect(isValidDNA("AACCTGGAGTTA")).toBe(true);
    });
    test("returns false if the string contains neither C, G, T or A", () => {
        expect(isValidDNA("SDEFWPLOU")).toBe(false);
    });
    test("throws an error if the string is empty", () => {
        expect(() => {isValidDNA("")}).toThrow(Error);
    });
    test("that the function is case insensitive", () => {
        expect(isValidDNA("cgtattgac")).toBe(true);
    });
    test("returns false if the string contains any non DNA characters", () => {
        expect(isValidDNA("cgtbattgac")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("throws an error if the string is not valid DNA", () => {
        expect(() => {getComplementaryDNA("SDEFWPLOU")}).toThrow(Error);
    });

    test("returns complementary DNA string", () => {
        expect(getComplementaryDNA("TGAC")).toBe("ACTG");
        expect(getComplementaryDNA("AGTC")).toBe("TCAG");
        expect(getComplementaryDNA("GATC")).toBe("CTAG");
    });

    test("that the function is case insensitive", () => {
        expect(getComplementaryDNA("agtc")).toBe("TCAG");
    })
});

describe("isItPrime", () => {
    test("returns false if the number is 1", () => {
        expect(isItPrime(1)).toBe(false);
    });
    test("returns true if the number is prime", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(13)).toBe(true);
    });
    test("returns false if the number is not prime", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(12)).toBe(false);
        expect(isItPrime(28)).toBe(false);
        expect(isItPrime(224)).toBe(false);
    });
    test("returns true for more complicated prime numbers", () => {
        expect(isItPrime(179)).toBe(true);
        expect(isItPrime(1847)).toBe(true);
        expect(isItPrime(6113)).toBe(true);
        expect(isItPrime(509)).toBe(true);
    });
});

describe("createMatrix", () => {
    test("returns a simple matrix of 2 x 2 filled with the value of the fill variable", () => {        
        expect(createMatrix(2, "spam")).toEqual([
            ["spam", "spam"],
            ["spam", "spam"]
        ]);

        expect(createMatrix(2, 300)).toEqual([
            [300, 300],
            [300, 300],
        ]);

        expect(createMatrix(2, false)).toEqual([
            [false, false],
            [false, false],
        ]);
    });
    test("returns an empty array if number is 0", () => {
        expect(createMatrix(0, "empty")).toEqual([]);
    });
    test("larger matrices can be created", () => {
        const filler = "This is a huge matrix";
        const newMatrix = createMatrix(600, filler);
        expect(newMatrix[0][599]).toBe(filler);
        expect(newMatrix[599][599]).toBe(filler);
        expect(newMatrix[250][599]).toBe(filler);
    });
});

describe("areWeCovered", () => {
    const staff = [
        { name: "Helen", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Alex", rota: ["Monday", "Wednesday", "Friday", ] },
        { name: "Neil", rota: ["Tuesday", "Wednesday", "Thursday"] },
        { name: "Georgie", rota: ["Monday", "Thursday", "Friday"] },           
    ];

    test("returns true if there are 3 staff members on the rota for the given day", () => {
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);

    });
    test("returns false if there are fewer than 3 staff members on the rota for the given day", () => {
        expect(areWeCovered(staff, "Tuesday"))
    });
    test("returns true if there are more than 3 staff members on the rota for the given day", () => {
        // Add another staff member to cover Wednesday
        staff.push({ name: "Monty", rota: ["Wednesday", "Saturday"] });
        expect(areWeCovered(staff, "Wednesday"));
    });
});

