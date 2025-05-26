export {}

declare global {
  type Nullable<T> = T | null

  type MaybePresent<T> = T | undefined

  type Maybe<T> = Nullable<MaybePresent<T>>

  type Nil = null | undefined

  function isNil(value: unknown): value is Nil
}
