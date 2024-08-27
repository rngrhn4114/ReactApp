for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; //아래코드 실행 안하고 if 문 다시 돌아감
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
