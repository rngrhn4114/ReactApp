//1. 함수 표현식, 함수도 값으로 취급한다.

function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

let varB = function () {
  //익명함수, 호이스팅 대상이 안됨.
  console.log("funcB");
};
varB();

//2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(10));
