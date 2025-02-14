// script.js
document.getElementById('valentineButton').addEventListener('click', function () {
    const response = confirm('Will you be my Valentine?');
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '';
  
    if (response) {
      responseDiv.textContent = 'Yay! 💖';
      createHearts();
    } else {
      responseDiv.textContent = 'Aww... 💔';
      createBrokenHearts();
    }
  });
  
  function createHearts() {
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart-animation');
      heart.innerHTML = '💖';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
      document.body.appendChild(heart);
    }
  }
  
  function createBrokenHearts() {
    for (let i = 0; i < 5; i++) {
      const brokenHeart = document.createElement('div');
      brokenHeart.classList.add('heart-animation');
      brokenHeart.innerHTML = '💔';
      brokenHeart.style.left = `${Math.random() * 100}vw`;
      brokenHeart.style.top = `${Math.random() * 100}vh`;
      brokenHeart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
      document.body.appendChild(brokenHeart);
    }
  }