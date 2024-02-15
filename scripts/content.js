const body = document.querySelector('body');

// calculate the width of the cat and assign a random starting point
const catWidth = 20;
let widthMax = body.offsetWidth - catWidth;
let heightMax = body.offsetHeight - catWidth;
let randomWidth = Math.floor(Math.random() * widthMax);
let randomHeight = Math.floor(Math.random() * heightMax);

// Create and style mittens, positioning her in a random part of the body.
const catImage = document.createElement('img');
catImage.setAttribute('src', 'https://i.imgur.com/1xic2t9.png');
catImage.style.width = `${catWidth}px`;
catImage.style.position = 'absolute';
catImage.style.left = `${randomWidth}px`;
catImage.style.top = `${randomHeight}px`;
catImage.setAttribute('alt', `${randomWidth} and ${randomHeight}`);
catImage.style.zIndex = '9000';

// Create a success alert, initially set to hidden
const alertDiv = document.createElement('div');
alertDiv.setAttribute('class', 'mittensAlert');
alertDiv.innerText = 'Incredible job! You found Mittens!';
const alertSpan = document.createElement('span');
alertSpan.setAttribute('class', 'closeButton');

alertSpan.innerText = '×';
alertDiv.prepend(alertSpan);
alertSpan.onclick = () => document.querySelector('.mittensAlert').remove();

// style the custom alert div
alertDiv.style.padding = '20px';
alertDiv.style.backgroundColor = '#04AA6D';
alertDiv.style.color = 'white';
alertDiv.style.fontWeight = 'bolder';
alertDiv.style.position = 'fixed';
alertDiv.style.width = '65%';
alertDiv.style.margin = 'auto';
alertDiv.style.top = '20%';
alertDiv.style.left = '50%';
alertDiv.style.zIndex = '9000';
alertDiv.style.transform = 'translate(-50%, -50%)';

// style the close button
alertSpan.style.marginLeft = '15px';
alertSpan.style.color = 'white';
alertSpan.style.fontWeight = 'bold';
alertSpan.style.float = 'right';
alertSpan.style.fontSize = '22px';
alertSpan.style.lineHeight = '20px';
alertSpan.style.cursor = 'pointer';
alertSpan.style.transition = '0.3s';

// determine the behavior if a user clicks on Mittens
catImage.onclick = () => {
  let currentCount;
  // get the current number of finds
  chrome.storage.sync.get(['count']).then((result) => {
    currentCount = result.count;

    if (currentCount === undefined) {
      currentCount = 1;
    } else {
      currentCount++;
    }

    // update the current number of finds
    chrome.storage.sync.set({ count: currentCount });
  });

  body.appendChild(alertDiv);
  catImage.remove();
};

// add elements to the DOM
body.appendChild(catImage);
