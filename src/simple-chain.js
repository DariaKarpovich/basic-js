import { NotImplementedError } from '../extensions/index.js';

export default {
  getLength() {
    let len = this.chain.length;
    return len;
  },
  addLink(value) {
    this.chain[this.chain.length] = value;
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position > this.chain.length || position < 1) {
      this.chain = [];
      throw CustomError;
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishResult = `( ${this.chain[0]} )`;
    for (let i = 1; i < this.chain.length; i++) {
      finishResult = `${finishResult}~~( ${this.chain[i]} )`
    }
    this.chain = [];
    return finishResult;
  }
};
