import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(finalActivity) {
  let result = 0;
    if (+finalActivity <= 0 || +finalActivity >= 20 || typeof(finalActivity) !== 'string' || !(/^[0-9]+$/).test(finalActivity)) {
      return false;
    } else {
      result = Math.log(MODERN_ACTIVITY / Number(finalActivity)) / (0.693 / HALF_LIFE_PERIOD);
    }
    return Math.ceil(result), true;
}
