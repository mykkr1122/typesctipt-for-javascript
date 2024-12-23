export { };

// エイリアスは必ず先頭大文字
type Mojiretsu = string;

const foostring: string = 'Hello';
// Mojiretsuはstringなのでこんな書き方もできる
const fooMojiretsu: Mojiretsu = 'Hello';

const example = {
    name: 'Ham',
    age: 43
};

type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
    name: 'Ham',
    age: 43
}

type Profile2 = typeof example;