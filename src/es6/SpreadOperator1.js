// SpreadOperator1.js

// 전개 연산자 (...)
// 나열형 자료를 추출하거나 연결할 때 사용
// 배열, 객체, 변수명 앞에 ... 기호를 사용하여 사용
// 배열 객체 함수 인자 표현식( [ ] ) 안에서만 동작함

console.log('----- ES5 -----');

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
// 배열의 각 요소를 하나씩 추출하여 새로운 배열에 대입
console.log(combined);

var combined = array1.concat(array2);
console.log(combined);

var combined = [].concat(array1, array2);
console.log(combined);


var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';  // 기본값 설정 -> 앞의 값이 false면 'empty'
console.log(first);  // one
console.log(second);  // two
console.log(three);  // empty


console.log('\n----- ES6 -----\n');

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [...array1, ...array2];
console.log(combined);

var [first, second, three = 'empty', ...others] = array1;  // 각각이 변수가 됨
console.log(first);  // one
console.log(second);  // two
console.log(three);  // empty
console.log(others);  // []

var [first, second] = [second, first];  // data swapping

// 원래는 이렇게 사용해야 하는 것을 간단하게 실행 가능
var first = 10;
var second = 20;
var tmp = 0;

tmp = first;
first = second;
second = tmp;

// 잘못 사용한 예
// var wrongArr = ...array1;  // 대괄호 안에서만 동작 가능


