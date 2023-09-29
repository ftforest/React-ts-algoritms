/**
 * Принимает 2 объекта T и U и создаёт новый объект, с их уникальными
 * ключами. Используется в `DeepMergeTwoTypes`
 */
export type GetObjDifferentKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>
/**
 * Принимает 2 объекта T and U и создаёт новый объект с их ключами
 * Используется в `DeepMergeTwoTypes`
 */
type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>
type MergeTwoObjects<T, U> =
// "не общие" ключи опциональны
    Partial<GetObjDifferentKeys<T, U>>
    // общие ключи рекурсивно заполняются за счёт `DeepMergeTwoTypes<...>`
    & { [K in keyof GetObjSameKeys<T, U>]: DeepMergeTwoTypes<T[K], U[K]> }

// объединяет 2 типа
export type DeepMergeTwoTypes<T, U> =
// проверяет являются ли типы массивами, распаковывает их и
// запускает рекурсию
    [T, U] extends [(infer TItem)[], (infer UItem)[]]
        ? DeepMergeTwoTypes<TItem, UItem>[]
        // если типы это объекты
        : [T, U] extends [
                { [key: string]: unknown},
                { [key: string]: unknown }
            ]
            ? MergeTwoObjects<T, U>
            : [T, U] extends [
                        { [key: string]: unknown } | undefined,
                        { [key: string]: unknown } | undefined
                ]
                ? MergeTwoObjects<NonNullable<T>, NonNullable<U>> | undefined
                : T | U
/*
// тестируем:
type A = { key1: { a: { b: 'c'} }, key2: undefined }
type B = { key1: { a: {} }, key3: string }

const fn = (c: DeepMergeTwoTypes<A, B>) => c.key*/
