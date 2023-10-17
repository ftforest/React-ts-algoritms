import React from "react"

// Intersections
type Combined = { a: number } & { b: string };
type Conflicting = { a: number } & { a: string };

// Unit types
function pad(s: string, n: number, direction: "left" | "right"): string {
    return direction
}
pad("hi", 10, "left");

let s1 = "right";
pad("hi", 10, s1); // error: 'string' is not assignable to '"left" | "right"'

let s2: "left" | "right" = "right";
pad("hi", 10, s2);