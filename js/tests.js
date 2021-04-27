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
    it('should return false when passed Infinity', () => {
        expect(isFive(Infinity)).toBe(false);
    });
    it('should return false when passed undefined',  () => {
        expect(isFive(undefined)).toBe(false);
    });
});

describe('isEven', function (){
    it('should be defined as function', () => {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', () => {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed 4', () => {
       expect(isEven(4)).toBe(true);
    });
    it('should return false when passed 55', () => {
        expect(isEven(55)).toBe(false);
    });
    it('should return false when passed \'\'', () => {
        expect(isEven('')).toBe(false);
    });
    it('should return false when passed null', () => {
        expect(isEven(null)).toBe(false);
    });
    it('should return false when passed Infinity', () => {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed "55"', () => {
        expect(isEven("55")).toBe(false);
    });
    it('should return true when passed "550"', () => {
        expect(isEven("550")).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be defined as a function', () => {
        expect(typeof isVowel).toBe('function');
    });
    it('should return boolean value ', () => {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "I"', function () {
        expect(isVowel("I")).toBe(true);
    });
    it('should return true when passed "b"', function () {
        expect(isVowel("b")).toBe(false);
    });
    it('should return true when passed "T"', function () {
        expect(isVowel("T")).toBe(false);
    });
    it('should return true when passed "1"', function () {
        expect(isVowel("1")).toBe(false);
    });
    it('should return true when passed "&"', function () {
        expect(isVowel("&")).toBe(false);
    });
    it('should return true when passed ""', function () {
        expect(isVowel("")).toBe(false);
    });
    it('should return true when passed null', function () {
        expect(isVowel(null)).toBe(false);
    });
    it('should return true when passed undefined', function () {
        expect(isVowel(undefined)).toBe(false);
    });
});

describe('add',  function (){
    it('should be defined as a function', () => {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when passed 2 , 3', function () {
        expect(add(2 ,3)).toBe(5);
    });
    it('should return -12 when passed -3 , -9', function () {
        expect(add(-3 ,-9)).toBe(-12);
    });
    it('should return 11 when passed "5" , 6', function () {
        expect(add("5" ,6)).toBe(11);
    });
    it('should return 6 when passed "-4" , "10"', function () {
        expect(add("-4" ,"10")).toBe(6);
    });
    it('should return NaN when passed "banana" , "split"', function () {
        expect(add("banana" ,"split")).toBeNaN();
    });
    it('should return NaN when passed 2 , "apples"', function () {
        expect(add(2 ,"apples")).toBeNaN();
    });
    it('should return NaN when passed nothing', function () {
        expect(add()).toBeNaN();
    });
})