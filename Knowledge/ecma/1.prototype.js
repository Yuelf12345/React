function A() {}
const a = new A();
console.log(a.__proto__ === A.prototype);
console.log(A.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

console.log(A.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);

console.log(
  Object.__proto__ === Function.prototype,
  Object.__proto__ === Function.__proto__
);

//
A.prototype.a = 1;
Object.prototype.b = 2;
console.log("a", a.a, a.b);

Function.prototype.x = 3;
console.log("A", A.x, A.b);

console.log("Function", Function.b);

/**
 *      a             A          Function
 *      |             |             |
 *   __proto__     __proto__    __proto__
 *      |             |             |
 * 【   A     】  【Function 】 【Function 】 --- Object.__proto__
 * 【prototype】  【prototype】 【prototype】
 *      |             |             |
 *   __proto__     __proto__    __proto__
 *      |             |             |
 *  【 Object  】  【Object 】   【 Object 】
 *  【prototype】  【prototype】 【prototype】
 *      |             |             |
 *  __proto__      __proto__    __proto__
 *      |             |             |
 *  【 null 】    【 null 】     【 null 】
 */
