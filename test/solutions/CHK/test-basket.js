var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const Basket = require('../../../lib/solutions/CHK/basket');

describe('CHK challenge: basket class', function() {
	it('does not throw when initialized with valid input', function() {
	    assert.doesNotThrow(() => new Basket('AAB'));
	});

    it('is not empty when initialized with items', function() {
        const basket = new Basket('AAB')
        assert.equal(basket.isEmpty(), false)
    })

    it('correctly handles valid remove request', function() {
        const basket = new Basket('AABC')
        basket.remove('AB')
        assert.equal(basket.getItemTypes(), 'AC')
    })

    it('can be fully emptied', function() {
        const basket = new Basket('AABC')
        basket.remove('AB')
        basket.remove('A')
        basket.remove('C')
        assert.equal(basket.isEmpty(), true)
    })
});