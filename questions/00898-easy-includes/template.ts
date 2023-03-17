type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false

type Includes<T extends readonly any[], U> = {
  [Key in keyof T]: Equal<U, T[Key]>
}[number] extends false
  ? false
  : true
