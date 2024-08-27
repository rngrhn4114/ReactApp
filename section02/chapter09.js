// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환
let arr1 = [
  { name: "seoyeon", hobby: "tennis" },
  { name: "gidong", hobby: "tennis" },
  { name: "hean", hobby: "game" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "tennis");

// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  // console.log(idx, item);
  return item * 2;
});

// console.log(mapResult);

let names = arr1.map((item) => item.name);
// console.log(names);

//3. sort
//배열을 사전 순으로 정렬하는 메소드
let arr3 = ["b", "a", "c"];
let arr_3 = [10, 3, 5];

arr3.sort(); //요소가 숫자면 정렬 적용 안됨!
arr_3.sort((a, b) => {
  //(오름차순 정렬) (내림차순 정렬은 반대로 하면 됨)
  if (a > b) {
    //b가 a앞에 와라
    return 1; // -> b, a 배치
  } else if (a < b) {
    //a가 b 앞에 와라
    return -1; // -> a, b 배치
  } else {
    //두 값의 자리를 바꾸지 마라
    return 0; // -> a, b 자리 그대로 유지
  }
});

// console.log(arr3);
// console.log(arr_3);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

//5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메소드
let arr6 = ["hi", "I'm", "seoyeon"];
const joined = arr6.join(" "); //공백이 구분자, 기본은 콤마
// console.log(joined);
