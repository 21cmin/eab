'use strict'

const privacyText = document.querySelector('.privacy-text');
const myLessonMenu = document.querySelector('#menu-my-lesson');
const schedulerMenu = document.querySelector('#menu-scheduler')
const shoppingCartMenu = document.querySelector('#menu-shopping-cart')

const myLessonURL = "https://raw.githubusercontent.com/21cmin/eab/main/data/my_lesson"
const schedulerURL  = "https://raw.githubusercontent.com/21cmin/eab/main/data/scheduler"
const shoppingCartURL  = "https://raw.githubusercontent.com/21cmin/eab/main/data/shoppingCart"
const seoulBusURL  = "https://raw.githubusercontent.com/21cmin/eab/main/data/seoul-bus"
const dustURL  = "https://raw.githubusercontent.com/21cmin/eab/main/data/dust"
const keventURL  = "https://raw.githubusercontent.com/21cmin/eab/main/data/k-event"

const fetchPrivacy = async (url) => {
  const data = await fetch(url);
  const text = await data.text();
  paintPrivacy(text);
}

const paintPrivacy = (text) => {
  privacyText.innerText = text;
}

const relocation = () => {
  const hash = location.hash;
  if (!hash) { 
    paintPrivacy("main page");
    return
  }
  switch (hash.slice(1)) {
    case "my-lesson":
      fetchPrivacy(myLessonURL);
      break;
    case "scheduler":
      fetchPrivacy(schedulerURL);
      break;
    case "shopping-cart":
      fetchPrivacy(shoppingCartURL);
      break;
    case "seoul-bus":
      fetchPrivacy(seoulBusURL);
      break;
    case "dust":
      fetchPrivacy(dustURL);
      break;
    case "kevent":
      fetchPrivacy(keventURL);
      break;
    default:
      break;
  }
}

myLessonMenu.addEventListener('click', () => {
  const text = fetchPrivacy(myLessonURL)
})
schedulerMenu.addEventListener('click', () => {
  const text = fetchPrivacy(schedulerURL)
})
shoppingCartMenu.addEventListener('click', () => {
  const text = fetchPrivacy(shoppingCartURL)
})
shoppingCartMenu.addEventListener('click', () => {
  const text = fetchPrivacy(dustURL)
})
window.addEventListener('popstate', relocation);

relocation();