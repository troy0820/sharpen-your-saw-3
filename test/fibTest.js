var assert = require('assert');
var fib = require('../lib/fib');


describe('this should test some code',function() {
  it('should work with the first 5 numbers', function() {
    assert.deepEqual(fib.getFibArray(5),[1,1,2,3,5]);
  })

  it('should work with with 0 numbers',function() {
    assert.deepEqual(fib.getFibArray(0),[]);
  })

  it('should not print the zero first either', function() {
    assert.notEqual(fib.getFibArray(5),[0,1,1,2,3]);
  })
})
