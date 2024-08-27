function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnFalse() && returnTrue()); // 단락평가
console.log(returnTrue() && returnFalse());

console.log(returnTrue() || returnFalse()); // 단락평가

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
//T||T => 앞에 T 값 출력
//T&&T => 뒤에 T 값 출력

printName();
printName({ name: "이서연" });
