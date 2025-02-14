// script.js
document.getElementById('yesButton').addEventListener('click', function () {
  const responseDiv = document.getElementById('response');
  responseDiv.textContent = 'Yay! 💖';
  createHearts();
  createRoses();
  createBouquets();
  createCandy();

  // Remove animations after 30 seconds
  setTimeout(() => {
    removeAnimations();
  }, 30000); // 30 seconds = 30000 milliseconds
});

document.getElementById('noButton').addEventListener('click', function () {
  const responseDiv = document.getElementById('response');
  responseDiv.textContent = 'Aww... 💔';
  createBrokenHearts();

  // Remove animations after 30 seconds
  setTimeout(() => {
    removeAnimations();
  }, 30000); // 30 seconds = 30000 milliseconds
});

function createHearts() {
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    document.body.appendChild(heart);
  }
}

function createRoses() {
  for (let i = 0; i < 3; i++) {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.innerHTML = '🌹';
    rose.style.left = `${Math.random() * 100}vw`;
    rose.style.top = `${Math.random() * 100}vh`;
    rose.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    document.body.appendChild(rose);
  }
}

function createBouquets() {
  for (let i = 0; i < 2; i++) {
    const bouquet = document.createElement('div');
    bouquet.classList.add('bouquet');
    bouquet.innerHTML = '💐';
    bouquet.style.left = `${Math.random() * 100}vw`;
    bouquet.style.top = `${Math.random() * 100}vh`;
    bouquet.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    document.body.appendChild(bouquet);
  }
}

function createCandy() {
  for (let i = 0; i < 4; i++) {
    const candy = document.createElement('div');
    candy.classList.add('candy');
    candy.innerHTML = '🍬';
    candy.style.left = `${Math.random() * 100}vw`;
    candy.style.top = `${Math.random() * 100}vh`;
    candy.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    document.body.appendChild(candy);
  }
}

function createBrokenHearts() {
  for (let i = 0; i < 5; i++) {
    const brokenHeart = document.createElement('div');
    brokenHeart.classList.add('heart');
    brokenHeart.innerHTML = '💔';
    brokenHeart.style.left = `${Math.random() * 100}vw`;
    brokenHeart.style.top = `${Math.random() * 100}vh`;
    brokenHeart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    document.body.appendChild(brokenHeart);
  }
}

function removeAnimations() {
  // Remove all elements with the classes 'heart', 'rose', 'bouquet', and 'candy'
  const animations = document.querySelectorAll('.heart, .rose, .bouquet, .candy');
  animations.forEach((animation) => {
    animation.remove();
  });
}