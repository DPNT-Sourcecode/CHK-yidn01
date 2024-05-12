var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: supermarket checkout', function() {
	it('should return the price for one A', function() {
	    assert.equal(checkout('A'), 50);
	});

    it('should return the price for one A and one B', function() {
	    assert.equal(checkout('AB'), 80);
	});
});