var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const PriceBuilder = require('../../../lib/solutions/CHK/priceBuilder');

describe('CHK challenge: PriceBuilder class', function() {
	it('builds basic price list', function() {
	    const builder = new PriceBuilder({ A: 15, B: 30 })
        builder.addStandardOffer({ items: 'AA', price: 20 })
        assert.equal(builder.buildPricingStrategy().length, 3)
	});

    it('calculates discounts correctly', function() {
	    const builder = new PriceBuilder({ A: 15, B: 30 })
        assert.equal(builder.calculateDiscount({ items: 'AA', price: 20 }), 10)
    });
});
