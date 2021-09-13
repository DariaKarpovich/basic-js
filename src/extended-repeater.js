import { NotImplementedError } from '../extensions/index.js';

export default function repeater(str, options) {
  if (typeof(str) !== 'string') String(str);
  let newStr = str;

  let separator = options.hasOwnProperty("separator") ? options.separator : '+';
  let additionSeparator = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : '|';
  let repeatTimes = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 0;
  let additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 0;

  if (repeatTimes === undefined) repeatTimes = 1;
  if (additionRepeatTimes === undefined) additionRepeatTimes = 1;

  if (repeatTimes > 0) {

    if (options.addition !== '' && additionRepeatTimes > 0) {
      if (additionRepeatTimes === 1) {
        newStr += options.addition
        } else {
          newStr += `${options.addition}`;
          for (let j = 1; j < additionRepeatTimes; j++) {
            newStr += `${additionSeparator}${options.addition}`;
        }
      }
    str = newStr;
    }

    for (let i = 1; i < repeatTimes; i++) {
      newStr += `${separator}${str}`;
      } 
  } else return newStr;
  
  return newStr;
}
