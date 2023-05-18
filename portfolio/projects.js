const schedularDetail = [
  "Calendar - Schedule Handler는 HTML CSS Javascript\
  를 이용한 Web Application이다. \
   JS의 내장 모듈인 Date object를 사용하여 calendar의 \
   frame 을 생성하였다. 단순히 개발자가 의도한 정보를 Web Site에 표현하는 \
   것이 아닌 사용자와 상호작용 하는 Application을 구현하기 위해 \
   JS의 addEventListener method를 이용하여 사용자의 schedule을 \
   calendar에 표시하는 기능을 구현하였다.",
  "Front End 개발을 시작하면서 가장 먼저 HTML과 CSS를 이용하여 Web Site를\
   구현하는 방법을 공부하였다. 이후, 좀 더 복잡한 Web Site 혹은 Application을\
    만들기 위한 해결책으로 JS의 필요성을 알게 되었고 \
    HTML CSS JS를 이용한 간단한 Application을 만들어 보자는 \
    목표의식을 갖게 되었다. Calendar - Schedule Handler는 이전의 \
    기존의 작업물들과 달리 JS를 \
    이용하여 사용자와 상호작용 하는 부분을 구현하였다는 것에 의의를 둔다. \
    또한 개발 초기단계에서 의도했던 방식으로 작업물이 구현이 완료된 후, \
    비효율적으로 작성된 코드를 수정하는 등의 Re-factoring 과정을 처음으로 \
    수행한 project이기도 하다.",
  "Front-End Development",
  "HTML . CSS . Javascript",
];

// TODO : background 설명 추가
const plannerDetail = [
  "Calendar - Schedule Handler는 HTML CSS Javascript\
  를 이용한 Web Application이다. \
  이전에 구현했던 여러가지 간단한 프로젝트들을 하나의 Application에 담으려 시도하였다.\
  <br>1. Clock - 현재 날짜와 시각을 표시해준다.\
  <br>2. D-day - 오늘부터 목표한 날까지의 남은 시간을 계산해준다.\
  <br>3. Todo - 사용자의 할 일을 기록하고 화면에 표시해준다.",
  "JS를 이용한 application을 만들어 보기로 결심한 후, Schedular를 만드릭 전까지 여러 간단한\
  Project를 진행했었다. 각각을 만드는데 3-4시간 정도가 걸릴정도로 HTML CSS JS를 이용하는 방법을\
  익히기 위한 결과물들 이었다. 이 중 몇개를 합쳐서 하나의 Project로 만들어 볼 수 있겠다는 생각을 하게되었고\
  여러 코드를 합쳐서 Chrome 의 Momentum과 비슷한 application을 만들게 되었다. 이전까지 하나의 JS 파일로\
  작업을 진행하였지만, 이미 작성된 여러 코드들을 하나의 JS 파일에 합치다보니 문제점이 생기기 시작하였고, export 와 import 등\
  상속을 이용하여 문제를 해결하였다. 코드를 합치는 법을 공부하다 보니 JS framework인 React의 component를 이용하면 작업을\
  더욱 효울적으로 할 수 있다는 사실을 알게되었고 따라서 Planner 프로젝트는 이후 React를 이용해서 다시 진행할 계획이다.",
  "Front-End Development",
  "HTML . CSS . Javascript",
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
