```
Built-in types
JavaScript defines 8 built-in types:

Type	Explanation
Number	a double-precision IEEE 754 floating point.
String	an immutable UTF-16 string.
BigInt	integers in the arbitrary precision format.
Boolean	true and false.
Symbol	a unique value usually used as a key.
Null	equivalent to the unit type.
Undefined	also equivalent to the unit type.
Object	similar to records.
```

```
TypeScript has corresponding primitive types for the built-in types:

number
string
bigint
boolean
symbol
null
undefined
object
```
```
Other important TypeScript types
Type	Explanation
unknown	the top type.
never	the bottom type.
object literal	eg { property: Type }
void	for functions with no documented return value
T[]	mutable arrays, also written Array<T>
[T, T]	tuples, which are fixed-length but mutable
(t: T) => U	functions
```
```
Notes:

Function syntax includes parameter names. This is pretty hard to get used to!

let fst: (a: any, b: any) => any = (a, b) => a;
// or more precisely:
let fst: <T, U>(a: T, b: U) => T = (a, b) => a;
Object literal type syntax closely mirrors object literal value syntax:

let o: { n: number; xs: object[] } = { n: 1, xs: [] };
[T, T] is a subtype of T[]. This is different than Haskell, where tuples are not related to lists.
```
```
The following types have built-in predicates:

Type	Predicate
string	typeof s === "string"
number	typeof n === "number"
bigint	typeof m === "bigint"
boolean	typeof b === "boolean"
symbol	typeof g === "symbol"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)
object	typeof o === "object"
```