/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface IKeyValuePair<T, U> {
  key: T;
  value: U;
}

const pair1: IKeyValuePair<string, number> = { key: "age", value: 30 };
const pair2: IKeyValuePair<number, boolean> = { key: 42, value: true };

export {};
