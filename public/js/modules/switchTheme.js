let body = document.querySelector('body');
export let switchTheme = document.getElementById('theme-switcher');
let btn = switchTheme.querySelector('img');

const switchThemeClass = (name1, name2) => {
  body.classList.remove(name1);
  body.classList.add(name2);
  btn.src = './assets/icons/' + name2 + '.svg';
};

export const switchThemeFunction = () => {
  body.getAttribute('class') === 'light'
    ? switchThemeClass('light', 'dark')
    : switchThemeClass('dark', 'light');
    
  //set the new local storage item
  localStorage.setItem('theme', body.getAttribute('class'));
};

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    body.classList.add(theme);
    btn.src = './assets/icons/' + theme + '.svg';
  };
});