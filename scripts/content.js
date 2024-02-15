
  /**
   * Regular expression to find all "words" in a string.
   *
   * Here, a "word" is a sequence of one or more non-whitespace characters in a row. We don't use the
   * regular expression character class "\w" to match against "word characters" because it only
   * matches against the Latin alphabet. Instead, we match against any sequence of characters that
   * *are not* a whitespace characters. See the below link for more information.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   */
  const catImage = document.createElement('img');
  // Use the same styling as the publish information in an article's header
  catImage.setAttribute('src', 'https://i.pinimg.com/564x/87/dc/34/87dc3498f492d74f452a96d6091f24a5.jpg');
  
  const body = document.querySelector('body');
  body.appendChild(catImage);

