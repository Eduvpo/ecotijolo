const menuToggle = document.createElement('div');
menuToggle.innerHTML = "☰";
menuToggle.classList.add('menu-toggle');
document.querySelector('header').appendChild(menuToggle);

const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.getElementById('formContato').addEventListener('submit', function(e){
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá, meu nome é ${nome}. ${mensagem}`;

  window.open(`https://wa.me/5561992520465?text=${encodeURIComponent(texto)}`, '_blank');
});

// SCROLL REVEAL
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if(top < trigger){
      card.classList.add('show');
    }
  });
});