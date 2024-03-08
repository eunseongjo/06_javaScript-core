// 02_함수 표현식

// 함수 표현식에서는 함수명을 생략할 수 있다.
var hello = function (name){
    return`${name}님 안녕하세요.`;
}

console.log(hello('홍길동'));

//함수 표현식에서 함수명을 생략하지 않아도 문제는 없다.
var calc = function add(a, b){
    return a+b;
}

console.log(calc(10, 20));


// console.log(add(10, 20));
