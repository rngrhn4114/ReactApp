//함수
function getArea1(width, height) {
  //매개변수
  let area = width * height;
  function another() {
    //중첩함수
    console.log("another");
  }
  another();
  console.log(area);
}

getArea1(10, 20); //인수
getArea1(120, 200);

function getArea2(width, height) {
  //매개변수
  let area = width * height;

  return area;
}

let area1 = getArea2(10, 20);
console.log(area1);

//호이스팅 -> 끌어올리다라는 뜻. 함수를 호출문보다 아래에 선언해도 상관없다.
