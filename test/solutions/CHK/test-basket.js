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
        assert.equal(basket.skuCounts['A'], 1)
        assert.equal(basket.skuCounts['B'], 0)
        assert.equal(basket.skuCounts['C'], 1)
    })

    it('can be fully emptied', function() {
        const basket = new Basket('AABC')
        basket.remove('AB')
        basket.remove('A')
        basket.remove('C')
        assert(basket.isEmpty())
    })

    it('correctly identifies subsets', function() {
        const basket = new Basket('AABC')
        assert(basket.contains('AB'))
        assert(basket.contains('AA'))
        assert(!basket.contains('AAA'))
        assert(!basket.contains('ABF'))
    })
});