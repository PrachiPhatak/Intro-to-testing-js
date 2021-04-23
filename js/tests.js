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
    it('should return "Hello, World" when passed object', () => {
        expect(sayHello([])).toBe("Hello, World!")
    });
});

describe('isFive',function (){
    it('should be defined as a function', () => {
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean when called.', () => {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true when passed 5', () => {
        expect(isFive(5)).toBe(true)
    });
    it('should return false when passed 6',  () => {
        expect(isFive(6)).toBe(false);
    });
    it('should return false when passed -10', () => {
       expect(isFive(-10)).toBe(false); 
    });
    it('should return false when passed null',  () => {
        expect(isFive(null)).toBe(false);
    });
    it('should return false when passed \'\'',  () => {
        expect(isFive('')).toBe(false);
    });
    it('should return true when passed \'5\'',  () => {
        expect(isFive('5')).toBe(true);
    });
    it('should return false when passed when passed \'5prachi\'', () => {
        expect(isFive('5prachi')).toBe(false);
    });
    it('should return false when passed "string" ',  () => {
        expect(isFive("string")).toBe(false);
    });
});