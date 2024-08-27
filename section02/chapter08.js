// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach((item, idx, arr) => {
  //콜백함수
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

//2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);

//3. indexOf(얕은 비교)
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
//존재하지 않으면 -1 반환
let arr3 = [2, 2, 3];
let index = arr3.indexOf(2);
// console.log(index);

let objectArr = [{ name: "seoyeon" }, { name: "gidong" }];
// console.log(objectArr.indexOf({ name: "seyeon" })); //못찾음.
// console.log(objectArr.findIndex((item) => item.name === "seoyeon")); //찾음

//4. findIndex(깊은 비교)-객체타입 찾을 때 주로 사용
// 모든 요소를 순회하면서, 콜백함수를 만족하는(참을 반환) 그러한
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});

// const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
// 이렇게 써도 결과 같음
// console.log(findedIndex);

//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "seoyeon" }, { name: "gidong" }];
const finded = arr5.find((item) => item.name === "seoyeon");
// console.log(finded);
