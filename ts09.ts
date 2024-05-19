//변수 타입
// type을 저장 (type alias) (변수에 쓰이는 타입)
type myNewType = string | number | undefined;

//함수 타입
// 함수에 쓰이는 타입을 저장 (매개변수와 리턴의 타입)
// str이라는 문자열을 받아서 number 타입으로 리턴하는 타입
type myFuncType = (str : string)=>number;

// 함수 타입 적용
let 함수09 : myFuncType = (str)=>{
    return 10;
}
let num = 함수09('문자열');

//클래스 타입 (클래스 : 변수 + 함수 주제에 맞게 뭉쳐놓은 것)
class Person {
    //멤버변수 : 클래스 안에 있는 변수
    name : string;  // 그 사람의 이름
    age : number;  //그 사람의 나이
    job : string;  //그 사람의 직업

    //메서드 : 클래스 안에 있는 멤버 함수
    소개함수() : void {
        console.log(this.name, "는", this.job)  //this. ===> 멤버의
    }

    // 특별한 메서드(처음 생성할 때 사용되는 생성자 함수)
    constructor(name:string, age:number, job:string) {
        //매개변수로 받은 것을 멤버변수에 백업
        this.name = name;  // 입력받은 name을 멤버변수 name에 백업
        this.age = age;
        this.job = job;
    }
}

let 짱구아빠 = new Person('신영만', 27, '회사원');  //new 생성자()
let 짱구 = new Person('신짱구', 5, '유치원생');  //new constructor()

console.log(짱구아빠.소개함수());  //짱구아빠의 소개함수
console.log(짱구.소개함수());  //짱구의 소개함수