import React from 'react';
const productFilter = require('../functions/help/product_filter.ts');

const products = [
    { name: 'onion', price: 12 },
    { name: 'tomato', price: 26 },
    { name: 'banana', price: 29 },
    { name: 'orange', price: 38 }
];

test('Test product filter by range', () => {
    const FROM = 15;
    const TO = 30;
    const filteredProducts = productFilter.byPriceRange(products, FROM, TO);

    expect(filteredProducts).toHaveLength(2);
    expect(filteredProducts).toContainEqual({ name: 'tomato', price: 26 });
    expect(filteredProducts).toEqual([{ name: 'tomato', price: 26 }, { name: 'banana', price: 29 }]);
    expect(filteredProducts[0].price).toBeGreaterThanOrEqual(FROM);
    expect(filteredProducts[1].price).toBeLessThanOrEqual(TO);
    expect(filteredProducts).not.toContainEqual({ name: 'orange', price: 38 });
});