/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface IKeyValuePair<T extends keyof any, U> {
  key: T;
  value: U;
}

type KeyValuePair<T extends keyof any, U> = Record<T, U>;

export {};
