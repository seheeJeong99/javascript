// 1. 선언되지 않은 변수에 값을 할당시 자동으로 전역변수 생성됨.
// 2. 중복 매개 변수값 허용됨 등의 문제 해결
'use strict';

//변수 let 변경 가능한 변수(mutable)
let name1 = "sehee";
console.log(name1);
name1 = 'taehwan';
console.log(name1);

//var 사용시 변수 선언전 값 할당 또는 출력 가능 => 쓰지말기!!!
// var hoisting : var 변수를 어디에 선언하든 가장 위로 끌어올림

//변수 const 변경 불가능한 변수(immutable)
//동시 값 변경 불가능. 보안우수
const daysInWeek = 7;
const maxNumber = 5;

//변수 타입
//1. primitive : 원자성. number, string, boolean ...
//2. object : box container


// 1. primitive
// 둘다 number로 나옴
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//셋다 string으로 나옴
const char = 'C';
const sehee = 'sehee';
const greeting = 'hello ' + sehee;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol 고유한 식별자 생성
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   //같은 string이지만 같지 않다고 나옴(false)
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //for 사용할 경우 스트링이 같으면 같은 심볼(true)
//symbol 값 출력시 .description 사용해야 출력됨
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 2. object
const sehee1 = {name: 'sehee', age: 25};
//const지만 바꿀수 있음 -> sehee1이 가리키는 포인터는 잠겨있지만 object안의 변수(name, age)는 변경이 가능함
sehee1.age = 24;    
console.log(sehee1);