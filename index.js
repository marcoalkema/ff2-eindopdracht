/*
Developer: Martello Koningferander
Copyright (c) Martello Koningferander. All rights reserved.
*/

// All div items
const items = [
    {
      class: "firstBlock",
      onClick: 'setColors()',
      color: "green"
    },
    {
      class: "secondBlock",
      onClick: 'switchStyle()',
      color: "blue"
    },
    {
      class: "thirdBlock",
      onClick: 'setHovers()',
      color: "yellow"
    },
    {
      class: "fourthBlock",
      onClick: 'setMargin()',
      color: "red"
    },
    {
      class: "fifthBlock",
      onClick: 'setAnim()',
      color: "purple"
    },
    {
      class: "sixthBlock",
      onClick: 'setTurn()',
      color: "black"
    },
    {
      class: "seventhBlock",
      onClick: 'setRandomColor()',
      color: "pink"
    },
    {
      class: "eighthBlock",
      onClick: 'setRefresh()',
      color: "grey"
    },
    {
      class: "ninthBlock",
      onClick: 'setYoutube()',
      color: "brown"
    }
]
const mainHtml = items.reduce(mkHtmlStr, '');

// Function to open Youtube in a new browser
function setYoutube(){
  window.open('https://www.youtube.com/')
}

// Function to refresh the page
function setRefresh(){
  location.reload();
}

// Function to change the color from a block
function setColors(){
  document.querySelector('.ninthBlock').style.backgroundColor = "yellow";
}

// Function to switch a style from a block
function switchStyle(){
  document.querySelector('.eighthBlock').style.border = "10px solid red";
}

// Function to set a Margin between the blocks
function setMargin(){
  let querySelct = document.querySelectorAll('div');

  querySelct.forEach(div => {
    if (div.style.margin === "10px"){
      div.style.margin = "0"
    }else{ div.style.margin = "10px"}
  })
}

// Function to rotate the blocks 90 degrees and back
function setTurn(){
  let setTurn = document.querySelector('main').style.transform;

  if(setTurn !== 'rotate(90deg)'){
    document.querySelector('main').style = "transform: rotate(90deg); transition: transform 300ms ease;";
  }else{document.querySelector('main').style = "transform: rotate(0deg); transition: transform 300ms ease;";}
}

// Function to activate the animation
function setAnim(){
  document.querySelector('.fifthBlock').style = "  width: 100px; height: 100px; background: red; position: relative; animation: animat 5s infinite;";
}

function mkHtmlStr (htmlStr, item) {
  const stringToAppend = `<div onclick="${item.onClick}"
                               class="${item.class}"
                               style="background:${item.color};">
                          </div>`;

  return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;