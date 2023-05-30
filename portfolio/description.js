// TODO : change link code

const schedularDetail = [
  "Calendar - Schedule Handler는 HTML CSS Javascript\
  를 이용하여 구현한 Web Application이다. \
  Javascript를 이용하여 달력을 생성하고 사용자의 일정을 달력에 표시하는 기능을 구현하였다.",
  "Front End 개발을 공부하며 가장 먼저 HTML과 CSS를 이용하여 Web Site를\
   구현하였다. 이후, 좀 더 복잡한 Web Site / Application을\
    만들기 위해 Javascript가 필요하다는 것을 알게 되었고 \
    HTML CSS Javascript를 이용해 간단한 Application을 만들어 보자는 \
    목표의식을 갖고 진행한 프로젝트 이다. Calendar - Schedule Handler는 단순히 \
    개발자가 제공하는 정보를 화면에 표시하는 것 뿐만 아니라, Javascript를 \
    이용하여 사용자와 상호작용 하는 Web site를 구현했다는 것에 의의를 두었다. \
    비교적 간단한 프로젝트이지만 Javascript가 Front end 개발에 어떻게 사용되는지 \
    알게되었고, 구현 전 설계부터 프로젝트를 완성하기 까지의 과정을 혼자서 경험함으로써\
    스스로 보완할 점이나 앞으로 노력해 나가야 할 방향성을 결정 할 수 있었다.",
  "Front-End Development",
  "HTML . CSS . Javascript",
  "Schedular에서 제공하는 기능은 크게 두가지 이다.\
  <br>1. 월 별 달력 제공\
  <br>2. 사용자가 추가한 일정을 표시\
  <br>Javascript의 Date Object를 이용하여 각각의 달의 첫 날과 마지막 날의 요일을 계산하였다. 이후 table tag를 이용하여 해달 월의 달력을 화면에 표시하였다.\
  각각의 cell은 날짜에 해당하는 영역이고 이를 클릭하면 해당 날짜에 사용자의 일정을 추가하는 기능을 구현하였다. \
  사용자는 시간과 일정을 저장할 수 있고, 이는 local storage에 {날짜 : 시간 : 일정}의 Object 형태로 저장된다. \
  각각의 일정은 bar 형태로 cell에 표현되고 사용자는 bar를 클릭함으로써 일정을 변경 혹은 삭제할 수 있다.",
];

const plannerDetail = [
  "Planner는 HTML CSS Javascript를 이용하여 구현한 Web Application이다.\
  이전에 구현했던 몇가지 간단한 프로젝트들을 하나의 Application에 합쳐서 \
  구현하였으며 각각의 기능은 다음과 같다.\
  <br>1. Clock - 현재 날짜와 시각을 표시해준다.\
  <br>2. D-day - 목표한 날까지의 남은 시간을 화면에 나타낸다.\
  <br>3. Todo - 사용자가 입력한 TODO를 화면에 표시해준다.",
  "Vanila JS를 이용하여 구현한 Schedular를 만들기 전까지 여러가지 간단한 \
  Project를 진행했었다. Web developing 환경에서 Javascript를 이용하는 방법을\
  익히기 위한 간단한 프로젝트들이다. Javascript에서의 상속, 모듈화 등 \
  다수의 JS file을 이용하여 하나의 프로젝트를 만드는 방식을 연습하고 싶다는 목표의식을 가지고 \
  기존의 결과물들을 합쳐서 하나의 Project로 만들어 보게 되었다.\
  각각의 part를 하나의 file로 구현한 후 이를 하나의 main file에 합치는 것을 추구하였지만 \
  여러 code를 하나로 합치는 부분에서 어려움을 겪어서 모든 part가 완벽하게 분리되어 있지는 않는다.",
  "Front-End Development",
  "HTML . CSS . Javascript",
  "Planner는 크게 3가지 section으로 나누어져 있다.\
  <br>1. Clock - 현재 날짜와 시각 제공\
  <br>2. D-day - 사용자가 추가한 목표 날까지의 남은 시간 표시\
  <br>3. Todo - 사용자가 추가한 일정 표시\
  <br>Javascript의 Date Object와 setInterval 함수를 이용하여 \
  현재 날짜와 시각을 매초마다 계산하여 화면에 나타내는 방식으로 Clock을 구현하였다. \
  D-day 역시 같은 방법으로 목표한 날짜까지의 timestamp와 \
  현재의 timestamp를 이용하여 남은 시간을 일/시/분/초 단위로 표시해준다.\
  사용자가 입력한 목표 날에 대한 정보는 {일정 : 날짜} 형태로 local storage에 저장된다.\
  사용자가 입력한 Todo 역시 local storage에 저장되며, checkbox와 delete button을 이용해 \
  자신의 Todo를 체크하거나 삭제할 수 있도록 구현하였다.",
];

const project3Detail = [
  "index 1 . meaning\
    <br>of\
    <br>project3",
  "index 2 . background\
    <br>of\
    <br>project3",
  "index 4 . spec",
  "index 5 . language",
  "index 6. implementation",
];

const projects = {
  basic: [
    {
      title: "Calendar",
      subTitle: "Schedule Handler",
      code: "../../Schedular/Schedular.html",
      image: "",
      detail: schedularDetail,
      sourcecode:
        "https://github.com/WoodyLovesBoota/Self-Projects/tree/main/schedular",
    },
    {
      title: "Planner",
      subTitle: "",
      code: "../../planner/planner.html",
      image: "",
      detail: plannerDetail,
      sourcecode:
        "https://github.com/WoodyLovesBoota/Self-Projects/tree/main/planner",
    },
    {
      title: "Project3",
      subTitle: "subtitle of project3",
      code: "../../Schedular/Schedular.html",
      image: "",
      detail: project3Detail,
      sourcecode:
        "https://github.com/WoodyLovesBoota/Self-Projects/tree/main/schedular",
    },
  ],
};

export default projects;
