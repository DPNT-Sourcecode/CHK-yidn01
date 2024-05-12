'use strict';
const PriceBuilder = require('../../../lib/solutions/CHK/priceBuilder');

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
    S: 20,
    T: 20,
    U: 40,
    V: 50,
    W: 20,
    X: 17,
    Y: 20,
    Z: 21,
}

const STANDARD_OFFERS = [
    {
        items: 'AAA',
        price: 130,
    },
    {
        items: 'AAAAA',
        price: 200,
    },
    {
        items: 'EEB',
        price: 'EE',
    },
    {
        items: 'BB',
        price: 45,
    },
    {
        items: 'FFF',
        price: 'FF',
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
        price: 'NNN',
    },
    {
        items: 'PPPPP',
        price: 200,
    },
    {
        items: 'RRRQ',
        price: 'RRR',
    },
    {
        items: 'QQQ',
        price: 80,
    },
    {
        items: 'UUUU',
        price: 'UUU',
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

const priceBuilder = new PriceBuilder(BASE_PRICES)
for (const offer of STANDARD_OFFERS) {
    priceBuilder.addStandardOffer(offer)
}
for (const offer of SPECIAL_OFFERS) {
    priceBuilder.addSpecialOffer(offer)
}

//noinspection JSUnusedLocalSymbols
module.exports = priceBuilder.buildPricingStrategy();