import React from 'react';
import {TSInterface} from "./interface";
import {TSGenerics} from "./generics";

test('TS Interface', () => {
    TSInterface();
});
test('TS Interface Point', () => {
    interface Point {
        x: number;
        y: number;
    }

    function logPoint(p: Point) {
        //console.log(`${p.x}, ${p.y}`);
    }

// logs "12, 26"
    const point = { x: 12, y: 26 };
    logPoint(point);

    const point3 = { x: 12, y: 26, z: 89 };
    logPoint(point3); // logs "12, 26"

    const rect = { x: 33, y: 3, width: 30, height: 80 };
    logPoint(rect); // logs "33, 3"

    const color = { hex: "#187ABF" };
    //logPoint(color); // error
    // <html>TS2345: Argument of type '{ hex: string; }' is not assignable to parameter
    // of type 'Point'.<br/>Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

});
test('TS Interface VirtualPoint', () => {
    interface Point {
        x: number;
        y: number;
    }

    function logPoint(p: Point) {
        //console.log(`${p.x}, ${p.y}`);
    }
    class VirtualPoint {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    const newVPoint = new VirtualPoint(13, 56);
    logPoint(newVPoint); // logs "13, 56"
});
test('TS Interface Pointlike', () => {

    interface Pointlike {
        x: number;
        y: number;
    }
    interface Named {
        name: string;
    }

    function logPoint(point: Pointlike) {
        console.log("x = " + point.x + ", y = " + point.y);
    }

    function logName(x: Named) {
        console.log("Hello, " + x.name);
    }

    const obj = {
        x: 0,
        y: 0,
        name: "Origin",
    };

    logPoint(obj);
    logName(obj);

});
test('TS Interface Empty Types', () => {
    class Empty {}

    function fn(arg: Empty) {
        // do something?
    }

// No error, but this isn't an 'Empty' ?
    fn({ k: 10 });
})
test('TS Interface Identical Types', () => {
    class Car {
        drive() {
            // hit the gas
        }
    }
    class Golfer {
        drive() {
            // hit the ball far
        }
    }
// No error?
    let w: Car = new Golfer();
})
test('TS Generics', () => {

    TSGenerics();
});