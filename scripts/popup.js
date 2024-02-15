
chrome.storage.sync.get(['count']).then((result) => {
  let currentCount = result.count ;
  if (currentCount !== undefined) {
    const counterFirstText = document.createElement('p');
    counterFirstText.innerText = `You have found Mittens`;

    const countSpan = document.createElement('p');
    countSpan.innerText = currentCount;
    countSpan.setAttribute('id', 'countSpan');


    const counterSecondText = document.createElement('p');
    counterSecondText.innerText = `time${(currentCount > 1) ? 's' : ''}! Nice job!`;

    document.querySelector('#popup').appendChild(counterFirstText);
    document.querySelector('#popup').appendChild(countSpan);
    document.querySelector('#popup').appendChild(counterSecondText);
  }
});
