'use strict'

const privacyText = document.querySelector('.privacy-text');
const myLessonMenu = document.querySelector('#menu-my-lesson');
const schedulerMenu = document.querySelector('#menu-scheduler')
const shoppingCartMenu = document.querySelector('#menu-shopping-cart')

const myLessonURL = "../data/my_lesson"
const schedulerURL  = "../data/scheduler"
const shoppingCartURL  = "../data/shoppingCart"

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
window.addEventListener('popstate', relocation);
relocation();









