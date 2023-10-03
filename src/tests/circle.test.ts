import React from 'react';
const circle = require('../functions/help/circle.ts');
test('Circle area', () => {
    expect(circle.area(5)).toBeCloseTo(78.54);
    expect(circle.area()).toBeNaN();
});

test('Circumference', () => {
    expect(circle.circumference(11)).toBeCloseTo(69.1, 1);
    expect(circle.circumference()).toBeNaN();
});