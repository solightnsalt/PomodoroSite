// 변수
const playPause = document.querySelector('.btn-play-pause');
const playButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const stopButton = document.getElementById('stop-btn');
const btnSetting = document.querySelector('.btn-setting');
const settingBox = document.querySelector('.settings-wrapper');
const saveButton = document.querySelector('.save-btn');
let timerCount = document.querySelector('.timer-counter');
let pomoInterval;
let restInterval;
let pomoTime = 1500; //25분 1500
let restTime = 300; //5분 300
let isRunning = false;
let customMinute;
let customRest;


// 재생 버튼을 누르면 pomodoro 시작하면서 재생버튼이 일시정지 버튼으로
playPause.addEventListener('click', () => {
  playButton.classList.toggle('timer-btn-hide');
  pauseButton.classList.toggle('timer-btn-hide');
  
  if (isRunning) {
      isRunning = false;
      clearInterval(pomoInterval);
  }
  // 일시정지 누르면 초 그대로 멈추고 버튼 재생으로 바뀌게.
  else if (!isRunning) {
      isRunning = true;
      pomoInterval = setInterval(pomodoro, 1000);
      pomodoro();
      
  }
})


// pomodoro 25분 카운트 시작~ 끝나면 알림음
function pomodoro() {
  const minutes = String(Math.floor(pomoTime / 60)).padStart(2, '0');
  const seconds = String(pomoTime % 60).padStart(2, '0');
  pomoTime -= 1;
  timerCount.innerHTML = `${minutes}<br>${seconds}`;
  if (pomoTime < 0) {
    clearInterval(pomoInterval);
    restStart();
    restInterval = setInterval(restStart, 1000);
    beep();
  }
}


// 25분이 끝나면 쉬는 시간 5분 시작. 5초~ 0초까지 알림음.
function restStart() {
  const restMinutes = String(Math.floor(restTime / 60)).padStart(2, '0');
  const restSeconds = String(restTime % 60).padStart(2, '0');
  restTime -= 1;
  timerCount.innerHTML = `${restMinutes}<br>${restSeconds}`;
  if (restTime < 5 && restTime >= 0) {
    beep();
  } else if (restTime < 0) {
    clearInterval(restInterval);
    window.location.reload(true);
  }
}


// 알림음
function beep() {
  var sound = new Audio(
    'https://t1.daumcdn.net/cfile/tistory/99412B355CF6B93806?original'
  );
  sound.play();
}


// 정지 누르면 카운트 25분으로 초기화 & 완전 멈춤
stopButton.addEventListener('click', () => {
    clearInterval(pomoInterval);
    isStopped = false;
    console.log(customMinute)

    if (customMinute === undefined) {
      pomoTime = 1500; //25분 1500
      restTime = 300; //5분 300
      const minutes = String(Math.floor(pomoTime / 60)).padStart(2, '0');
      const seconds = String(pomoTime % 60).padStart(2, '0');
      timerCount.innerHTML = `${minutes}<br>${seconds}`;
      if (isRunning) {
        isRunning = false;
        isStopped = true;
        playButton.classList.toggle('timer-btn-hide');
        pauseButton.classList.toggle('timer-btn-hide'); 
    }
    }
    else {
      pomoTime = customMinute * 60;
      restTime = customRest * 60;
      const minutes = String(Math.floor(pomoTime / 60)).padStart(2, '0');
      const seconds = String(pomoTime % 60).padStart(2, '0');
      timerCount.innerHTML = `${minutes}<br>${seconds}`;
      if (isRunning) {
        isRunning = false;
        isStopped = true;
        playButton.classList.toggle('timer-btn-hide');
        pauseButton.classList.toggle('timer-btn-hide'); 
    }
}
})


// 세팅을 누르면 세팅창 보였다가 다시 누르거나 x를 누르면 없어짐
btnSetting.addEventListener('click', showSettings);

function showSettings() {
  settingBox.classList.toggle('show-settings')
}


// 셋팅 시간설정 세이브 버튼 event
saveButton.addEventListener('click', () => {
  customMinute = document.querySelector('#work-duration').value.padStart(2, '0');
  customRest = document.querySelector('#rest-duration').value.padStart(2, '0');

  timerCount.innerHTML = `${customMinute}<br>00`
  pomoTime = customMinute * 60
  restTime = customRest * 60
})