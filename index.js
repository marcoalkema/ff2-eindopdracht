const items = [

  {
    class: "i1",
    onClick: `toggleClass('.i2')`,
    color: "red"
  },
  {
    class: "i2",
    onClick: `toggleClass('.i1')`,
    color: "green"
  },
  {
    class: "i3",
    onClick: '',
    color: "blue"
  },
  {
    class: "i4",
    onClick: `toggleClass('main')`,
    color: "yellow"
  },
  {
    class: "i5",
    onClick: `toggleClass('.i4')`,
    color: "silver"
  },
  {
    class: "i6",
    onClick: `rotateGrid()`,
    color: "orange"
  },
  {
    class: "i7",
    onClick: `randomColor(event)`,
    color: "gold"
  },
  {
    class: "i8",
    onClick: `reloade()`,
    color: "black"
  },
  {
    class: "i9",
    onClick: `newTab('https://www.youtube.com/watch?v=19pp2jNapL4')`,
    color: "pink"
  },
  
]
const mainHtml = items.reduce(mkHtmlStr, '');

function toggleClass (query) {
  document.querySelector(`${query}`).classList.toggle('active');
}

function rotateGrid() {
  document.querySelector('main').classList.toggle('rotate')
}

function randomColor(e){
  // console.log('test')
  let colors = ['red','green','blue','yellow','orange'];
  let div = e.target;
  setInterval(()=>{
    let random = Math.floor(Math.random() * colors.length);

    div.style.backgroundColor = colors[random];
  },1000);
}

function reloade() {
  window.location.reload();
}

function newTab(url){
  window.open(url, '_blank');
}
function mkHtmlStr (htmlStr, item) {
  const stringToAppend = `<div onclick="${item.onClick}"
                               class="${item.class}"
                               style="background:${item.color};">
                          </div>`;

  return htmlStr + stringToAppend;
}


document.querySelector('main').innerHTML = mainHtml;
