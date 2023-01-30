const tabBodies = document.querySelectorAll('.tab-slider--body');
export const tabLinks = document.querySelectorAll('.tab-slider--nav li');

tabBodies.forEach(tabBody => tabBody.style.display = 'none');

export const handleTabClick = (event) => {
  const activeTab = event.currentTarget.getAttribute('rel');
  const tabBody = document.querySelector(`#${activeTab}`);
  const tabs = document.querySelector('.tab-slider--tabs');

  tabBodies.forEach((tabBody) => tabBody.style.display = 'none');
  tabBody.style.display = 'block';
  tabs.classList.toggle('slide', activeTab === 'tasks');
  tabLinks.forEach((tabLink) => tabLink.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

document.querySelector('.tab-slider--body:first-child').style.display = 'block';