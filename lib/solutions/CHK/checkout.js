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

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    throw new Error("method not implemented");
};
