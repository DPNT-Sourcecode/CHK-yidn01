'use strict';
const Basket = require('../../../lib/solutions/CHK/basket');
const PRICE_LIST = require('../../../lib/solutions/CHK/prices');

function getBestPrice(basket, priceList) {
    let result = 0
    let i = 0

    while (!basket.isEmpty()) {
        // If the basket is not empty but there are no offers left,
        // it means we have invalid items.
        // (Failing slow in case of invalid inputs which might not be optimal.)
        if (i >= priceList.length) {
            return -1
        }

        // Apply best offer if possible
        const bestOffer = priceList[i]
        if (basket.contains(bestOffer.items)) {
            basket.remove(bestOffer.items)
            result += bestOffer.price
        } else {
            // Move on to the next offer
            i++
        }
    }

    return result
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const basket = new Basket(skus)

    return getBestPrice(basket, PRICE_LIST)
};