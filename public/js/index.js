import * as switchThemeJS from './modules/switchTheme.js';
import * as handleTabJS from './modules/handleTab.js';

function main() {
  //switch theme
  switchThemeJS.switchTheme.addEventListener('click', switchThemeJS.switchThemeFunction);

  //handle tab
  handleTabJS.tabLinks.forEach(tabLink => tabLink.addEventListener('click', handleTabJS.handleTabClick));
}

main()