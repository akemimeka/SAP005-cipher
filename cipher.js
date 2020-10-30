// const originalAlphabet = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 8, K: 9, L: 10, M: 11, N: 12, O: 13, P: 14, Q: 15, R: 16, S: 17, T: 18, U: 19, V: 20, W: 21, X: 22, Y: 23, Z: 24 };

// const originalAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const cipher = {
  encode: function(offsetNumber, originalMessage) {
    let finalMessage = "";
    const uppercaseOriginalMessage = String(originalMessage).toUpperCase();

    for (const letter of uppercaseOriginalMessage) {
      const letterCharCode = letter.charCodeAt();
      const letterRealNumber = letterCharCode - 65;
      const alphabetLetters = 26;
      const newLetterCharCode = ((letterRealNumber + offsetNumber) % alphabetLetters) + 65;
      const encryptedLetter = String.fromCharCode(newLetterCharCode);
      
      finalMessage += encryptedLetter;
    }
      return finalMessage;
  },

  decode: function(offsetNumber, originalMessage) {
    let finalMessage = "";

    for (const letter of originalMessage) {
      const letterCharCode = letter.charCodeAt();
      const letterRealNumber = letterCharCode + 65;
      const alphabetLetters = 26;
      const newLetterCharCode = ((letterRealNumber - offsetNumber) % alphabetLetters) + 65;
      const encryptedLetter = String.fromCharCode(newLetterCharCode);
      
      finalMessage += encryptedLetter;
    }
      return finalMessage;
  }
};

export default cipher;
