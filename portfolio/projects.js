const calendarDetail = [
    "2023-04-18 ~ 2023-04-20", 
    "5hours", 
    "Date object, table의 주요 method(insertRow deleteRow insertCell))",
    "JavaScript 의 Date object 를 이용하여 간단한 calendar 를 만들었다.\
    <br>< table > element 를 이용하여 달력의 frame 을 구현하였다.\
    <br>특정 날짜를 클릭하면 색이 바뀌는 기능과 오늘 날짜를 표시하는 기능을 구현하였다."
];

const ddayDetail = [
    "2023-04-19", 
    "2hours", 
    "Date object, Math object",
    "JavaScript 의 내장 object 인 Date 와 Math 를 이용하여 새해 까지의 D-day 를 계산하는 App 을 만들었다.\
    <br>Date object 를 이용하여 현재 시간과 target 시간의 차이를 ms 단위로 가져오는 기능를 구현하였다.\
    <br>Math object 를 이용하여 차이 시간을 일 시 분 초 단위로 나누어 화면에 표시하는 기능을 구현하였다."
];

const todoDetail = [
    "2023-04-21 ~ 2023-04-23 / 2023-04-28", 
    "8hours", 
    "localStorage, JS object controll",
    "Local Stroage 와 input form 을 이용하여 Todo List 를 만들었다.\
    <br>input form 에 할 일을 기록하면 localStorage 에 저장되고, 이를 화면에 출력해주는 기능을 구현하였다.\
    <br>Todo 의 체크박스를 클릭하면 한 일로 처리되도록 구현하였고, X 버튼을 누르면 localStrorage 와 화면에서 모두 삭제되도록 구현하였다."
];

    

const projects = {
    "basic" : [
        {
            "name" : "Calendar",
            "code" : "../../calendar/calendar.html",
            "image" : "../image/calendar.jpg",
            "detail" : calendarDetail
        },
        {
            "name" : "D-day",
            "code" : "../../dday/dday.html",
            "image" : "../image/dday.jpg",
            "detail" : ddayDetail
        },
        {
            "name" : "Todo-List",
            "code" : "../../todolist/todo.html",
            "image" : "../image/todo.jpg",
            "detail" : todoDetail
        }
    ]
};


export default (projects);
