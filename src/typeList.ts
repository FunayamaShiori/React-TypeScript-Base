/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

//boolean
const bool: boolean = true;

//number 数値
const num: number = 0;

//string 文字
const str: string = "A";

//Array 配列
const arr1: Array<number> = [0, 1, 2];
const arr2: number[] = [0, 1, 2];

//tuple
const tuple: [number, string] = [0, "A"];

//any
const any1: any = false;

//void
const funcA = (): void => {
  const test = "TEST";
};

//null
const null1: null = null;

//undefined
const undefind1: undefined = undefined;

//object
const obj1: object = {};
const obj2: { id: number; name: string } = { id: 1, name: "ふなやま" };
