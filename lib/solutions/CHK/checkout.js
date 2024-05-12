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

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const skuCounts = countSkus(skus)
};
