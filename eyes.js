// Create two "eye" elements and add them to the document
for (let i = 0; i < 2; i++) {
  const eye = document.createElement('div');
  eye.classList.add('ball');
  document.body.appendChild(eye);
}

const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;

    if (i === 1) {
      balls[i].style.left = (100 - parseInt(x)) + '%'; // Reverse the x position for the second eye
    }

    balls[i].style.transform = 'translate(-' + x + ',-' + y + ')';
  }
};
