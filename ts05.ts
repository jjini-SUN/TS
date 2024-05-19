//타입스크립트 실행하려면 tsc -w 터미널에 입력

let 문자열_js = 'str';
let 문자열 : string = "str";  //string, number, boolean... 간단한 건 생략
// 문자열 = 123;  // 타입체크 => 에러! (타입스크립트)

//복잡한 타입에 대해서는 명시
let 문자열과숫자 : (string | number) = "str";
문자열과숫자 = 123;

let 배열 = [1, 2, 3];  //number[] 자동 지정
//fetch 데이터를 받아온다 [] => [data, data] : 문자열 또는 숫자
let fetch배열 : (undefined | string | number)[] = [1, '2', '3'];

function 데이터사용(x : (undefined | string | number)[]) : number {
    if(typeof x === 'string')
    {
        return Number(x[0] + '1');  //이어붙인 다음에 숫자로
    }
    else if(typeof x === 'number')
    {
        return x[0] + 1;  //더하기
    }
    else {
        return 1;  //반환
    }
}

데이터사용(fetch배열)

//함수의 return이 없으면 void
//void : 비어있다
//숫자를 매개변수로 받아서, 리턴값은 없는 함수
function 리턴없음(num? : number) : void  //물음표 해줌으로써 괄호안에 num 들어가도 되고 안들어가도 됨.
{
    if(num) {
        console.log(num);  //다만 num이 안들어오면 console.log가 안뜸
    }
    else {
        console.log('없음');
    } 
}

//타입스트립트는 자바스크립트와는 다르게 매개변수로 만든 만큼 채워줘야 사용가능
리턴없음(3);
리턴없음();  //해당 매개변수에 대해 비워줘도 되게 하고 싶으면 ==> ?
