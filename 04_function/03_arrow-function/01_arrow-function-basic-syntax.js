//01_화살표 함수
// ES6도입 된 화살표 함수는 function 키워드 대신 화살표를 사용해 좀더 간략한 방법으로 함수를 선언할 수 잇다.
// 화살표 함수는 항상 익명 함수로 정의된다. 본문이 한 줄인 함수를 작성할때 유용하다.
var message;

message = function(){
    return "hellow world";

}

console.log(message());

//function키워드 생략 가능
message = () => {
    return "arrow function";

}
console.log(message());

//명령문이 하나만 있는 경우 중괄호 생략 가능
//return 키워드 생략 가능
message = () => "arrow function are simple";

console.log(message());

//매개변수가 있는 경우
message = (val1, val2) => `arrow function : ${val1 + val2}`;

console.log(message(10, 20));

//매개변수가 하나면 소괄호 생략 가능
// 매개변수가 없거나 여러개 일 경우 생략 불가
message = value => `hello ${value}`;

console.log(message('world'));



