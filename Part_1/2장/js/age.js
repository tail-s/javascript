function calc() {
    var currentYear = 2022; //올해 년도를 변수 currentYear에 저장함.
    //사용자로부터 입력받은 값으로 변수 birthYear에 저장함.
    var birthyear = prompt("태어난 년도를 입력하세요.", "YYYY");
    //변수 age를 0으로 초기화
    var age = 0;
    //실제 나이를 구하기 위한 코드
    age = currentYear - birthyear + 1;
    //document는 현재 웹브라우저의 페이지를 의미. querySelector()는 id가 result인 웹 요소(div)를 의미한다.
    //innerHTML은 대입한 값으로 html문서에 대체하시오.
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세 입니다."
}