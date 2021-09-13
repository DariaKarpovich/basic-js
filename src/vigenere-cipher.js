import { NotImplementedError } from '../extensions/index.js';
export default class VigenereCipheringMachine {
  constructor(reverser = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.reverser = reverser;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw CustomError;
    }

  let encryptMessage = '';
  let newMes = message.toUpperCase();
  let newKey = key.toUpperCase().repeat(Math.ceil(newMes.length / key.length));
  let j = 0;

  for (let i = 0; i < newMes.length; i++) {
     if (newMes.charCodeAt(i) > 64 && newMes.charCodeAt(i) < 91) {
      let sumIndex = this.alphabet.indexOf(newMes[i]) + this.alphabet.indexOf(newKey[i - j]);
          if (sumIndex >= 26) {
              encryptMessage += this.alphabet[sumIndex - 26]
          } else {
              encryptMessage += this.alphabet[sumIndex]
          }
      } else {
          j++;
          encryptMessage += newMes[i];
      }
  }
  return this.reverser ? encryptMessage : encryptMessage.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw CustomError;
    }

  let decryptMessage = '';
  let newMes = message.toUpperCase();
  let newKey = key.toUpperCase().repeat(Math.ceil(newMes.length / key.length));
  let j = 0;

  for (let i = 0; i < newMes.length; i++) {
      if (newMes.charCodeAt(i) > 64 && newMes.charCodeAt(i) < 91) {
       let sumIndex = this.alphabet.indexOf(newMes[i]) - this.alphabet.indexOf(newKey[i - j]);
           if (sumIndex < 0) {
              decryptMessage += this.alphabet[sumIndex + 26]
           } else {
              decryptMessage += this.alphabet[sumIndex]
           }
       } else {
           j++;
           decryptMessage += newMes[i];
       }
   }
   return this.reverser ? decryptMessage : decryptMessage.split("").reverse().join("");
  }
}
