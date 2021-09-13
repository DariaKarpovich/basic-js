import { NotImplementedError } from '../extensions/index.js';

export default function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2,disksNumber) - 1;
   let seconds = Math.trunc(turns/turnsSpeed * 60 * 60);
   return {turns, seconds};
}
