import { NotImplementedError } from '../extensions/index.js';

export default function getCommonCharacterCount(s1, s2) {
  let counter = 0;

  for (let i = 0; i < s2.length; i++) {
    if (s1.indexOf(s2[i]) !== -1) {
      counter += 1;
      s1.replace(s2[i],'');
    } 
  }
  return counter;
}
