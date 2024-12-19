export {};

// 共用型で、要素の型の順序に制約をもたせる → タプル
let profile: [string, number] = ['Ham', 43];

// 要素の型順序が合っていないためコンパイルエラーになる
// profile = [43, 'Ham'];  
