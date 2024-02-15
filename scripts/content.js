
  const body = document.querySelector('body');
  const catImage = document.createElement('img');
  // Use the same styling as the publish information in an article's header
  catImage.setAttribute('src', 'https://i.imgur.com/Ia9iet9.png');


  let widthMax = body.offsetWidth - 20;
  let heightMax = body.offsetHeight - 20;

  let randomWidth = Math.floor(Math.random() * widthMax);
  let randomHeight = Math.floor(Math.random() * heightMax);

  catImage.style.width = '20px';
  catImage.style.position = 'absolute';
  catImage.style.left = `${randomWidth}px`;
  catImage.style.top = `${randomHeight}px`;
  catImage.setAttribute('alt', `${randomWidth} and ${randomHeight}`);
  catImage.style.zIndex = '9000'
  catImage.onclick = () => alert('You found the cat!');

  body.appendChild(catImage);

