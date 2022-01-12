let myImage = document.querySelector('img');
const myHeading = document.querySelector('h1');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Javascript_Logo.png') {
    myImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Antu_php.svg/512px-Antu_php.svg.png');
    myHeading.textContent = 'PHP';
  } else {
    myImage.setAttribute('src', 'images/Javascript_Logo.png');
    myHeading.textContent= 'Javascript';
  }
}

let myButton = document.querySelector('button');
let myTitle = document.querySelector('title');

// タブタイトル変更関数
const setUserName = () => {
  let myName = prompt('あなたの名前を入力してください');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myTitle.textContent = 'ようこそ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myTitle.textContent = 'ようこそ' + storedName;
}

// ボタンクリックでユーザ変更
myButton.onclick = () => {
  setUserName();
}
const changeUser= () => {
  setUserName();
}
