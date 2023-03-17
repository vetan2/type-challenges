declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T],
): Promise<{
  [Index in keyof T]: Awaited<T[Index]>
}>
