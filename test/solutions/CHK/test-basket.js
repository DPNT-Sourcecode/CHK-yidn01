var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: basket class', function() {
	it('should return the price for one A', function() {
	    assert.equal(checkout('A'), 50);
	});

    it('should return the price for one A and one B', function() {
	    assert.equal(checkout('AB'), 80);
	});

    it('should return the discounted price for three As', function() {
	    assert.equal(checkout('AAA'), 130);
	});

    it('should return the discounted price for four As and misc others', function() {
	    assert.equal(checkout('ABAACA'), 230);
	});

    it('should return -1 for invalid input', function() {
	    assert.equal(checkout('E'), -1);
	});

    it('should return -1 for invalid input at the end of the string', function() {
	    assert.equal(checkout('ABCAE'), -1);
	});
});