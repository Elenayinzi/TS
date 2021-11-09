/**
 * 泛型
 */

export {}

function createNumberArray(length: number, value: number): number[] {
        const arr = Array<number>(length).fill(value)
        return arr
}

function createStringArray(length: number, value: string): string[] {
    const arr = Array<string>(length).fill(value)
    return arr
}

function createArray<T>(length: number, value:T): T[] {
    const arr = Array<T>(length).fill(value)
    return arr
}

const res = createNumberArray(3,100)

const res1 = createStringArray(3,'111')

const res2 = createArray<string>(3,'111')