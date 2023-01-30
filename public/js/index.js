import * as switchThemeJS from './modules/switchTheme.js';
import * as handleTabJS from './modules/handleTab.js';
import * as pomodoroJS from './modules/pomodoro.js';

function main() {
  //switch theme
  switchThemeJS.switchTheme.addEventListener('click', switchThemeJS.switchThemeFunction);

  //handle tab
  handleTabJS.tabLinks.forEach(tabLink => tabLink.addEventListener('click', handleTabJS.handleTabClick));

  //pomodoro
  pomodoroJS.btnPomodoroStart.addEventListener('click', () => {
    pomodoroJS.btnPomodoroStart.dataset.action === 'start' ? pomodoroJS.startTimer() : pomodoroJS.stopTimer();
  });
}

main()