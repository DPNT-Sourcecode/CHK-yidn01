'use strict';
const Basket = require('../../../lib/solutions/CHK/basket');

/*
+------+-------+------------------------+
| Item | Price | Special offers         |
+------+-------+------------------------+
| A    | 50    | 3A for 130, 5A for 200 |
| B    | 30    | 2B for 45              |
| C    | 20    |                        |
| D    | 15    |                        |
| E    | 40    | 2E get one B free      |
+------+-------+------------------------+
*/
/*
* This is a priority list of all prices. For as long as this list
* represents a true ordering of strictly superior pricing strategies,
* a greedy algorithm will work.
*/
const PRICE_LIST = [
    {
        items: 'AAAAA',
        price: 200,
    },
    {
        items: 'AAA',
        price: 130,
    },
    {
        items: 'EEB',
        price: 80,
    },
    {
        items: 'BB',
        price: 45,
    },
    { items: 'A', price: 50 },
    { items: 'B', price: 30 },
    { items: 'C', price: 20 },
    { items: 'D', price: 15 },
    { items: 'E', price: 40 }
]

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