import { calculateExpression } from "../calculateExpression";

describe("calculateExpression", () => {

    test("должна вычислять простое выражение", () => {
        expect(calculateExpression("2+3")).toBe("5");
    });

    test("должна вычислять выражение с несколькими операциями", () => {
        expect(calculateExpression("2+3*4")).toBe("14");
    });

    test("должна корректно обрабатывать деление", () => {
        expect(calculateExpression("10/2")).toBe("5");
    });

    test("должна обрабатывать пустую строку", () => {
        expect(calculateExpression("")).toBe("");
    });

    test("должна возвращать Error для неправильного выражения", () => {
        expect(calculateExpression("2+*3")).toBe("Error");
    });

    test("должна вычислять выражение с отрицательными числами", () => {
        expect(calculateExpression("-5+10")).toBe("5");
    });

    test("должна вычислять выражение с пробелами", () => {
        expect(calculateExpression(" 2 + 3 ")).toBe("5");
    });

});
