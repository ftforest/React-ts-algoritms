import React from 'react';
test('My first test', () => {
    expect(Math.max(1, 5, 10)).toBe(5);
});
test('toEqual with objects', () => {
    expect({ foo: 'foo', subObject: { baz: 'baz' } })
        .toEqual({ foo: 'foo', subObject: { baz: 'baz' } });  // Ок
    expect({ foo: 'foo', subObject: { num: 0 } })
        .toEqual({ foo: 'foo', subObject: { baz: 'baz' } });  // А вот так ошибка.
});

test('toEqual with arrays', () => {
    expect([11, 19, 5]).toEqual([11, 19, 5]); // Ок
    expect([11, 19, 5]).toEqual([11, 19]); // Ошибка
});

test('toContain in array', () => {
    const arr = ['apple', 'orange', 'banana'];
    expect(arr).toContain('banana');
    expect(new Set(arr)).toContain('banana');
    expect('apple, orange, banana').toContain('banana');
});
test('toContainEqual', () => {
    expect([{a: 1}, {b: 2}]).toContainEqual({a: 1});
});
test('toHaveLength', () => {
    expect([1, 2, 3, 4]).toHaveLength(4); // array
    expect('foo').toHaveLength(3); // string
    expect({ length: 1 }).toHaveLength(1); // object count fields
});
/*
toBeNull() — проверяет на равенство с null.
toBeUndefined() — проверяет на равенство с undefined.
toBeDefined() — противоположность toBeUndefined. Проверяет или значение !== undefined.
toBeTruthy() — проверяет или в булевом контексте значение соответствует true. Тоесть любые значения кроме false, null, undefined, 0, NaN и пустых строк.
toBeFalsy() — противоположность toBeTruthy(). Проверяет или в булевом контексте значение соответствует false.
toBeGreaterThan() и toBeGreaterThanOrEqual() — первый метод проверяет или переданное числовое значение больше, чем ожидаемое >, второй проверяет больше или равно ожидаемому >=.
toBeLessThan() и toBeLessThanOrEqual() — противоположность toBeGreaterThan() и toBeGreaterThanOrEqual()
toBeCloseTo() — удобно использовать для чисел с плавающей запятой, когда вам не важна точность и вы не хотите, чтобы тест зависел от незначительной разницы в дроби. Вторым аргументом можно передать до какого знака после запятой необходима точность при сравнении.
* */
test('toBeCloseTo', () => {
    const num = 0.1 + 0.2; // 0.30000000000000004
    expect(num).toBeCloseTo(0.3);
    expect(Math.PI).toBeCloseTo(3.14, 2);
});
test('toMatch', () => {
    expect('Banana').toMatch(/Ba/);
});
test('toThrow', () => {
    function funcWithError() {
        throw new Error('some error');
    }
    expect(funcWithError).toThrow();
    expect(funcWithError).toThrow(Error);
    expect(funcWithError).toThrow('some error');
    expect(funcWithError).toThrow(/some/);
});
test('not', () => {

    expect(true).not.toBe(false);
    expect({ foo: 'bar' }).not.toEqual({});

    function funcWithoutError() {}
    expect(funcWithoutError).not.toThrow();
});
