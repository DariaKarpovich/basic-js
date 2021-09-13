import { NotImplementedError } from '../extensions/index.js';

export default function transform(arr) {
  let newArray = [];
  let transform = false;

  if (arr.length === 0) return [];

  if (!(arr instanceof Array)) {
    throw CustomError;
  }
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i === newArray.length - 1) break;
        transform = true;
        i++;
        break;
      case '--double-next':
        if (i === newArray.length - 1) break;
        newArray.push(arr[i + 1]);
        break;
      case '--discard-prev':
        if (i === 0) break;
        if (transform) {
          transform = false;
          break;
        }
        newArray.pop();
        break;
      case '--double-prev':
        if (i === 0) break;
        if (transform) {
          transform = false;
          break;
        }
        newArray.push(arr[i - 1]);
        break;
      default:
        newArray.push(arr[i]);
        transform = false;
        break;
    }
  }
  if (newArray[newArray.length - 1] === undefined) newArray.pop();
  return newArray;
}
