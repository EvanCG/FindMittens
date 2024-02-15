
chrome.storage.sync.get(['count']).then((result) => {
  let currentCount = result.count ;
  if (currentCount !== undefined) {
    const counterFirstText = document.createElement('p');
    counterFirstText.innerText = `You have found Mittens`;

    const countSpan = document.createElement('p');
    countSpan.innerText = currentCount;
    countSpan.setAttribute('id', 'countSpan');


    const counterSecondText = document.createElement('p');
    counterSecondText.innerText = `times! Nice job!`;

    document.querySelector('body').appendChild(counterFirstText);
    document.querySelector('body').appendChild(countSpan);
    document.querySelector('body').appendChild(counterSecondText);
  }
});

// if ther eis a value in current count, create an element with the count, and display it
