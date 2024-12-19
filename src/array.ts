export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];  // interface

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let string2: Array<string> = ['Tokyo', 'Nagoya', 'Sapporo'];

// 2次元配列
let twoDimansionalArray: number[][] = [
    [50, 100],
    [150, 300]
];

// 共用型(1つの配列に複数の型が入る)
let arrays: (string | number | boolean)[] = [1, false, 'Japan'];