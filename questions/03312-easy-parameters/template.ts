type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...arg: infer Arg
) => any
  ? Arg
  : never;
