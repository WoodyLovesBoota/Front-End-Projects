import * as todo from "./todolist/todo.js";
/*
    main 화면에 현재 날짜 시간 초단위 
    옆에 todolist - done
    현재 지역, 날씨
        현재 지역 가져오는 code, 날씨 가져오는 code 찾아봐야 함
    dday 설정해놓은거 dday
        form input 으로 년 월 일 선택하게 해서 or 달력으로 선택하게 해서
        날짜 선택한거를 localStorage 에 저장 -> local 에서 죽 읽어와서 dday 표시
    memo 도 추가할까 말까 - 안하는걸로.
    배경 이미지...
*/

let todoInput = document.querySelector("#todo-input");
todoInput.addEventListener("change", todo.setTodo);

todo.drawTodos();
