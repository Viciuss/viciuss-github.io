const sky = document.getElementById('sky');
const numStars = 50;


  const splash = document.getElementById("abertura");
  const splashText = splash.querySelector("h1");
  const messages = [
    "Olá!",
    "Eu me chamo Vinicius Costa",
    "Seja bem-vindo ao meu portfólio",
  ];
  let index = 0;

  function fadeMessage() {

    splashText.classList.remove("in");
    splashText.classList.add("fade");


    setTimeout(() => {
      splashText.textContent = messages[index];
      splashText.classList.add("in");
      splashText.classList.remove("fade"); 

      index++;

      if (index < messages.length) {

        setTimeout(fadeMessage, 1000);
      } else {

        setTimeout(() => {
          splash.style.opacity = "0";
          splash.addEventListener("transitionend", () => {
            splash.style.display = "none";
            document.getElementById("main").style.display = "block";
            document.documentElement.style.overflowY = "auto";
            document.body.style.overflowY = "auto";
          });
        }, 1000);
      }
    }, 500);
  }

  fadeMessage();


// Carrossel hab

const track = document.querySelector('#car-track');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

function updateActive() {
  const items = document.querySelectorAll('.item-Car');
  items.forEach((item, index) => {
    item.classList.remove('principal');
    if (index === 1) item.classList.add('principal'); 
  });
}

function rotateNext() {
  const first = track.firstElementChild;
  track.appendChild(first);
  updateActive();
}

function rotatePrev() {
  const last = track.lastElementChild;
  track.insertBefore(last, track.firstElementChild); 
  updateActive();
}

next.addEventListener('click', rotateNext);
prev.addEventListener('click', rotatePrev);

updateActive();






















for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * 3 + 1;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${y}px`;
  star.style.left = `${x}px`;
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;

  sky.appendChild(star);
}


function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
  

    star.style.top = `${Math.random() * window.innerHeight * 0.5}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
  
    sky.appendChild(star);
  

    setTimeout(() => {
      star.remove();
    }, 1000);
  }
  

  setInterval(() => {
    if (Math.random() < 0.5) { 
      createShootingStar();
    }
  }, 2000);
  
