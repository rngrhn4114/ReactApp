//1. if문
//2. switch문
//if문과 기능 자체는 동일
//다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

swithc (animal) {
  case "cat":{
    console.log("고양이");
    break;
  }
  case "bear":{
    console.log("곰");
    break;
  }
  case "snake":{
    console.log("뱀");
    break;
  }
  case "tiger":{
    console.log("호랑이");
    break;
  }
  default: {
    console.log("잘 모른다.");
  }
      
}