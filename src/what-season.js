import { NotImplementedError } from '../extensions/index.js';

export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } 

  if (Object.values(date).length !== 0) {
    throw CustomError;
  } 

  let monthIndex = date.getMonth();

  if (monthIndex === 0 || monthIndex === 1 || monthIndex === 11) return 'winter';
  if (monthIndex === 2 || monthIndex === 3 || monthIndex === 4) return 'spring';
  if (monthIndex === 5 || monthIndex === 6 || monthIndex === 7) return 'summer';
  if (monthIndex === 8 || monthIndex === 9 || monthIndex === 10) return 'autumn';
}
