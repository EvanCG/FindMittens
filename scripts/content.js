
  const body = document.querySelector('body');
  const catImage = document.createElement('img');
  // Use the same styling as the publish information in an article's header
  catImage.setAttribute('src', 'https://i.imgur.com/1xic2t9.png');

  const catWidth = 20;

  let widthMax = body.offsetWidth - catWidth;
  let heightMax = body.offsetHeight - catWidth;

  let randomWidth = Math.floor(Math.random() * widthMax);
  let randomHeight = Math.floor(Math.random() * heightMax);

  catImage.style.width = `${catWidth}px`;
  catImage.style.position = 'absolute';
  catImage.style.left = `${randomWidth}px`;
  catImage.style.top = `${randomHeight}px`;
  catImage.setAttribute('alt', `${randomWidth} and ${randomHeight}`);
  catImage.style.zIndex = '9000'
  catImage.onclick = () => {
    alert('You found Mittens!')
    catImage.remove();
  };

  body.appendChild(catImage);

