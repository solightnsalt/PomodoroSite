# 𝕡𝕠𝕞𝕠𝕕𝕠𝕣𝕠

> 이노베이션캠프(동북) 워밍업 2차 7조

<img src="pomo.gif" alt="tomato" style="zoom: 33%;" />





### 🍅프로젝트 주제

**간단한 시간 & 할 일 관리 웹 사이트 제작 (aka. 뽀모도로)**





### 🙌개발 인원 & 역할

  <table>
    <tbody>
      <tr>
        <td align="center">
          <a href="https://github.com/hotcream3904">
            <img src="https://avatars.githubusercontent.com/u/130561236?v=4" width="100px;">
            <br />
            <b>최은지(팀장)</b>
          </a>
          <br />
          <sub>개발일지 작성, Timer 부분 구현</sub>
        </td>
        <td align="center">
          <a href="https://github.com/solightnsalt">
            <img src="https://avatars.githubusercontent.com/u/108651896?v=4" width="100px;">
            <br />
            <b>김다솔</b>
          </a>
          <br />
          <sub>노션 & README 정리, Timer 부분 구현</sub>
        </td>
        <td align="center">
          <a href="https://github.com/LOCA525">
            <img src="https://avatars.githubusercontent.com/u/98865366?v=4" width="100px;">
            <br />
            <b>박준영</b>
          </a>
          <br />
          <sub>To-do 부분 구현, 데이터 연결</sub>
        </td>
        <tr />
        <td align="center">
          <a href="https://github.com/myeongjin99">
            <img src="https://avatars.githubusercontent.com/u/107457719?v=4" width="100px;" alt="" />
            <br />
            <b>서명진</b>
          </a>
          <br />
          <sub>Timer 부분 구현, 배포</sub>
        </td>
        <td align="center">
          <a href="https://github.com/heexohee">
            <img src="https://avatars.githubusercontent.com/u/78407631?v=4" width="100px;" alt="" />
            <br />
            <b>정소희</b>
          </a>
          <br />
          <sub>To-do 부분 구현</sub>
        </td>
        <td align="center">
          <a href="https://github.com/daaraam">
            <img src="https://avatars.githubusercontent.com/u/130055022?v=4" width="100px;" alt="" />
            <br />
            <b>최수지</b>
          </a>
          <br />
          <sub>To-do 부분 구현</sub>
        </td>
      </tr>
    </tbody>
  </table>





### 🔧사용 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" /> <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" /><img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />


### API
<img width="623" alt="image" src="https://github.com/hotcream3904/PomodoroSite/assets/98865366/dd43d699-502d-4ea7-8920-538516c5bac3">


### 📝프로젝트 구성

#### 메인페이지(index.html)

![main](https://file.notion.so/f/s/4fc5e422-adaf-4f0a-843b-76cec35a3037/Untitled.png?id=7fcad548-be60-42cb-ad1d-f245c4e9f127&table=block&spaceId=38d7bd3c-d046-4b46-9b0e-fd6d2d9c0d4d&expirationTimestamp=1686370004795&signature=RrdyGpNIAFFEcktapKfn2lizC5wvYhHuRiIsbVAmr20&downloadName=Untitled.png)

![setting](https://file.notion.so/f/s/e35c3ec4-fceb-4f6f-a7b6-0bfd77fe16ab/Untitled.png?id=508ef8fc-fcad-4bb1-80c7-4d20ac0039d0&table=block&spaceId=38d7bd3c-d046-4b46-9b0e-fd6d2d9c0d4d&expirationTimestamp=1686370019728&signature=-3IEXawdI2kgSTDNHNb576Q6AdPp1MnX5SvMUCI_K5U&downloadName=Untitled.png)

##### 1️⃣ 재생

클릭 시 타이머가 시작되고 일시 정지 모양으로 전환되며, 그 상태에서 다시 클릭하면 지금 시간 그대로 타이머가 정지된다. 

공부 시간이 끝나면 자동으로 알람이 울리며, 휴식 시간은 5초부터 0초까지 알람이 지속되어 바로 공부를 시작할 수 있게 해주었다.



##### 2️⃣ 정지

클릭 시 공부 시간과 휴식 시간이 모두 초기화된다.



##### 3️⃣ 설정

••• 버튼을 누르면 셋팅창이 나타나고, 저장한 시간으로 타이머 시간이 변경된다.



##### 4️⃣ 할 일 등록

\+ Add Task 클릭 시 해당 영역이 `input[type="text"]`로 전환되며, 텍스트 입력 후 기록하기 버튼 클릭 또는 엔터 키 입력으로 등록 할 수 있다. 등록과 동시에 하단에 차례로 표시된다.



##### 5️⃣ 할 일 삭제

등록된 할 일을 완료하였을 때 DONE 버튼을 클릭하면 화면에서 지워진다.





### ✍🏻소감

##### 김다솔

변수 설정부터 하나하나 코드를 짜면서 처음 보는 오류도 마주치고 어떻게 시작해야 할지 감도 안 잡히는 부분도 있었지만 팀원들과 머리를 맞대고 차근차근 모두 해결해 내서 성취감이 뛰어났습니다💚



##### 박준영



##### 서명진

저희 조는 분업이 잘 되었고 또, 모르는 부분이 생기면 팀원들끼리 적극적으로 도와주었습니다. 부족한 부분이 많았는데 귀찮아하시지 않고 너무 잘 도와주셔서 진짜 너무 감사했습니다. 7조 최고



##### 정소희

자바스크립트 로직과 로컬스토리지에 대해 깊게 공부할 수 있었던 프로젝트 입니다! 멋진 팀원분들께 많이 배웠습니다. 감사해요😘



##### 최수지

바닐라 JS 만으로 원하는 기능을 넣어보니까 웹페이지 하나에 얼마나 많은 로직이 필요한지 느껴졌어요. 팀원분들과 함께여서 가능했던 즐거운 시간 ♪( 'ω' و)



##### 최은지

html과 css로 정적 홈페이지를 구현할 때까지만 해도 별다른 어려움을 느끼지 못했었는데, JS로 기능 구현을 하려고 하니 컴퓨터가 받아들이는 방식대로 로직을 짜는 게 많이 버겁게 느껴졌습니다. 그렇지만 다 함께 프로젝트 설계부터 마무리까지 하게 되니 너무 도움도 많이 되고 재미있었던 것 같아요!
