'use strict';

function buildGroups(set, choose) {
    if (choose === 1) {
        return set
    }

    return buildGroups(set, choose - 1).flatMap(group => set.map(item => group + item))
}

class PriceBuilder {
    // TODO probably not worth the efficiency gain to make this a simple map, change back to the same data type as offers
    constructor(basePrices) {
        this.prices = basePrices
        this.offers = []
    }

    // Gets price for single item
    // TODO break if given multiple items or invalid input
    getSingleItemPrice(item) {
        return this.prices[item]
    }

    /*
    * Really starting to miss typescript here. Need types for diff types of offer objects.
    * @param offer
    * {
    *   items: string,
    *   price: number | string,
    * }
    */
    addStandardOffer(offer) {
        let price = 0
        if (typeof offer.price === 'number') {
            price = offer.price
        } else {
            for (const item of offer.items) {
                price += this.getSingleItemPrice(item)
            }
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
        const groups = buildGroups(offer.itemGroup, offer.choose)
        for (const items of groups) {
            this.offers.push({ items, price: offer.price })
        }
    }

    /*
    * @param offer { items: string, price: number }
    */
    calculateDiscount(offer) {
        let fullPrice = 0
        for (const item of offer.items) {
            fullPrice += this.getSingleItemPrice(item)
        }
        return fullPrice - offer.price
    }

    /*
    * @param offer { item: string, price: number }
    */
    sortByDiscount(a, b) {
        return this.calculateDiscount(b) - this.calculateDiscount(a)
    }

    buildPricingStrategy() {
        let priceList = [...this.offers]

        for (const [item, basePrice] of Object.entries(this.prices)) {
            priceList.push({ items: item, price: basePrice })
        }

        return priceList.sort((a, b) => this.sortByDiscount(a,b))
    }
}

//noinspection JSUnusedLocalSymbols
module.exports = PriceBuilder;
