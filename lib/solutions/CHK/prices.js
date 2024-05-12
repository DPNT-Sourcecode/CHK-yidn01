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
    {
        items: 'FFF',
        price: 20,
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
        price: 120,
    },
    {
        items: 'PPPPP',
        price: 200,
    },
    {
        items: 'RRRQ',
        price: 150,
    },
    {
        items: 'QQQ',
        price: 80,
    },
    {
        items: 'UUUU',
        price: 120,
    },
    {
        items: 'VVV',
        price: 130,
    },
    {
        items: 'VV',
        price: 90,
    },
    { items: 'A', price: 50 },
    { items: 'B', price: 30 },
    { items: 'C', price: 20 },
    { items: 'D', price: 15 },
    { items: 'E', price: 40 },
    { items: 'F', price: 10 },
    { items: 'G', price: 20 },
    { items: 'H', price: 10 },
    { items: 'I', price: 35 },
    { items: 'J', price: 60 },
    { items: 'K', price: 70 },
    { items: 'L', price: 90 },
    { items: 'M', price: 15 },
    { items: 'N', price: 40 },
    { items: 'O', price: 10 },
    { items: 'P', price: 50 },
    { items: 'Q', price: 30 },
    { items: 'R', price: 50 },
    { items: 'S', price: 30 },
    { items: 'T', price: 20 },
    { items: 'U', price: 40 },
    { items: 'V', price: 50 },
    { items: 'W', price: 20 },
    { items: 'X', price: 90 },
    { items: 'Y', price: 10 },
    { items: 'Z', price: 50 },
]

class PricingStrategy {
    constructor(basePrices) {
        this.prices = basePrices
    }

    /*
    * @param offer
    * {
    *   actualItems: string,
    *   priceOfItems: {
    *     item: string,
    *     count: number,
    *   },
    * }
    */
    addOffer(offer) {
        
    }

    sortPricesByDiscount() {
        // TODO
    }
}

//noinspection JSUnusedLocalSymbols
module.exports = Basket;

