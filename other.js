window.onload = function(){
window.onorientationchange = function() {
    window.location.reload();
}

var container = document.querySelector('#container');
var tW = container.clientWidth;

var boxes = document.querySelectorAll('.box');
async function setBoxes() {
    if (window.innerWidth > 480) {        
        var tH = container.clientHeight;
        var wW = window.innerWidth;

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.position = 'relative';
            boxes[i].style.width = (wW-tW)/2 + 'px';
            boxes[i].style.height = tH + 'px';
            boxes[i].style.background = '#000';
            boxes[i].style.zIndex = '25';
        }

        boxes[0].style.borderRight = '3px solid #fff';
        boxes[1].style.borderLeft = '3px solid #fff';
    }

    if (screen.width <= 1024 && screen.width > screen.height) {
        container.style.borderTop = '3px solid #fff';
        container.style.borderBottom = '3px solid #fff';

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.height = tH + 6 + 'px';
        }
    }

    if (screen.width >= 768) {
        container.style.borderTop = '3px solid #fff';
        container.style.borderBottom = '3px solid #fff';

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.height = tH + 6 + 'px';
        }
    }
};

setBoxes();

}