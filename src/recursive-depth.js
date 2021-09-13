import { NotImplementedError } from '../extensions/index.js';
export default class DepthCalculator {
  calculateDepth(arr) {  
    if (Array.isArray(arr)) return 1 + Math.max(...(arr.length ? arr.map(t => this.calculateDepth(t)) : [0]))
    else return 0
} 
}
