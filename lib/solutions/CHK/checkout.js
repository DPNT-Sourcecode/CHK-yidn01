'use strict';

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
const priceTable = [
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



// function getPrice(sku, count) {
//     const offer = priceTable[sku]

//     if (!offer) {
//         throw new Error('Unknown SKU')
//     }

//     let price = 0
//     if (offer.specialOffer) {
//         const discountsCount = Math.floor(count / offer.specialOffer.count)
//         count -= discountsCount * offer.specialOffer.count
//         price += discountsCount * offer.specialOffer.price
//     }

//     price += count * offer.price

//     return price
// }

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const skuCounts = countChars(skus)
    let total = 0

    try {
        for (const [sku, count] of Object.entries(skuCounts)) {
            total += getPrice(sku, count)
        }
    } catch (e) {
        return -1
    }

    return total
};


