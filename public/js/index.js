import * as switchThemeJS from './modules/switchTheme.js';

function main() {
  //switch theme
  switchThemeJS.switchTheme.addEventListener('click', switchThemeJS.switchThemeFunction);

}

main()