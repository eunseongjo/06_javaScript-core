console.log('=========논리 타입으로 변환==========');

//자바스크립트 엔진은 불리연 타입이 아닌 값을 Truthy 값(참으로 평가되는 값)
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적은 타입변환된다.
if(true) console.log("if(ture)");
if(false) console.log("if(false)");
if(undefined) console.log("if(undefined)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(Nan)");
if('') console.log("if('')");
if('javaScript') console.log("if(javaScript)");

//false, undefined, null, 0, NaN ''(번 문자열)은 falsy 값이며
//이외의 값은 모두 Trusy값이다.


