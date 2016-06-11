'use strict'

const _ = require('lodash')

const fib = {

  getFibArray (length) {
    let twoBack = 0;
     let oneBack = 0;
     let current = 1;

     const result =  _.times(length, n => {
     if (n > 1) {
        twoBack = oneBack;
      }
      oneBack = current;
      current = current + twoBack;
      return current;
    })
    return result;
  }
}
module.exports = fib;
