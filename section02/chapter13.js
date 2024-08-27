function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// const promise = new Promise((resolve, reject) => {
//   //비동기 작업 실행하는 함수
//   // executor

//   setTimeout(() => {
//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다.");
//     }
//   }, 2000);
// });
// //then 메서드
// //-> 성공하면 그 후에 실행됨
// //-> 실패했을 때는 catch 메서드 사용
// //promise chaining
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
