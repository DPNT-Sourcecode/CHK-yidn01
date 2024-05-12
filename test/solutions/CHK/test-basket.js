var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const Basket = require('../../../lib/solutions/CHK/basket');

describe('CHK challenge: basket class', function() {
	it('should be initializable with valid input', function() {
	    assert.doesNotThrow(() => new Basket('AAB'));
	});

    it('is not empty when initialized with items', function() {
        const basket = new Basket('AAB')
        assert.equal(basket.isEmpty(), false)
    })
});
