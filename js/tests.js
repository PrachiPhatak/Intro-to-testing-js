// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function (){
       expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello Prachi" when passed Prachi',  () => {
        expect(sayHello("Prachi")).toBe("Hello, Prachi!");
    });
    it('should return "Hello, CodeUp Students!" when passed CodeUp', () => {
        expect(sayHello("CodeUp")).toBe("Hello, CodeUp Students!");
    });
    it('should return "Hello, World!" when passed false', ()=> {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World! when passed null"', () => {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it(`should return "Hello, World!" when passed ''`, () => {
        expect(sayHello('')).toBe("Hello, World!");
    });
    it('should return "Hello, World! when passed undefined',  () => {
        expect(sayHello(undefined)).toBe("Hello, World!");
    });
    // it('should return "Hello, World" when passed object', function (object) {
    //     expect(sayHello(object)).toBe("Hello, World!")
    // });
});