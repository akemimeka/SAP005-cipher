import cipher from './cipher.js';

const originalMessage = document.getElementById('original-message');
const offsetNumber = document.getElementById('offset-number');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');

encryptButton.addEventListener('click', event => {
  event.preventDefault();
  const getOriginalMessage = originalMessage.value;
  const getOffsetNumber = offsetNumber.value;

  cipher.encode();
});