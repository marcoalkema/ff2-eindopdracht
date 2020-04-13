// Luc Humblot    |   klas: 4A8B 
const items = [{
  class: "changeGrid",
  onClick: `expdnGrid()`,
  color: "blue"
},
{
  class: "changeColor",
  onClick: `changeColor()`,
  color: "red"
},
{
  class: "changeThing",
  onClick: `changeThing()`,
  color: "yellow"
},
{
  class: "hover",
  onmouseover: `hover()`,
  color: "lightblue"
},
{
  class: "animation",
  onClick: `animation()`,
  color: "orange"
},
{
  class: "rotate",
  onClick: `rotate()`,
  color: "#33cc33"
},
{
  class: "changeBg",
  onClick:`changeBg()`,
  color: "grey"
},
{
  class: "reloadPage",
  onClick:`reloadPage()`,
  color: "cyan"
},
{
  class: "sendToYt",
  onClick:`sendToYt()`,
  color: "magenta"
},
]
const mainHtml = items.reduce(mkHtmlStr, '');


// wanneer je op 1 blok klikt, verander dan de kleur van een ander blokje door middel van een transitie
function changeColor() {
  document.getElementsByClassName('changeGrid')[0].style.transition = "2s"
  document.getElementsByClassName('changeGrid')[0].style.background = "black";
}

// wanneer je op 1 blok klikt pas je iets anders dan de kleur in de styling van een ander blok. verzin zelf wat je wilt aanpassen
function changeThing() {
  document.getElementsByClassName('changeColor')[0].style.height = "50px";
  document.getElementsByClassName('changeColor')[0].style.transition = "2s"
}

// wanneer je over 1 blok hovert, worden zijn lengte en breedte langzaamaan groter door middel van overgang.
function hover() {
  setTimeout(
    function () {
      var width = parseInt(document.getElementsByClassName('hover')[0].getBoundingClientRect().width, 10);
      var height = parseInt(document.getElementsByClassName('hover')[0].getBoundingClientRect().height, 10);
      document.getElementsByClassName('hover')[0].style.width = width + 20 + 'px';
      document.getElementsByClassName('hover')[0].style.height = height + 20 + 'px';
      document.getElementsByClassName('hover')[0].style.transition = "2s"
    }, 100
  );
}

// wanneer je op 1 blok klikt onstaat er een 10 px margin
function expdnGrid() {
  let querySelector = document.querySelectorAll('div');

  querySelector.forEach(div => {
    if (div.style.margin === "10px") {
      div.style.margin = "0"
    } else {
      div.style.margin = "10px"
    }
  });
}

// wanneer je op 1 blok klikt, laat je een ander blok een animatie uitvoeren. Verzin zelf wat voor animatie
function animation() {
  document.getElementsByClassName('changeColor')[0].style.animationPlayState = "running";
}

// wanneer je op 1 blok klikt, kantelt de gehele blokkkendoos 90 graden langzaam naar rechts door middel van een transition en terug gaat wanneer je er nog eens op klikt
function rotate() {
  let querySelector = document.getElementsByTagName('main')[0];
  if (querySelector.style.transform === "rotate(90deg)") {
    querySelector.style.transform = "rotate(0deg)";
  } else {
    querySelector.style.transform = "rotate(90deg)";
  }
}

// wanneer je op 1 blok klikt, laat dan een Javascript functie uitvoerfen die elke seconde de kleur van het aangeklikte laat veranderen.
function changeBg() {
  var myVar = setInterval(setColor, 1000);

  function setColor() {
    var x = document.getElementsByClassName('changeBg')[0];
    x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "black" : "yellow";
  }
}

// wanneer je op 1 blok klikt, herlaad dan de web pagina.
function reloadPage() {
  location.reload();
}

// waneer je op 1 blok klikt, open dan een link naar een Youtube pagina in een nieuwe tab.
function sendToYt() {
  window.open("https://www.youtube.com/watch?v=OGqEa6RvI-Y");
}

function mkHtmlStr(htmlStr, item) {
  const stringToAppend =
    `<div onclick="${item.onClick}"
        onmouseover="${item.onmouseover}"
        class="${item.class}"
        style="background:${item.color};">
    </div>`;

  return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;