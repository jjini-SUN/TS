//.ts : 타입스크립트 파일
//.tsx : jsx용 타입스크립트 파일
//npm install -g typescript(nodejs가 먼저 설치되어있어야 함)
//tsconfig.json 파일을 생성하고 아래와 같이 입력

/*
{
    "compilerOptions" : {
    "target" : "ES5"
    "module" : CommonJS"
  }
}
*/

//tsc -w 로 실행 (.js 파일로 변환)
//index.ts -> index.js로 생성
//자바스크립트에 type 검사를 강화한 버전

let myName = '홍길동'
myName = '유관순'
//myName  = 33; //자료형이 달라서 에러 (타입스크립트)

//string, number, boolean, null, undefined, [], {}, bigint4;
let 이름 : string = '사과';
let 숫자 : number = 123.3;
let 숫자배열 : number[] = [1, 2, 3]  //숫자로만 이루어진 배열
let 문자열배열 : string[] = ['a', 'b', 'c']  //문자열로만 이루어진 배열
let 객체 : {이름:string, 나이:number} = {이름:'김유신', 나이 : 33}  //객체의 타입

let 오브젝트 : {_name : string, _age:number, _adult:boolean} =
{
    _name : '이름',
    _age : 33,
    _adult : true
}

// index.html의 title, btn 라는 id에 대하여...
let title = document.getElementById('title');
let btn = document.getElementById('btn');
// 버튼 누르면 title 태그의 html내용을 '반갑습니다'로 바꿔주자
// 1. 버튼 아이디 찾아서 클릭 이벤트 넣어준다.
if(btn != null) {
  btn.addEventListener('click', ()=> {
    if(title != null) {
      title.innerHTML = '반갑습니다';
    }
  })
} else {
  console.log('btn이 없습니다')
}