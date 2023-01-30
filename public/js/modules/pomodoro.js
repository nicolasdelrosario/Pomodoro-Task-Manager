const timer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
  session: 0
};

export const btnPomodoroStart = document.getElementById('pomodoro-clock-start');

let interval;

const handleMode = (event) => {
  const { mode } = event.target.dataset;
  if (!mode) return;
  switchMode(mode);
  stopTimer();
}

const switchMode = (mode) => {
  timer.mode = mode;
  timer.remainingTime = {
    total: timer[mode] * 60,
    minutes: timer[mode],
    seconds: 0
  };

  document
    .querySelectorAll('button[data-mode]')
    .forEach(e => e.classList.remove('active'));

  document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
  updateClock();
}

export const startTimer = () => {
  document.querySelector(`[data-sound="${timer.mode}"]`).play();
  let { total } = timer.remainingTime;
  const endTime = Date.parse(new Date()) + total * 1000;

  if (timer.mode === 'pomodoro') timer.sessions++;
  btnPomodoroStart.dataset.action = 'stop';
  btnPomodoroStart.textContent = 'stop';
  btnPomodoroStart.classList.add('active');

  interval = setInterval( () => {
    timer.remainingTime = getRemainingTime(endTime);
    updateClock();
    total = timer.remainingTime.total;

    if (total <= 0) {
      clearInterval(interval);

      switch (timer.mode) {
        case 'pomodoro':
          if (timer.sessions % timer.longBreakInterval === 0) {
            switchMode('longBreak');
          } else {
            switchMode('shortBreak');
          }
          break;
        default:
          switchMode('pomodoro');
      }
      startTimer();
    }
  }, 1000);
}

export const stopTimer = () => {
  clearInterval(interval);

  btnPomodoroStart.dataset.action = 'start';
  btnPomodoroStart.textContent = 'start';
  btnPomodoroStart.classList.remove('active');
}

const getRemainingTime = (endTime) => {
  const currentTime = Date.parse(new Date());
  const difference = endTime - currentTime;

  const total = Number.parseInt(difference / 1000, 10);
  const minutes = Number.parseInt(total / 60);
  const seconds = total % 60;

  return { total, minutes, seconds };
};

const updateClock = () => {
  const { minutes, seconds } = timer.remainingTime;
  const sec = `${seconds}`.padStart(2, '0');

  document.getElementById('pomodoro-clock--minutes').textContent = minutes;

  document.getElementById('pomodoro-clock--seconds').textContent = sec;

  const text = timer.mode === 'pomodoro' ? 'Get back to work!' : 'Take a break!';
  document.title = `${minutes}:${sec} — ${text}`;
}

document.querySelectorAll('button[data-mode]').forEach(e => e.addEventListener('click', handleMode));
switchMode('pomodoro');