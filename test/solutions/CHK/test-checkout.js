var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: supermarket checkout', function() {
	it('should return the price for no items', function() {
	    assert.equal(checkout(''), 0);
	});

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

	it('should take the bigger discount for five As', function() {
		assert.equal(checkout('AAAAA'), 200)
	})

	it('should take the bigger discount for six As', function() {
		assert.equal(checkout('AAAAAA'), 250)
	})

	it('should give one B for free with two Es', function() {
		assert.equal(checkout('EEB'), 80)
	})

	it('should give one B for free with two Es even if 2B discount can be taken', function() {
		assert.equal(checkout('EEBB'), 110)
	})

	it('should give two free Bs with four Es', function() {
		assert.equal(checkout('EEEEBB'), 160)
	})

    it('should return -1 for invalid input', function() {
	    assert.equal(checkout('#'), -1);
	});

    it('should return -1 for invalid input at the end of the string', function() {
	    assert.equal(checkout('ABCA#'), -1);
	});
});