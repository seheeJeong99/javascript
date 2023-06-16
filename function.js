'use strict';

//1. function declaration
//   funciton name (param1, param2) { body... return; }
//   one fuction === one thing
function printHello(){
    console.log('Hello');       //별로 쓸모없는 함수
}
printHello();

function log(message){          //파라미터로 메시지를 전달하여 출력 가능. js는 변수타입 안정해져있기 때문에 숫자도 문자열로 변환되어 출력됨
    console.log(message);
}
log('Hello');
log(1234);

//2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const sehee = {name : 'sehee'};
changeName(sehee);
console.log(sehee);

//3. Default parameters
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');     //message 파라미터만 전달됨. from은 자동으로 undefined로 출력됨

//4. Rest parameters
function printAll(...args){     //배열형태로 전달됨
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){     //위 for문을 이렇게도 출력 가능. 더 간단
        console.log(arg);
    }
}
printAll('moongsil', 'loves', 'sehee');

//5. Local scope
let globalMessage = 'global';      // 전역변수
function printMessage(){
    let message = 'hello';         // 지역변수
    console.log(message);
    console.log(globalMessage);
    function pritAnother(){        // 중첩 함수
        console.log(message);      // 자식은 부모의 지역변수를 참조 가능하지만 부모는 자식의 지역변수 참조 불가능
        let childMessage = 'hello22';
    }
}
printMessage();
//console.log(message);              // 지역변수를 블록 밖에서 출력 불가능

//6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum : ${result}`);

//7. Early return, early exit
// bad code
function upgradeUser(user){
    if(user.point > 10){
        // 어쩌구저쩌구 긴 문장... -> 가독성 떨어짐
    }
}

//good code
function upgradeUser(user){
    if(user.point <= 10){
        return;     // 조건이 안맞으면 빨리 리턴해서 함수 종료. 맞을때만 긴 코드 실행
    }
    // 긴 코드... 
}

// 함수는 선언되기전에 호출 가능 (hoisted)
const print = function (){
    //anonymous function 함수 이름이 정의되지 않음
    console.log('print');
};
print();
const printAgain = print;  //print가 함수를 가리키고 있기 때문에 함수 출력됨
printAgain();

const sumAgain = sum;       // 위에서 선언한 sum 함수를 다시 할당
console.log(sumAgain(1,2));