import React from 'react';
const area = (radius:number) => Math.PI * radius ** 2;
const circumference = (radius:number) => 2 * Math.PI * radius;

module.exports = { area, circumference };
