
const chai = require('chai');
const assert = chai.assert;
const math = require('/math'); 

describe('Math functions', function () {
  it('should add two numbers', function () {
    const result = math.add(2, 3);
    console.log('Result of addition:', result);
    assert.equal(result, 5);
  });

  it('should subtract two numbers', function () {
    const result = math.subtract(5, 3);
    console.log('Result of subtraction:', result);
    assert.equal(result, 2);
  });
});
