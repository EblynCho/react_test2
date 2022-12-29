// ArrowFunction.js

// 화살표 함수 : ES6 버전부터 사용되는 함수를 선언하는 새로운 방식
// ES5 버전의 익명함수를 사용하여 함수를 생성하는 방식에서 변경되어 function 키워드를 생략하고, 매개변수와 코드 블럭 사이에 '=>' 기호를 사용하는 방식
// 소스코드가 반환값 한 줄일 경우 코드 블럭을 생략할 수 있음 ( return 키워드도 생략 )
// 매개변수가 1개인 경우, 매개변수의 괄호를 생략할 수 있음

// 사용법 :
// 변수명 = (매개변수1, 매개변수2, ...) => {
//      실행할 소스코드
//      return 반환값
// }
// 변수명 = (매개변수1, 매개변수2, ...) => 반환값;
// 변수명 = 매개변수 => 반환값;
// 변수명 = () => 반환값;

// 기존 함수 선언 방식 1
function es5Func1(a, b) {
    console.log(a + b);
    return a + b;
}

// 기존 함수 선언 방식 2
var es5Func2 = function (a, b) {
    console.log(a + b);
    return a + b;
}

let data = es5Func1(10, 20);
console.log(data);
data = es5Func2(100, 200);
console.log(data);

console.log('\n----- ES6 방식 -----\n');

// 화살표 함수 선언
const es6Func1 = (a, b) => {
    console.log(a + b);
    return a + b;
}

data = es6Func1(10, 20);
console.log(`리턴 받은 값 : ${data}`);  // 리턴 받은 값 : 30

// 소스코드가 반환값 한 줄일 경우 코드 블럭을 생략할 수 있음 ( return 키워드도 생략 )
const es6Func2 = (a, b) => a + b;
data = es6Func2(100, 200);
console.log(`리턴 받은 값 : ${data}`);  // 리턴 받은 값 : 300

const es6Func3 = (a, b) => console.log(a + b);
es6Func3(10, 20);  // 30


const es6Func4 = (a) => a * 2;
data = es6Func4(10);
console.log(`리턴 받은 값 : ${data}`);  // 리턴 받은 값 : 20

// 매개변수가 1개인 경우, 매개변수의 괄호를 생략할 수 있음
const es6Func5 = a => a * 2;
data = es6Func5(10);
console.log(`리턴 받은 값 : ${data}`);  // 리턴 받은 값 : 20


// 매개변수가 없을 경우 반드시 () 가 있어야 함
const es6Func6 = () => console.log('es6Func6() 실행');
es6Func6();  // es6Func6() 실행