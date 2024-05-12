'use strict';
import Basket from './basket';

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

// This solution is halfway between recursive backtracking (the fully general solution)
// and a greedy algorithm (which will work for this price list).
function getBestPrice(basket, priceList, result) {
    // If the basket is not empty but there are no offers left,
    // it means we have invalid items.
    // (Failing slow in case of invalid inputs which might not be optimal.)
    if (priceList.length === 0 && !basket.isEmpty) {
        return -1
    }

    // Basket is fully priced, return result
    if (basket.isEmpty) {
        return result
    }

    // Apply best offer if possible
    const bestOffer = priceList[0]
    if (basket.contains(bestOffer.items)) {
        const newBasket = { ...basket }
        newBasket.remove(bestOffer.items)

        // We do not modify the priceList in case the same offer can be applied more than once
        return getBestPrice(newBasket, priceList, result + bestOffer.price)
    } else {
        // Move on to the next offer
        // (Might be more efficient to pass an index instead of slicing the array every time.)
        return getBestPrice(basket, priceList.slice(1), result)
    }
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const basket = new Basket(skus)

    return getBestPrice(basket, PRICE_LIST, 0)
};