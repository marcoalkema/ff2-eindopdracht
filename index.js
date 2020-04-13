const items = [
    {
        class: "first",
        onClick: `refresh()`,
        color: "limegreen"
    },
    {
        class: "second",
        onClick: `transitionBackgroundColor('.first')`,
        color: "red"
    },
    {
        class: "third",
        onClick: `setMarginAll()`,
        color: "mediumturquoise"
    },
    {
        class: "forth",
        onClick: `changeColor('.seventh')`,
        color: "gray"
    },
    {
        class: "fifth",
        onClick: `animatedBlock('.fifth')`,
        color: "cyan"
    },
    {
        class: "sixth",
        onClick: `rotateBlock('.sixth')`,
        color: "lightsalmon"
    },
    {
        class: "seventh",
        onClick: `colorChangeByInterval(1000)`,
        color: "hotpink"
    },
    {
        class: "eighth",
        onClick: `randomStyleTransition('.eighth')`,
        color: "cornflowerblue"
    },
    {
        class: "ninth",
        onClick: `openYoutube('https://www.youtube.com/watch?v=b5Zi-8zwIZo')`,
        color: "yellowgreen"
    },
];

const mainHtml = items.reduce(mkHtmlStr, '');

function transitionBackgroundColor(query) {
    let bgColor = document.querySelector(`${query}`);

    bgColor.style.transition = "2s";

    if (bgColor.style.background === 'red') {
        bgColor.style.background = "green";
    } else {
        bgColor.style.background = "red";
    }
}

function randomStyleTransition(query) {
    let querySelector = document.querySelector(`${query}`);

    querySelector.style.transition = "10s";

    if (querySelector.style.opacity === "0"){
        querySelector.style.opacity = "1";
    } else {
        querySelector.style.opacity = "0";
    }
}

function setMarginAll() {
    document.querySelectorAll('div').forEach(element => {
        if (element.style.margin === "10px"){
            element.style.margin = "0"
        } else {
            element.style.margin = "10px"
        }
    });
}

function animatedBlock(query) {
    let querySelector = document.querySelector(`${query}`);

    querySelector.style.animationName = "animatedBlock";
    querySelector.style.animationDuration = "4s";
}

function rotateBlock(query) {
    let querySelector = document.querySelector(`${query}`);

    if (querySelector.style.transform === "rotate(90deg)"){
        querySelector.style.transform = "rotate(0deg)";
    } else {
        querySelector.style.transform = "rotate(90deg)";
    }
}

function generateRandomColor() {
    return '#' + (Math.random().toString(16) + "000000").substring(2, 8)
}

function changeColor(query) {
    document.querySelector(query).style.backgroundColor = generateRandomColor();
}

function colorChangeByInterval(interval) {
    setInterval(changeColor, interval);
}

function refresh() {
    window.location.reload();
}

function openYoutube(url) {
    window.open(url, "_blank")
}

function mkHtmlStr(htmlStr, item) {
    const stringToAppend = `<div onclick="${item.onClick}"
                                class="${item.class}"
                                style="background:${item.color};">
                            </div>`;

    return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;