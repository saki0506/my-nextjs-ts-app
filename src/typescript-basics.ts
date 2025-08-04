// TypeScript基本概念の練習

// 2. インターフェース (Interfaces)
// オブジェクトの構造を定義します
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Taro Yamada",
  email: "taro@example.com",
};

console.log("=== インターフェースのテスト ===");
console.log("ユーザー情報:", user);
console.log("名前:", user.name);

// 3. 型エイリアス (Type Aliases)
// 新しい型名を定義します
type ID = number;
type Name = string;

type UserType = {
  id: ID;
  name: Name;
};

const userWithTypeAlias: UserType = {
  id: 2,
  name: "Hanako Sato"
};

console.log("=== 型エイリアスのテスト ===");
console.log("型エイリアスを使ったユーザー:", userWithTypeAlias);

// 4. ジェネリクス (Generics)
// 型を引数として受け取る柔軟な型定義を行います
function identity<T>(arg: T): T {
  return arg;
}

const stringResult = identity<string>("Hello");
const numberResult = identity<number>(42);
const booleanResult = identity<boolean>(true);

console.log("=== ジェネリクスのテスト ===");
console.log("文字列:", stringResult);
console.log("数値:", numberResult);
console.log("真偽値:", booleanResult);

// ジェネリクスの配列版
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];

console.log("=== ジェネリクス配列のテスト ===");
console.log("数値配列の最初の要素:", getFirstElement(numbers));
console.log("文字列配列の最初の要素:", getFirstElement(strings));