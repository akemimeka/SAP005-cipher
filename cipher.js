const cipher = {
  encode: function (offsetNumber, originalMessage) {
    let finalMessage = "";
    const noOffsetNumber = !offsetNumber;
    const noOriginalMessage = !originalMessage;

    if (noOffsetNumber || noOriginalMessage) {
      throw new TypeError();
    } else {
      for (const letter of originalMessage) {
        const letterCharCode = letter.charCodeAt();
        const letterRealNumber = letterCharCode - 65;
        const alphabetLetters = 26;
        const newLetterCharCode = ((letterRealNumber + offsetNumber) % alphabetLetters) + 65;
        const encryptedLetter = String.fromCharCode(newLetterCharCode);

        finalMessage += encryptedLetter;
      }
      return finalMessage;
    }
  },

  decode: function (offsetNumber, originalMessage) {
    let finalMessage = "";

    if (!offsetNumber || !originalMessage) {
      throw new TypeError();
    } else {
      for (const letter of originalMessage) {
        const letterCharCode = letter.charCodeAt();
        const letterRealNumber = letterCharCode + 65;
        const alphabetLetters = 26;
        const newLetterCharCode = ((letterRealNumber - offsetNumber) % alphabetLetters) + 65;
        const encryptedLetter = String.fromCharCode(newLetterCharCode);

        finalMessage += encryptedLetter;
      }
    }
    return finalMessage;
  }
};

export default cipher;
