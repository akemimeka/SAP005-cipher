import cipher from './cipher.js';

const getOriginalMessage = document.getElementById('original-message');
const getOffsetNumber = document.getElementById('offset-number');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');

encryptButton.addEventListener('click', event => {
  event.preventDefault();
  const originalMessage = getOriginalMessage.value;
  const offsetNumber = Number(getOffsetNumber.value);

  cipher.encode(originalMessage, offsetNumber);
});