// 문제 11: for를 이용하여 1 부터 100 까지 모두 더하세요.
var s = 0;

for (var i = 1; i <= 100; i++) {
    s = s + i;
}

console.log(s);

var sum = 0;
var n = 100;
sum = n * (n + 1) / 2;

console.log(sum);

console.log("-----");
// 문제 12: 클래스 만들기 ***

console.log("-----");
// 문제 13: 숫자를 입력하여 행성이름 출력. (수금지화목토천해명. 1 입력->수성, 2 입력->금성)
var planet = {
    1: "수성",
    2: "금성",
    3: "지구",
    4: "화성",
    5: "목성",
    6: "토성",
    7: "천왕성",
    8: "해왕성"
};
var n = 1;
console.log(planet[`${n}`]);

console.log("-----");

// 문제 14: 3의 배수 찾기
input = 12;

if (input % 3 == 0) {
    console.log("짝");
} else {
    console.log(input);
}

// 문제 15: 자기소개. 이름을 집어넣으면 소개 출력

var name = "류시명";
console.log(`안녕하세요. 저는 ${name}입니다.`);

// 문제 16 : 문장을 입력하면 거꾸로 출력 ***

var text = "안녕하세요";

for (var i = 0; i < text.length / 2; i++) {
    var tmp = text[i];
    var k = text.length - 1 - i;
    text[i] = text[k]
    text[k] = tmp;
}

console.log(text);

// 문제 17 : 키가 150이상이면 YES 틀리면 NO 출력

var height = 149;

if (height >= 150) {
    console.log("YES");
} else {
    console.log("NO");
}

// 문제 18: 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램. 소숫점 자리는 버린다.
var num1 = 20;
var num2 = 30;
var num3 = 40;

var average = (num1 + num2 + num3) / 3;
var result = Math.floor(average);
console.log(result);

// 문제 19 : 제곱
var a = 10;
var b = 3;
console.log(Math.pow(a, b));

// 문제 20 : 몫과 나머지
var a = 10;
var b = 2;
var share = a / b;
var remainder = a % b;
console.log(share, remainder);