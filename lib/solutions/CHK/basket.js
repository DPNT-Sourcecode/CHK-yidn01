'use strict';

// Assuming no need to uppercase or otherwise process inputs
function countChars(string) {
    let charCounts = {}
    for (const char of string) {
        if (charCounts[char]) {
            charCounts[char] += 1
        } else {
            charCounts[char] = 1
        }  
    }

    return charCounts
}

class Basket {
    constructor(skus) {
        this.skuCounts = countChars(skus)
    }

    contains(items) {
        const itemSkuCounts = countChars(items)

        for (const [item, itemSkuCount] of Object.entries(itemSkuCounts)) {
            // There are not enough instances of sku in the basket to get the desired subset
            if (itemSkuCount > this.skuCounts[item]) {
                return false
            }
        }

        return true
    }

    // This does not check whether there are enough to remove.
    // Caller must ensure basket contains items to be removed
    // or accept negative counts as equivalent to zero.
    // (Undefined behavior if adding items after initialization.)
    removeItems(items) {
        const itemSkuCounts = countChars(items)

        for (const [item, itemSkuCount] of Object.entries(itemSkuCounts)) {
            this.skuCounts[item] -= itemSkuCount
        }
    }

    isEmpty() {
        // TODO rewrite with a .every/.all or something like that
        for (const skuCount of Object.values(this.skuCounts)) {
            if (skuCount > 0) {
                return false
            }
        }

        return true
    }
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const basket = new Basket(skus)

    return getBestPrice(basket, PRICE_LIST, 0)
};
