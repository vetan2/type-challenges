type TupleToObject<T extends readonly (keyof never)[]> = {
  [K in T[number]]: K;
};
