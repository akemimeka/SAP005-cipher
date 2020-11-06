import cipher from './cipher.js';

const getOriginalMessage = document.getElementById("original-message");
const getOffsetNumber = document.getElementById("offset-number");
const getTranslatedMessage = document.getElementById("translated-message");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");

encryptButton.addEventListener("click", event => {
  event.preventDefault();
  const originalMessage = getOriginalMessage.value;
  const offsetNumber = Number(getOffsetNumber.value);

  const encryptedMessage = cipher.encode(offsetNumber, originalMessage);
  getTranslatedMessage.innerHTML = encryptedMessage;
});

decryptButton.addEventListener("click", event => {
  event.preventDefault();
  const originalMessage = getOriginalMessage.value;
  const offsetNumber = Number(getOffsetNumber.value);

  const decryptedMessage = cipher.decode(offsetNumber, originalMessage);
  getTranslatedMessage.innerHTML = decryptedMessage;
});