window.onorientationchange = function() {
    window.location.reload();
}

// Select all objects
var body = document.querySelector('body');
var container = document.querySelector('#container');
var tW = container.clientWidth;

var n = 40;
var interval = 500;

var boxes = document.querySelectorAll('.box');
setTimeout(function(){
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

    if (window.innerWidth > 480 && screen.width > screen.height) {
        container.style.borderTop = '3px solid #fff';
        container.style.borderBottom = '3px solid #fff';

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.height = tH + 6 + 'px';
        }
    }
}, interval)

var t1 = document.querySelector('#container .t1');
var t2 = document.querySelector('#container .t2');
var t3 = document.querySelector('#container .t3');
var t4 = document.querySelector('#container .t4');
var t5 = document.querySelector('#container .t5');
var t5_c = document.querySelector('#container .t5_c');
var t6 = document.querySelector('#container .t6');
var t7 = document.querySelector('#container .t7');
var t8 = document.querySelector('#container .t8');
var t9 = document.querySelector('#container .t9');
var t10 = document.querySelector('#container .t10');
var t11 = document.querySelector('#container .t11');
var t12 = document.querySelector('#container .t12');
var t13 = document.querySelector('#container .t13');
var t14 = document.querySelector('#container .t14');
var t15 = document.querySelector('#container .t15');
var t16 = document.querySelector('#container .t16');
var t17 = document.querySelector('#container .t17');

var i1_pl = document.querySelector('#container .i1_pl');
var i1 = document.querySelector('#container .i1');
var i1_2 = document.querySelector('#container .i1_2');
var i1_3 = document.querySelector('#container .i1_3');
var i2 = document.querySelector('#container .i2');
var i2_2 = document.querySelector('#container .i2_2');
var i2_3 = document.querySelector('#container .i2_3');
var i2_4 = document.querySelector('#container .i2_4');
var i2_5 = document.querySelector('#container .i2_5');
var i3 = document.querySelector('#container .i3');
var i3_2 = document.querySelector('#container .i3_2');
var i4 = document.querySelector('#container .i4');
var i4_2 = document.querySelector('#container .i4_2');
var i5_pl = document.querySelector('#container .i5_pl');
var i5 = document.querySelector('#container .i5');
var i5_2 = document.querySelector('#container .i5_2');
var i5_3 = document.querySelector('#container .i5_3');
var i6 = document.querySelector('#container .i6');
var i7 = document.querySelector('#container .i7');
var i7_2 = document.querySelector('#container .i7_2');
var i7_3 = document.querySelector('#container .i7_3');
var i8 = document.querySelector('#container .i8');
var i8_2 = document.querySelector('#container .i8_2');

// Define object positions
t1.style.marginTop = 2.5*n + 'px';

i1_2.style.position = 'absolute';
setTimeout(function(){
    i1_2.style.top = i1_pl.offsetTop - 1.2*n + 'px';
}, interval)
i1_2.style.width = 0.65*tW + 'px';
i1_2.style.marginLeft = (1*tW - i1_2.clientWidth)*0.6 + 'px';
i1_2.style.zIndex = 11;

i1_3.style.position = 'absolute';
setTimeout(function(){
    i1_3.style.top = t1.offsetTop + 1.6*n + 'px';
}, interval)
i1_3.style.width = 0.85*tW + 'px';
i1_3.style.marginLeft = (1*tW - i1_3.clientWidth)*0.8 + 'px';
i1_3.style.zIndex = 11;

i1.style.position = 'absolute';
setTimeout(function(){
    i1.style.top = i1_pl.offsetTop + 'px';
    i1.style.width = i1_pl.clientWidth + 'px';
    i1.style.height = i1_pl.clientHeight + 'px';
}, interval)
i1.style.marginLeft = 0.35*tW + 'px';
i1.style.zIndex = 12;

i1_pl.style.position = 'relative';
i1_pl.style.marginTop = 3*n + 'px';
i1_pl.style.width = 0.8*tW + 'px';
i1_pl.style.height = 0.8*tW + 'px';
i1_pl.style.marginLeft = 0.35*tW + 'px';
i1_pl.style.zIndex = 10;

t2.style.marginTop = 3*n + 'px';

i2.style.position = 'relative';
i2.style.marginTop = 2*n + 'px';
i2.style.width = 1*tW + 'px';
i2.style.zIndex = 10;

i2_2.style.position = 'absolute';
setTimeout(function(){
    i2_2.style.top = i2.offsetTop + 'px';
}, interval)
i2_2.style.width = 1*tW + 'px';
i2_2.style.zIndex = 11;

i2_3.style.position = 'absolute';
setTimeout(function(){
    i2_3.style.top = i2.offsetTop + 'px';
}, interval)
i2_3.style.width = 1*tW + 'px';
i2_3.style.zIndex = 12;

i2_4.style.position = 'absolute';
setTimeout(function(){
    i2_4.style.top = i2.offsetTop + 'px';
}, interval)
i2_4.style.width = 1*tW + 'px';
i2_4.style.zIndex = 13;

i2_5.style.position = 'absolute';
setTimeout(function(){
    i2_5.style.top = i2.offsetTop + 'px';
}, interval)
i2_5.style.width = 1*tW + 'px';
i2_5.style.zIndex = 14;

t3.style.position = 'relative';
t3.style.marginTop = 0*n + 'px';
t3.style.zIndex = 15;

t4.style.marginTop = 3*n + 'px';

i3.style.position = 'relative';
i3.style.marginTop = 2*n + 'px';
i3.style.width = 1*tW + 'px';
i3.style.zIndex = 12;

i3_2.style.position = 'absolute';
setTimeout(function(){
    i3_2.style.top = i3.offsetTop + 3*n + 'px';
}, interval)
i3_2.style.width = 1*tW + 'px';
i3_2.style.zIndex = 11;

t5.style.position = 'relative';
t5.style.marginTop = 0*n + 'px';
t5.style.zIndex = 13;

t5_c.style.position = 'absolute';
setTimeout(function(){
    t5_c.style.top = t5.offsetTop - (t5.offsetTop - i3.offsetTop - i3.clientHeight)*2 + 'px';
}, interval)
t5_c.style.width = 1*tW + 'px';
t5_c.style.height = t5.clientHeight + 1*n + 'px';
t5_c.style.zIndex = 12;

i4.style.marginTop = 3*n + 'px';
i4.style.width = 0.9*tW + 'px';
i4.style.marginLeft = 0.065*tW + 'px';

i4_2.style.position = 'absolute';
setTimeout(function(){
    i4_2.style.top = i4.offsetTop + 'px';
}, interval)
i4_2.style.width = 0.9*tW + 'px';
i4_2.style.marginLeft = 1*tW + 'px';
i4_2.style.zIndex = 11;

t6.style.marginTop = 1*n + 'px';

t7.style.marginTop = 4*n + 'px';

t8.style.marginTop = 1*n + 'px';

i5.style.position = 'relative';
i5_pl.style.marginTop = 1*n + 'px';
i5_pl.style.width = 0.8*tW + 'px';
i5_pl.style.height = 0.8*tW + 'px';
i5_pl.style.marginLeft = 0.1*tW + 'px';
i5.style.zIndex = 10;

i5.style.position = 'absolute';
setTimeout(function(){
    i5.style.top = i5_pl.offsetTop + 'px';
    i5.style.width = i5_pl.clientWidth + 'px';
    i5.style.height = i5_pl.clientHeight + 'px';
}, interval)
i5.style.marginLeft = 0.1*tW + 'px';
i5.style.transform = 'rotate(-5deg)';
i5.style.zIndex = 13;

i5_2.style.position = 'absolute';
setTimeout(function(){
    i5_2.style.top = i5.offsetTop - 2*n + 'px';
}, interval)
i5_2.style.width = 0.8*tW + 'px';
i5_2.style.marginLeft = (1*tW - i5_2.clientWidth)*0.5 + 'px';
i5_2.style.opacity = 0.5;
i5.style.zIndex = 12;

i5_3.style.position = 'absolute';
setTimeout(function(){
    i5_3.style.top = i5.offsetTop - 2*n + 'px';
}, interval)
i5_3.style.width = 0.8*tW + 'px';
i5_3.style.marginLeft = (1*tW - i5_3.clientWidth)*0.5 + 'px';
i5_3.style.opacity = 0.5;
i5.style.zIndex = 11;

i6.style.marginTop = 1*n + 'px';
i6.style.width = 1*tW + 'px';

t9.style.width = i6.style.width;
var t9H5 = document.querySelectorAll('#container .t9 h5');
for (let i = 1; i < t9H5.length; i++) {
    t9H5[i].style.marginTop = 0.5*n + 'px';
}
for (let i = 0; i < t9H5.length; i++) {
    t9H5[i].style.opacity = 0;
    t9H5[i].style.transition = '0.3s ease-in';
}

t9.style.position = 'absolute';
setTimeout(function(){
    t9.style.top = i6.offsetTop + (i6.clientHeight - t9.clientHeight)*0.5 - 0.5*n + 'px';
}, interval)
t9.style.textAlign = 'center';

t10.style.marginTop = 2*n + 'px';

t11.style.marginTop = 4*n + 'px';

t12.style.marginTop = 1*n + 'px';

i7.style.position = 'relative';
i7.style.marginTop = 2*n + 'px';
i7.style.width = 1*tW + 'px';
i7.style.zIndex = 12;

i7_2.style.position = 'absolute';
setTimeout(function(){
    i7_2.style.top = i7.offsetTop + i7.clientHeight*0.5 + 0.5*n + 'px';
}, interval)
i7_2.style.width = 0.24*tW + 'px';
i7_2.style.marginLeft = (1*tW - i7_2.clientWidth)*0.5 + 'px';
i7_2.style.zIndex = 11;

i7_3.style.position = 'absolute';
setTimeout(function(){
    i7_3.style.top = i7.offsetTop + i7.clientHeight*0.5 + 0.5*n + 'px';
}, interval)
i7_3.style.width = 0.24*tW + 'px';
i7_3.style.marginLeft = (1*tW - i7_3.clientWidth)*0.5 + 'px';
i7_3.style.zIndex = 11;

i8.style.position = 'relative';
i8.style.marginTop = i7_2.clientHeight - i7.clientHeight*0.5 + 2*n + 'px';
i8.style.width = 0.5*tW + 'px';
i8.style.marginLeft = 0.25*tW + 'px';
i8.style.zIndex = 11;

i8_2.style.position = 'absolute';
setTimeout(function(){
    i8_2.style.top = i8.offsetTop + 'px';
    i8_2.style.width = i8.clientWidth + 'px';
    i8_2.style.height = i8.clientHeight + 'px';
}, interval)
i8_2.style.marginLeft = 0.25*tW + 'px';
i8_2.style.opacity = 0;
i8_2.style.transition = '0.3s ease-in';
i8_2.style.zIndex = 10;

t13.style.marginTop = 4*n + 'px';

t14.style.marginTop = 3*n + 'px';

t15.style.marginTop = 2*n + 'px';

t16.style.marginTop = 2*n + 'px';

t17.style.marginTop = 2*n + 'px';
t17.style.marginBottom = 2*n + 'px';

// Set background gradient
setTimeout(function(){
    var tH = container.clientHeight;

    var h1 = 0;
    var h2 = 100 * (i1.offsetTop + i1.clientHeight*0.3 ) / tH;
    var h3 = 100 * t2.offsetTop / tH;
    var h4 = 100 * i2.offsetTop / tH;
    var h5 = 100 * (i2.offsetTop + i2.clientHeight*0.5) / tH;
    var h6 = 100 * (i3.offsetTop + i3.clientHeight - 0.5*n) / tH;
    var h7 = 100 * (i3.offsetTop + i3.clientHeight + t5.clientHeight + 1*n) / tH;
    var h8 = 100 * (t7.offsetTop - 2*n) / tH;
    var h9 = 100 * (t8.offsetTop + 2*n) / tH;
    var h10 = 100 * (i5.offsetTop + i5.clientHeight + 1*n) / tH;
    var h11 = 100 * (t9.offsetTop + t9.clientHeight) / tH;
    var h12 = 100 * (i6.offsetTop + i6.clientHeight*0.5) / tH;
    var h13 = 100 * (i7.offsetTop + i7.clientHeight*0.5) / tH;
    var h14 = 100;

    var x = "%,";

    var bg1 = "rgba(0,0,0,1)" + h1 + x + "rgba(29,86,151,1)" + h2 + x + "rgba(197,116,90,1)" + h3;
    var bg2 = "rgba(197,116,90,1)" + h4 + x + "rgba(197,116,90,1)" + h5 + x + "rgba(6,21,37,1)" + h5;
    var bg3 = "rgba(6,21,37,1)" + h6 + x + "rgba(254,118,53,1)" + h6;
    var bg4 = "rgba(254,118,53,1)" + h7 + x + "rgba(0,0,0,1)" + h8;
    var bg5 = "rgba(0,0,0,1)" + h9 + x + "rgba(29,86,151,1)" + h10 + x + "rgba(17,51,90,1)" + h11;
    var bg6 = "rgba(254,167,52,1)" + h12 + x + "rgba(254,167,52,1)" + h12 + x + "rgba(208,113,86,1)" + h13;
    var bg7 = "rgba(252,245,239,1)" + h13 + x + "rgba(252,245,239,1)" + h14;

    container.style.background = "linear-gradient(180deg, " + bg1 + x + bg2 + x + bg3 + x + bg4 + x + bg5 + x + bg6 + x + bg7 + "%)";
}, interval);

//---Navigation bar scroll---//
window.addEventListener('scroll', parallax);
function parallax() {
    setTimeout(function(){
        var y = window.pageYOffset;

        if (y < t2.offsetTop-3*n) {
            i1_2.style.top = -0.15*y + i1.offsetTop - 1.2*n + 'px';
            i1_3.style.top = -0.1*y + t1.offsetTop + 1.6*n + 'px';
            
            i1.style.width = 0.04*y + 0.8*tW + 'px';
            i1.style.height = 0.04*y + 0.8*tW + 'px';
            i1.style.marginLeft = -0.1*y + 0.35*tW + 'px';

            // Set heights of elements in the next viewport to initials
            i2_2.style.top = i2.offsetTop + 'px';
            i2_3.style.top = i2.offsetTop + 'px';
            i2_4.style.top = i2.offsetTop + 'px';
            i2_5.style.top = i2.offsetTop + 'px';
        }

        if (y > t2.offsetTop-3*n && y < t3.offsetTop) {
            var y2 = y - (t2.offsetTop - 3*n);

            i2_2.style.top = -0.06*y2 + i2.offsetTop + 'px';
            i2_3.style.top = -0.09*y2 + i2.offsetTop + 'px';
            i2_4.style.top = -0.18*y2 + i2.offsetTop + 'px';
            i2_5.style.top = -0.24*y2 + i2.offsetTop + 'px';

            // Set heights of elements in the next viewport to initials
            i3_2.style.top = i3.offsetTop + 3*n + 'px';
        }

        if (y > t3.offsetTop && y < t5.offsetTop) {
            var y2 = y - t3.offsetTop;
            i3_2.style.top = -0.8*y2 + i3.offsetTop + 3*n + 'px';

            if (i3_2.offsetTop <= i3.offsetTop) {
                i3_2.style.top = i3.offsetTop + 'px';
            }

            // Set heights of elements in the next viewport to initials
            i4_2.style.marginLeft = 1*tW + 'px';
        }
        
        if (y > t5.offsetTop-2*n && y < t7.offsetTop-4*n) {
            var y2 = y - (t5.offsetTop-2*n);
            var wW = window.innerWidth;

            i4_2.style.marginLeft = -2*y2 + 1*tW + 'px';

            if (i4_2.offsetLeft <= (wW-tW)/2) {
                i4_2.style.marginLeft = 0.065*tW + 'px';
            }

            // Set heights of elements in the next viewport to initials            
            i5_2.style.top = i5.offsetTop - 2*n + 'px';
            i5_3.style.top = i5.offsetTop - 2*n + 'px';
            
            i5.style.transform = 'rotate(-5deg)';

            i5.style.top = i5_pl.offsetTop + 'px';
            i5.style.width = 0.8*tW + 'px';
            i5.style.height = 0.8*tW + 'px';
            i5.style.marginLeft = 0.1*tW + 'px';
        }
        
        if (y > t7.offsetTop-4*n && y < i6.offsetTop) {
            var y2 = y - (t7.offsetTop-4*n);
            var i5Scale = 0.2;
            
            i5_2.style.top = -0.12*y2 + i5.offsetTop - 2*n + 'px';
            i5_3.style.top = -0.08*y2 + i5.offsetTop - 2*n + 'px';
            
            i5.style.transform = 'rotate(' + (-5 + 5*0.005*y2) + 'deg)';

            i5.style.top = -(i5Scale/2)*y2 + i5_pl.offsetTop + 'px';
            i5.style.width = i5Scale*y2 + 0.8*tW + 'px';
            i5.style.height = i5Scale*y2 + 0.8*tW + 'px';
            i5.style.marginLeft = -(i5Scale/2)*y2 + 0.1*tW + 'px';

            // Set heights of elements in the next viewport to initials
            for (let i = 0; i < t9H5.length; i++) {
                t9H5[i].style.opacity = 0;
            }
        }
        
        if (y >= i5.offsetTop) {
            t9H5[0].style.opacity = 1;
        } else if (y < i5.offsetTop) {
            t9H5[0].style.opacity = 0;
        }
        
        if (y >= i5.offsetTop+2*n) {
            t9H5[1].style.opacity = 1;
        } else if (y < i5.offsetTop+2*n) {
            t9H5[1].style.opacity = 0;
        }
        
        if (y >= i5.offsetTop+4*n) {
            t9H5[2].style.opacity = 1;
        } else if (y < i5.offsetTop+4*n) {
            t9H5[2].style.opacity = 0;

            // Set heights of elements in the next viewport to initials            
            i7_2.style.top = i7.offsetTop + i7.clientHeight*0.5 + 0.5*n + 'px';            
            i7_3.style.top = i7.offsetTop + i7.clientHeight*0.5 + 0.5*n + 'px';
        }
        
        if (y > t12.offsetTop-1*n && y < i8.offsetTop) {
            var y2 = y - (t12.offsetTop-1*n);
            
            i7_2.style.top = 0.04*y2 + i7.offsetTop + i7.clientHeight*0.5 + 0.5*n + 'px';            
            i7_3.style.top = 0.06*y2 + i7.offsetTop + i7.clientHeight*0.5 + 0.5*n + 'px';

            // Set heights of elements in the next viewport to initials   
            i8_2.style.opacity = 0;
        }
        
        if (y >= i7.offsetTop+i7.clientHeight) {
            i8_2.style.opacity = 1;
        } else if (y < i7.offsetTop+i7.clientHeight) {
            i8_2.style.opacity = 0;
        }
    }, interval)
}