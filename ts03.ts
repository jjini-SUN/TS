//object 공통타입
type objType = {
    [key:string]:number
}

let objVar : objType = {age:33, height:172.3};  //객체의 각 요소값에 숫자만 넣으려면

//클래스
class MyClass
{
    멤버변수 : string;

    constructor(매개변수 : string) { //생성자는 return값이 없는 애
        this.멤버변수 = 매개변수;
    }
}

// constructor : 생성자 (클래스를 객체화하는 순간 발동되는 함수)
//let 객체1 = new MyClass(3.14141412);  // 자료형 불일치
let 객체1 = new MyClass('str');
let 객체2 = new MyClass('str2');

