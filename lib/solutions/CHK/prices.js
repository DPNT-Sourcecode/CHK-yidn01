'use strict';

/*
+------+-------+---------------------------------+
| Item | Price | Special offers                  |
+------+-------+---------------------------------+
| A    | 50    | 3A for 130, 5A for 200          |
| B    | 30    | 2B for 45                       |
| C    | 20    |                                 |
| D    | 15    |                                 |
| E    | 40    | 2E get one B free               |
| F    | 10    | 2F get one F free               |
| G    | 20    |                                 |
| H    | 10    | 5H for 45, 10H for 80           |
| I    | 35    |                                 |
| J    | 60    |                                 |
| K    | 70    | 2K for 120                      |
| L    | 90    |                                 |
| M    | 15    |                                 |
| N    | 40    | 3N get one M free               |
| O    | 10    |                                 |
| P    | 50    | 5P for 200                      |
| Q    | 30    | 3Q for 80                       |
| R    | 50    | 3R get one Q free               |
| S    | 20    | buy any 3 of (S,T,X,Y,Z) for 45 |
| T    | 20    | buy any 3 of (S,T,X,Y,Z) for 45 |
| U    | 40    | 3U get one U free               |
| V    | 50    | 2V for 90, 3V for 130           |
| W    | 20    |                                 |
| X    | 17    | buy any 3 of (S,T,X,Y,Z) for 45 |
| Y    | 20    | buy any 3 of (S,T,X,Y,Z) for 45 |
| Z    | 21    | buy any 3 of (S,T,X,Y,Z) for 45 |
+------+-------+---------------------------------+
*/
/*
* This is a priority list of all prices. For as long as this list
* represents a true ordering of strictly superior pricing strategies,
* a greedy algorithm will work.
*
* This list is getting hard to maintain at this size. I would consider
* a refactor that allowed me to express prices in terms of the prices
* of singles. Such a solution would also have the advantage of only
* requiring an update to the price of an item in one place.
* I don't believe it is at a breaking point yet, so I will wait for one
* more change to determine appropriate next steps.
*
* Okay, so with this new requirement in R5, it seems I am running into factorial
* complexity if I keep trying to enumerate all possible combinations. I am
* leaning towards programmatically enumerating combinations rather than drastically
* changing strategy, but I recognize that this solution will not scale past this point.
*/
const BASE_PRICES = {
    A: 50,
    B: 30,
    C: 20,
    D: 15,
    E: 40,
    F: 10,
    G: 20,
    H: 10,
    I: 35,
    J: 60,
    K: 70,
    L: 90,
    M: 15,
    N: 40,
    O: 10,
    P: 50,
    Q: 30,
    R: 50,
    S: 30,
    T: 20,
    U: 40,
    V: 50,
    W: 20,
    X: 90,
    Y: 10,
    Z: 50,
}

const STANDARD_OFFERS = [
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
        price: {
            item: 'E',
            count: 2,
        },
    },
    {
        items: 'BB',
        price: 45,
    },
    {
        items: 'FFF',
        price: {
            item: 'F',
            count: 2,
        },
    },
    {
        items: 'HHHHHHHHHH',
        price: 80,
    },
    {
        items: 'HHHHH',
        price: 45,
    },
    {
        items: 'KK',
        price: 120,
    },
    {
        items: 'NNNM',
        price: {
            item: 'N',
            count: 3,
        },
    },
    {
        items: 'PPPPP',
        price: 200,
    },
    {
        items: 'RRRQ',
        price: {
            item: 'R',
            count: 3,
        },
    },
    {
        items: 'QQQ',
        price: 80,
    },
    {
        items: 'UUUU',
        price: {
            item: 'U',
            count: 3,
        },
    },
    {
        items: 'VVV',
        price: 130,
    },
    {
        items: 'VV',
        price: 90,
    },
]

const SPECIAL_OFFERS = [
    {
        itemGroup: ['S','T','X','Y','Z'],
        choose: 3,
        price: 45,
    }
]

class PricingStrategy {
    // TODO actually a silly idea to make this a simple map, change back to simplify building code
    constructor(basePrices) {
        this.prices = basePrices
    }

    // Gets price for single item
    // TODO break if given multiple items or invalid input
    getSingleItemPrice(item) {
        this.prices[item]
    }

    /*
    * Really starting to miss typescript here. Need types for diff types of offer objects.
    * @param offer
    * {
    *   items: string,
    *   price: number | {     <= TODO this can probably just be number | string instead (string being items)
    *     item: string,
    *     count: number,
    *   },
    * }
    */
    addStandardOffer(offer) {
        let price
        if (typeof offer.price === 'number') {
            price = offer.price
        } else {
            price = getSingleItemPrice(offer.price.item) * offer.price.count
        }

        this.offers.push({ items: offer.items, price })
    }

    /*
    * @param offer
    * {
    *   itemGroup: string[],
    *   choose: number,
    *   price: number,
    * }
    */
    addSpecialOffer(offer) {
        // TODO build all permutations and add to offers
    }

    /*
    * @param offer { item: string, price: number }
    */
    calculateDiscount(offer) {
        let fullPrice = 0
        for (const item in offer.items) {
            fullPrice += this.getSingleItemPrice(item)
        }
        return fullPrice - offer.price
    }

    /*
    * @param offer { item: string, price: number }
    */
    sortByDiscount(a, b) {
        // TODO IMPORTANT ensure this is DESC order
        this.calculateDiscount(a) - this.calculateDiscount(b)
    }

    buildPricingStrategy() {
        let priceList

        for (const [item, basePrice] of Object.entries(this.prices)) {
            priceList.push({ items: item, price: basePrice })
        }
    }
}

//noinspection JSUnusedLocalSymbols
module.exports = PRICE_LIST;








