const sky = document.getElementById('sky');
const numStars = 50;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  const size = Math.random() * 3 + 1; // Tamanho entre 1 e 4px
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
  
    // Posição inicial aleatória no topo direito
    star.style.top = `${Math.random() * window.innerHeight * 0.5}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
  
    sky.appendChild(star);
  
    // Remover após a animação
    setTimeout(() => {
      star.remove();
    }, 1000);
  }
  
  // Criar estrelas cadentes aleatórias a cada 2~5 segundos
  setInterval(() => {
    if (Math.random() < 0.5) { // probabilidade de aparecer
      createShootingStar();
    }
  }, 2000);
  
