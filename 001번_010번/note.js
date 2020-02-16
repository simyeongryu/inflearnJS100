// 1. 배열에서 400과 500을 삭제
var nums = [100, 200, 300, 400, 500];
console.log(nums);
// 배열의 내장함수. pop - 배열의 맨 마지막 요소를 제거하고 반환.
// push, pop, shift, unshift
console.log(nums.pop());
console.log(nums.pop());
console.log(nums);

console.log("-----");

// 2. 배열의 내장함수. [200, 100, 10000, 300] 이 출력되게 하세요.
var arr = [200, 100, 300];
console.log(arr);
// (i,n,t) : i번째 요소부터, n개를 삭제하고, t라는 숫자를 삽입한다.
arr.splice(2, 0, 10000);
// (0, 2) : 0번째 요소부터 2개 삭제
console.log(arr);

console.log("-----");

// 3. 변수의 타입
// 자바 스크립트 변수의 타입 typeof 로 표현되는 타입.
/**
// 원시 타입
number : 1234, 1234.5
string
boolean
undefined - 값이 할당되지 않았을 때.
null 의 타입은 사실 null이나 자바스크립트 개발자들의 실수로 object.
위를 제외하면 모두 object

// 참조 타입
object

즉 array는 object 타입.

*/
var arr = [100, 200, 300];
console.log(typeof(arr)); // 왜 object??? array아니고?

console.log(typeof(Array.from(arr)));
console.log("-----");

// 4. 변수의 타입 2
var a = 1;
console.log(typeof(a));
a = 2.22;
console.log(typeof(a));
a = 'p';
console.log(typeof(a));
a = [1, 2, 3];
console.log(typeof(a));

console.log("-----");

// 5.
var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
    a += i;
}

console.log(a + b);
console.log("-----");

// 6.
// 자바스크립트 문법 중에서 False로 취급하는 것들. 0, "", NaN, null, false, undefined
// falsy value. (!= truthy value)
// console.log(!)
console.log(!0);
// 0이 아닌 숫자들은 true
console.log(!1);
console.log(!1.2);
// 빈문자열 false
console.log(!"");
// NaN : 숫자가 아니다. false
console.log(!NaN);
console.log(isNaN(1)); // 숫자면 false. 숫자가 아니면 true
// null : false
// undefined : false

// 7. 변수명으로 사용할 수 없는 것은?
'2, 3';
/* 변수의 식별자(변수의 이름)로 사용 가능한 기준 */
// 특수기호. (_, $) 언더바, 달러 기호만 사용 가능. 나머지는 불가능
// 문자열. 예약어는 불가. 자바스크립트에서 이미 사용하고 있는 것들 불가능.  예) let, var, function 등.
// 숫자. 단, 첫 번째 글자로는 불가능하다. 예) let variable1; 가능. let 1variable 불가능.
// 예약어?

// 8. 객체의 키 이름 중복. JSON.
// 키가 중복된다면 나중에 정의된 value 값이 적용된다.
var d = {
    height: 180,
    weight: 78,
    weight: 84,
    temperature: 36,
    eyesight: 1
};
/** 객체 접근 */
// 접근법: obj['key']; 혹은 obj.key. 대괄호는 내부에 반드시 따옴표를 넣는다. '.' 으로 접근할 시엔 따옴표가 필요 없다.
// 개체의 키값은 굳이 문자열이 아니어도 된다. 키값에는 따옴표가 없어도 된다. 문자열이 key가 되면 자동으로 스트링으로 인식.

console.log(d.weight);

// 9. concat을 이용한 출력방법. concatenate: a와 b 등을 연결하다.
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
// 시작할 글자에 concat을 쓴다.
// 문자열을 연결하는 concat.
// 배열을 연결하는 concat도 있다.
var result2 = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);
console.log(result2);

// 10. 별찍기. 5를 입력하면
//     *
//    ***
//   *****
//  *******
// *********
// 행별로 별이 +2

// 별이 입력값만큼의 행을 갖는다.
// 행이 1 늘어날 때마다 열의 별 개수는 +2. 홀수 개.(2n-1).
// 열마다 별이 찍히기 전에 공백이 찍힌다.
// 공백의 개수는 1행일 땐 4개, 2행일 땐 3개, 3행일 땐 2개 ... '입력값 - 행' 개다.

const input = 6;
// 행
for (let i = 1; i <= input; i++) {
    let star = ""; // 빈 문자열로 초기화. for 문 밖에 초기화 시 '*'이 쌓여서 제어가 어렵다.

    for (let k = 1; k <= input - i; k++) {
        star = star + " ";
    }

    // 열: 별 증가
    for (let j = 1; j <= i * 2 - 1; j++) {
        star = star + "*";
    }
    console.log(star);
}