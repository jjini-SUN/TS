// 변수에 대입될 수 있는 값을 미리 정해놓는ㄷ
// Literal Types
var TS07;
(function (TS07) {
    var 변수; // 홍길동 | 김유신 | 이순신
    // 변수 = 'str';  // 오류
    변수 = '홍길동';
    //함수의 매개변수나 리턴값에 내가 지정한 값만
    function 가위바위보(str) {
    }
    가위바위보('가위');
    // 가위바위보('모름');
    // 1 또는 0만 받고,
    // 1 또는 0만 return
    function 참거짓(num) {
        return 1;
        // return 2;  //에러
    }
})(TS07 || (TS07 = {}));
// console.log(TS07.변수);
