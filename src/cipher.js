const cipher = {
  encode: function (offsetNumber, originalMessage) {
    const noOffsetNumber = !offsetNumber;
    const noOriginalMessage = !originalMessage;
    const negativeOffsetNumber = offsetNumber < 0;
    const uppercaseACharCode = 65;
    const uppercaseZCharCode = 90;
    const lowercaseACharCode = 97;
    const lowercaseZCharCode = 122;
    const alphabetLetters = 26;
    let finalMessage = "";

    if (noOffsetNumber || noOriginalMessage) {
      throw new TypeError("User didn't insert original message, offset number or both.", "cipher.js", 8);
    } else {
      for (const character of originalMessage) {
        const characterCharCode = character.charCodeAt();

        const characterIsUppercase = (characterCharCode >= uppercaseACharCode) && (characterCharCode <= uppercaseZCharCode)
        const characterIsLowercase = (characterCharCode >= lowercaseACharCode) && (characterCharCode <= lowercaseZCharCode)

        if (negativeOffsetNumber) {
          if (characterIsUppercase) {
            const uppercaseCharCode = ((characterCharCode - uppercaseZCharCode + offsetNumber) % alphabetLetters) + uppercaseZCharCode;
            const encryptedUppercase = String.fromCharCode(uppercaseCharCode);
            finalMessage += encryptedUppercase;
          } else if (characterIsLowercase) {
            const lowercaseCharCode = ((characterCharCode - lowercaseZCharCode + offsetNumber) % alphabetLetters) + lowercaseZCharCode;
            const encryptedLowercase = String.fromCharCode(lowercaseCharCode);
            finalMessage += encryptedLowercase;
          } else {
            finalMessage += character;
          }
        } else {
          if (characterIsUppercase) {
            const uppercaseCharCode = ((characterCharCode - uppercaseACharCode + offsetNumber) % alphabetLetters) + uppercaseACharCode;
            const encryptedUppercase = String.fromCharCode(uppercaseCharCode);
            finalMessage += encryptedUppercase;
          } else if (characterIsLowercase) {
            const lowercaseCharCode = ((characterCharCode - lowercaseACharCode + offsetNumber) % alphabetLetters) + lowercaseACharCode;
            const encryptedLowercase = String.fromCharCode(lowercaseCharCode);
            finalMessage += encryptedLowercase;
          } else {
            finalMessage += character;
          }
        }
      }
    }
    return finalMessage;
  },

  decode: function (offsetNumber, originalMessage) {
    const noOriginalMessage = !originalMessage;
    const noOffsetNumber = !offsetNumber;
    const negativeOffsetNumber = offsetNumber < 0;
    const uppercaseACharCode = 65;
    const uppercaseZCharCode = 90;
    const lowercaseACharCode = 97;
    const lowercaseZCharCode = 122;
    const alphabetLetters = 26;
    let finalMessage = "";

    if (noOffsetNumber || noOriginalMessage) {
      throw new TypeError("User didn't insert original message, offset number or both.", "cipher.js", 66);
    } else {
      for (const character of originalMessage) {
        const characterCharCode = character.charCodeAt();

        const characterIsUppercase = (characterCharCode >= uppercaseACharCode) && (characterCharCode <= uppercaseZCharCode)
        const characterIsLowercase = (characterCharCode >= lowercaseACharCode) && (characterCharCode <= lowercaseZCharCode)

        if (negativeOffsetNumber) {
          if (characterIsUppercase) {
            const uppercaseCharCode = ((characterCharCode - uppercaseACharCode - offsetNumber) % alphabetLetters) + uppercaseACharCode;
            const encryptedUppercase = String.fromCharCode(uppercaseCharCode);
            finalMessage += encryptedUppercase;
          } else if (characterIsLowercase) {
            const lowercaseCharCode = ((characterCharCode - lowercaseACharCode - offsetNumber) % alphabetLetters) + lowercaseACharCode;
            const encryptedLowercase = String.fromCharCode(lowercaseCharCode);
            finalMessage += encryptedLowercase;
          } else {
            finalMessage += character;
          }
        } else {
          if (characterIsUppercase) {
            const uppercaseCharCode = ((characterCharCode - uppercaseZCharCode - offsetNumber) % alphabetLetters) + uppercaseZCharCode;
            const encryptedUppercase = String.fromCharCode(uppercaseCharCode);
            finalMessage += encryptedUppercase;
          } else if (characterIsLowercase) {
            const lowercaseCharCode = ((characterCharCode - lowercaseZCharCode - offsetNumber) % alphabetLetters) + lowercaseZCharCode;
            const encryptedLowercase = String.fromCharCode(lowercaseCharCode);
            finalMessage += encryptedLowercase;
          } else {
            finalMessage += character;
          }
        }
      }
    }
    return finalMessage;
  }
};

export default cipher;
