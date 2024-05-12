'use strict';

/*
* Assume only one special offer for now
+------+-------+----------------+
| Item | Price | Special offers |
+------+-------+----------------+
| A    | 50    | 3A for 130     |
| B    | 30    | 2B for 45      |
| C    | 20    |                |
| D    | 15    |                |
+------+-------+----------------+
*/
const priceTable = {
    A: {
        price: 50,
        specialOffer:
            {
                count: 3,
                price: 130,
            },
    },
    B: {
        price: 30,
        specialOffer:
            {
                count: 2,
                price: 45,
            },
    },
    C: {
        price: 20,
    },
    D: {
        price: 15,
    }
}

// Assuming no need to downcase or otherwise process inputs
function countSkus(skus) {
    let skuCounts = {}
    for (const char of skus) {
        if (skuCounts[char]) {
            skuCounts[char] += 1
        } else {
            skuCounts[char] = 1
        }  
    }

    return skuCounts
}

function getPrice(sku, count) {
    const offer = priceTable[sku]

    if (!offer) {
        throw new Error('Unknown SKU')
    }

    let price = 0
    if (offer.specialOffer) {
        const discountedCount = Math.floor(count / offer.specialOffer.count)
        count -= discountedCount
        price += discountedCount * offer.specialOffer.price
    }

    price += count * offer.price

    return price
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const skuCounts = countSkus(skus)
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
