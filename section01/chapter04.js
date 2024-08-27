// 1. 변수
let age = 27; //변수 선언, 초기화, 나중에 값은 수정 가능

age = 30;

//2. 상수
const birth = "1997.01.07";
//birth = "123"; //이렇게 다시 선언 불가

//3. 변수 명명규칙(네이밍 규칙)
//3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;
//3-2. 변수의 이름은 숫자로 시작할 수 없다.
let name1;
//3-3. 예약어를 사용할 수 없다.

//4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
