type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer I>
  ? I extends PromiseLike<any>
    ? MyAwaited<I>
    : I
  : never
