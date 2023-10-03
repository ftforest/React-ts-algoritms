import React from 'react';
const byPriceRange = (products:any[], min:number, max:number) =>
    products.filter(item => item.price >= min && item.price <= max);
module.exports = { byPriceRange };