// Destructuring.js

// 확장 표현식
// ES6 버전에서 추가된 object 타입의 사용 방식

console.log('----- ES5 -----');
var x = 0;
var y = 0;
var obj = {x: x, y: y};
console.log(obj);

var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';
console.log(combined);

var obj2 = {
    methodA: function () {  console.log('A');  },
    methodB: function () {  return 0;  }
};
console.log(obj2);  // { methodA: [Function: methodA], methodB: [Function: methodB] }
obj2.methodA();  // A
obj2.methodB();


console.log('\n----- ES6 -----');
var y = y;
// object 생성 시 키값을 설정하지 않으면 변수명이 키값으로 설정됨
var obj = {x, y};
console.log(obj);

// object 타입 생성 시 대입 연산자 오른쪽에서 바로 키와 값을 설정하여 object 타입에 데이터를 추가하는 것이 가능
var randomKeyString = 'other';
var combined = {['one' + randomKeyString]: 'some value'};
console.log(combined);

var obj2 = {
    methodA() { console.log('A'); },
    methodB() { return 0; }
};
console.log(obj2);
obj2.methodA();
obj2.methodB();


console.log('\n----- 구조분해할당 -----\n');
console.log('----- ES5 -----');

var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;  // 기본값 설정
console.log(item1);  // 0
console.log(item2);  // 1
console.log(item3);  // -1

// 두 변수의 데이터 스왑
var temp = item2;
item2 = item1;
item1 = temp;

console.log(item1);  // 1
console.log(item2);  // 0

var obj = {
    key1: 'one',
    key2: 'two'
};

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';

console.log(key1);  // one
console.log(key2);  // two
console.log(key3);  // default key3 value



console.log('\n----- ES6 -----');

var list = [0, 1];
// 대입 연산자 왼족에 [] 를 사용하여 그 안에 배열을 쓰듯이 변수명을 입력하면 대입 연산자 오른쪽의 데이터를 하나씩 꺼내어 대입 연산자 왼쪽의 변수명에 각각 저장됨
var [item1, item2, item3 = 1] = list;  // => var [item1, item2, item3 = 1] = [0, 1];
console.log(item1);  // 0
console.log(item2);  // 1
console.log(item3);  // 1

// 확장 표현식을 사용하여 임시 변수 없이 2개의 변수의 값을 서로 변경함
[item2, item1] = [item1, item2];
console.log(item1);  // 1
console.log(item2);  // 0

// 배열의 확장 표현식과 동일하게 object 타입에서도 사용이 가능함
// 대입 연산자 왼쪽에 {} 을 사용하고 변수명을 입력하면, 대입 연산자 오른쪽의 object 타입의 키와 같은 변수명에 데이터를 저장함
// 키 이름 생략 시 변수명을 키 이름으로 사용
// key1: newKey1 -> 새 변수명으로 사용
// : 기호를 사용 시 새로운 변수명으로 적용
// = 기호를 사용 시 기본값으로 설정
var {key1: newKey1, key2, key3 = 'default key3 value'} = obj;  // obj = {key1: 'one', key2: 'two'}
console.log(newKey1);  // one
console.log(key2);  // two
console.log(key3);  // default key3 value



var [item, ...otherItems] = [0, 1, 2];
console.log(item);  // 0
console.log(otherItems);  // [ 1, 2 ]

var {key1, ...others} = {key1: 'one', key2: 'two'};
console.log(key1);  // one
console.log(others);  // { key2: 'two' }
