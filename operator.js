'use strict';

//1. String concatenation 스트링 연결
console.log('my' + ' cat');
console.log('1'+2);
console.log(1+2);
console.log(`string literals : 1+2 = ${1+2}`); // $ 기호 이용시 변수값을 계산해서 스트링으로 포함. 
console.log(`string literlas : 
 세희입니당!!!!! '' `);                         //``사용시 중간에 특수문자나 엔터키도 인식 가능

//2. Numeric operators 숫자 연산자
console.log(1 + 1); 
console.log(1 - 1); 
console.log(1 / 1); 
console.log(1 * 1); 
console.log(5 % 2); //나머지
console.log(2 ** 3); //제곱값

//3. Increament and decrement operators 증감 연산자
let counter = 2;
const preIncrement = ++counter;
// == counter = counter+1;
//    preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// == postincrement = counter;
//    counter = counter+1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assignment operator 할당 연산자
let x = 3;
let y = 6;
x += y;  // x = x+y;
x -= y;  // x = x-y;
x *= y;  // x = x*y;
x /= y;  // x = x/y;

//5. Comparison operators 비교 연산자
console.log(10 < 6);
console.log(10 <= 6);

//6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), 가장 처음에 있는 true 값을 찾음
console.log(`or: ${value1 || value2 || check()}`);      //만약 check 함수를 가장 앞에 둘 경우 value들이 true더라도 가장 복잡한 check 함수를 먼저 실행해봐야 되므로 잘못짠 코드

// &&(and), 가장 처음에 있는 false 값을 찾음
console.log(`and: ${value1 && value2 && check()}`);     //value1이 어차피 false이므로 다음껀 보지도 않고 패스
// 긴 if문을 압축할때 자주 사용됨. 간편한 null 체크
// 예) nullableObject && nullaleObject.something -> nullableObject가 null이 아닐때만 something을 받아옴

function check(){
    for (let i=0; i<10; i++){
        // 시간 낭비하기
        console.log('니똥꼬');
    }
    return true;  //어쨌든 true 리턴
}

// !(not)
console.log(!value1);       //value1이 false이므로 true로 출력

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type 변환
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type 변환. 웬만하면 === 사용
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const sehee1 = {name : 'sehee'};
const sehee2 = {name : 'sehee'};
const sehee3 = sehee1;
console.log(sehee1 == sehee2);      //각각 다른 레퍼런스가 저장되어 있어 false
console.log(sehee1 === sehee2);     //레퍼런스 값이 다름
console.log(sehee1 === sehee3);     //같은 레퍼런스를 가지고 있음

//퀴즈 / 0, null, undefined, empty string은 모두 false로 간주
console.log(0 == false);   
console.log(0 === false);   // 0의 타입이 boolean이 아니므로 false
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//8. Conditional operators : if
// if, else if, else
const name1 = 'sehee';
if(name1 === 'sehee'){
    console.log('Welcome, sehee !');
} else if(name1 === 'coder'){
    console.log('You are niddonggo');
} else{
    console.log('who are you');
}
//9. Ternary operator : ?
console.log(name1 === 'sehee' ? 'yes' : 'no');

//10. Switch statement
const browser = 'se';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:        //case 중 아무것도 아닐때 디폴트 출력
        console.log('same all');
        break;
}

// break는 반복을 완전히 끝냄
// continue는 이번것만 스킵하고 다음거 실행

//11. Loops
// while문 안의 문장이 맞을때까지 계속 실행
let i = 3;
while (i>0){
    console.log(`while : ${i}`);
    i--;
}

//do-while -> do 안의 블럭 무조건 한번은 먼저 실행
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

//for loop
for(i=3; i>0; i--){
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i=i-2){
    //인라인 변수 선언
    console.log(`inline variable for : ${i}`);
}

// break, continue
// 1. 0 to 10(print only even numbers, use continue)
for(i=0; i<11; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(`even number : ${i}`);
}
// 2. 0 to 10(print until reaching 8, use break)
for(i=0; i<11; i++){
    if(i == 9){
        break;
    }
    console.log(`0 to 8 : ${i}`);
}