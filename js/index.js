//---Refresh dimensions on resize---//
window.onresize = function() {
  popupFormPosition();
  removeBr();
}

//---Navigation bar scroll---//
var prevScroll = window.pageYOffset;
var topbar = document.querySelector('#topbar');

window.addEventListener('scroll', navScroll);
function navScroll() {
  var currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    topbar.style.top = '0';
  }
  else {
    topbar.style.top = '-96px';
  }
  prevScroll = currentScroll;
}

//---Pop-up form position---//
var body = document.querySelector('body');
var overlay = document.querySelector('.overlay');
var popupForm = document.querySelector('.popup_form');
var popupFormInputs = document.querySelectorAll('.popup_form .form input');
var popupFormTextArea = document.querySelector('.popup_form .form textarea');
var popupFormButton = document.querySelector('.popup_form .form button');

function popupFormPosition() {
  //---Pop-up form small device landscape mode---//
  if (screen.height <= 600 && screen.width > screen.height) {
    popupFormInputs.forEach(input => {
      input.style.lineHeight = (window.innerHeight - 48 - 112) / 6 + 'px';
    })
    popupFormTextArea.style.height = (window.innerHeight - 48 - 112) / 3 + 'px';
    popupFormButton.style.lineHeight = (window.innerHeight - 48 - 112) / 6 + 'px';
  }

  if (screen.width < screen.height) {
    popupFormInputs.forEach(input => {
      input.style.lineHeight = '36px';
    })
  }
  
  window.setTimeout(function() {
    popupForm.style.top = (window.innerHeight - popupForm.offsetHeight) / 2 + 'px';
    popupForm.style.left = (window.innerWidth - popupForm.offsetWidth) / 2 + 'px';
  }, 300);
}

popupFormPosition();

//---Pop-up form open---//
var contactBtn = document.querySelector('.contact');
var buttons = document.querySelectorAll('#container .button');
let popupOpen = false;

contactBtn.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  topbar.style.zIndex = '8';
  overlay.classList.add('open');
  overlay.style.background = 'rgba(0, 0, 0, 0.64)';
  popupForm.classList.add('open');
  popupOpen = true;
})

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    body.style.overflow = 'hidden';
    topbar.style.zIndex = '8';
    overlay.classList.add('open');
    overlay.style.background = 'rgba(0, 0, 0, 0.64)';
    popupForm.classList.add('open');
    popupOpen = true;
  })
}

overlay.addEventListener('click', () => {
  body.style.overflow = 'auto';
  topbar.style.zIndex = '20';
  overlay.classList.remove('open');
  overlay.style.background = 'rgba(0, 0, 0, 0.32)';
  popupForm.classList.remove('open');
  popupOpen = false;
})

//---Remove line breaks---//
var h2 = document.querySelectorAll('h2');
var h5 = document.querySelectorAll('h5');

function removeBr() {
  if (screen.width > 768) {
    h2.forEach (i => {
      while (i.innerHTML.search('<br>') > -1) {
        i.innerHTML = i.innerHTML.replace('<br>',' ');
      }
    })
  }

  if (screen.width <= 768 || screen.height <= 600) {
    h5.forEach (i => {
      while (i.innerHTML.search('<br>') > -1) {
        i.innerHTML = i.innerHTML.replace('<br>',' ');
      }
    })
  }
}

removeBr();

//---Image change animation---//
// var images1 = document.querySelectorAll('.outerbox3 .innerbox2 .box .image img');
// imageN = 0;

// function imageChange() {
//   setInterval(function() {
//     imageN++;
//     if (imageN > images1.length - 1) {
//       imageN = 0;
//     }

//     images1.forEach(i => {
//       i.classList.remove('show');
//     });

//     images1[imageN].classList.add('show');

//   }, 3000)
// }

// imageChange();

//---Text change animation---//
var txt = document.querySelector('span.txt');
txtArray = ["simple.", "clean.", "intuitive.", "inspiring."];
txtN = 0;

function textChange() {
  setInterval(function() {
    txtN++;
    if (txtN > txtArray.length - 1) {
      txtN = 0;
    }

    txt.innerHTML = txtArray[txtN];

  }, 2000)
}

textChange();