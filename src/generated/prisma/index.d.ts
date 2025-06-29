
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Club
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model Coaches
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Coaches = $Result.DefaultSelection<Prisma.$CoachesPayload>
/**
 * Model Courts
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Courts = $Result.DefaultSelection<Prisma.$CourtsPayload>
/**
 * Model Event
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Events
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model Players
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Players = $Result.DefaultSelection<Prisma.$PlayersPayload>
/**
 * Model Sessions
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>
/**
 * Model passwordResetToken
 * 
 */
export type passwordResetToken = $Result.DefaultSelection<Prisma.$passwordResetTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clubs
 * const clubs = await prisma.club.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clubs
   * const clubs = await prisma.club.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coaches`: Exposes CRUD operations for the **Coaches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coaches
    * const coaches = await prisma.coaches.findMany()
    * ```
    */
  get coaches(): Prisma.CoachesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courts`: Exposes CRUD operations for the **Courts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courts
    * const courts = await prisma.courts.findMany()
    * ```
    */
  get courts(): Prisma.CourtsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.players`: Exposes CRUD operations for the **Players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.PlayersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **passwordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.passwordResetTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Club: 'Club',
    Coaches: 'Coaches',
    Courts: 'Courts',
    Event: 'Event',
    Events: 'Events',
    Players: 'Players',
    Sessions: 'Sessions',
    passwordResetToken: 'passwordResetToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "club" | "coaches" | "courts" | "event" | "events" | "players" | "sessions" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Coaches: {
        payload: Prisma.$CoachesPayload<ExtArgs>
        fields: Prisma.CoachesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>
          }
          findFirst: {
            args: Prisma.CoachesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>
          }
          findMany: {
            args: Prisma.CoachesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>[]
          }
          create: {
            args: Prisma.CoachesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>
          }
          createMany: {
            args: Prisma.CoachesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>[]
          }
          delete: {
            args: Prisma.CoachesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>
          }
          update: {
            args: Prisma.CoachesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>
          }
          deleteMany: {
            args: Prisma.CoachesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>[]
          }
          upsert: {
            args: Prisma.CoachesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachesPayload>
          }
          aggregate: {
            args: Prisma.CoachesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoaches>
          }
          groupBy: {
            args: Prisma.CoachesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachesCountArgs<ExtArgs>
            result: $Utils.Optional<CoachesCountAggregateOutputType> | number
          }
        }
      }
      Courts: {
        payload: Prisma.$CourtsPayload<ExtArgs>
        fields: Prisma.CourtsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourtsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourtsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          findFirst: {
            args: Prisma.CourtsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourtsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          findMany: {
            args: Prisma.CourtsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>[]
          }
          create: {
            args: Prisma.CourtsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          createMany: {
            args: Prisma.CourtsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourtsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>[]
          }
          delete: {
            args: Prisma.CourtsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          update: {
            args: Prisma.CourtsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          deleteMany: {
            args: Prisma.CourtsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourtsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourtsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>[]
          }
          upsert: {
            args: Prisma.CourtsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtsPayload>
          }
          aggregate: {
            args: Prisma.CourtsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourts>
          }
          groupBy: {
            args: Prisma.CourtsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourtsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourtsCountArgs<ExtArgs>
            result: $Utils.Optional<CourtsCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      Players: {
        payload: Prisma.$PlayersPayload<ExtArgs>
        fields: Prisma.PlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findFirst: {
            args: Prisma.PlayersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findMany: {
            args: Prisma.PlayersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          create: {
            args: Prisma.PlayersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          createMany: {
            args: Prisma.PlayersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          delete: {
            args: Prisma.PlayersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          update: {
            args: Prisma.PlayersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          deleteMany: {
            args: Prisma.PlayersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          upsert: {
            args: Prisma.PlayersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.PlayersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      passwordResetToken: {
        payload: Prisma.$passwordResetTokenPayload<ExtArgs>
        fields: Prisma.passwordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.passwordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.passwordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.passwordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.passwordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          findMany: {
            args: Prisma.passwordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>[]
          }
          create: {
            args: Prisma.passwordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          createMany: {
            args: Prisma.passwordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.passwordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.passwordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          update: {
            args: Prisma.passwordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.passwordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.passwordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.passwordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.passwordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.passwordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.passwordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    club?: ClubOmit
    coaches?: CoachesOmit
    courts?: CourtsOmit
    event?: EventOmit
    events?: EventsOmit
    players?: PlayersOmit
    sessions?: SessionsOmit
    passwordResetToken?: passwordResetTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    Coaches: number
    Courts: number
    Event: number
    Players: number
    Sessions: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Coaches?: boolean | ClubCountOutputTypeCountCoachesArgs
    Courts?: boolean | ClubCountOutputTypeCountCourtsArgs
    Event?: boolean | ClubCountOutputTypeCountEventArgs
    Players?: boolean | ClubCountOutputTypeCountPlayersArgs
    Sessions?: boolean | ClubCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubCountOutputType
     */
    select?: ClubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountCoachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachesWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountCourtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtsWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }


  /**
   * Count Type CoachesCountOutputType
   */

  export type CoachesCountOutputType = {
    Sessions: number
  }

  export type CoachesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sessions?: boolean | CoachesCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * CoachesCountOutputType without action
   */
  export type CoachesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachesCountOutputType
     */
    select?: CoachesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoachesCountOutputType without action
   */
  export type CoachesCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }


  /**
   * Count Type CourtsCountOutputType
   */

  export type CourtsCountOutputType = {
    Sessions: number
  }

  export type CourtsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sessions?: boolean | CourtsCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * CourtsCountOutputType without action
   */
  export type CourtsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtsCountOutputType
     */
    select?: CourtsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourtsCountOutputType without action
   */
  export type CourtsCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }


  /**
   * Count Type PlayersCountOutputType
   */

  export type PlayersCountOutputType = {
    Sessions: number
  }

  export type PlayersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sessions?: boolean | PlayersCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayersCountOutputType
     */
    select?: PlayersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubAvgAggregateOutputType = {
    id: number | null
  }

  export type ClubSumAggregateOutputType = {
    id: bigint | null
  }

  export type ClubMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    club_manager: string | null
    email: string | null
    password: string | null
  }

  export type ClubMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    club_manager: string | null
    email: string | null
    password: string | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    club_manager: number
    email: number
    password: number
    _all: number
  }


  export type ClubAvgAggregateInputType = {
    id?: true
  }

  export type ClubSumAggregateInputType = {
    id?: true
  }

  export type ClubMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    club_manager?: true
    email?: true
    password?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    club_manager?: true
    email?: true
    password?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    club_manager?: true
    email?: true
    password?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _avg?: ClubAvgAggregateInputType
    _sum?: ClubSumAggregateInputType
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: bigint
    created_at: Date
    name: string | null
    club_manager: string | null
    email: string | null
    password: string | null
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    club_manager?: boolean
    email?: boolean
    password?: boolean
    Coaches?: boolean | Club$CoachesArgs<ExtArgs>
    Courts?: boolean | Club$CourtsArgs<ExtArgs>
    Event?: boolean | Club$EventArgs<ExtArgs>
    Players?: boolean | Club$PlayersArgs<ExtArgs>
    Sessions?: boolean | Club$SessionsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    club_manager?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    club_manager?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    club_manager?: boolean
    email?: boolean
    password?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "club_manager" | "email" | "password", ExtArgs["result"]["club"]>
  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Coaches?: boolean | Club$CoachesArgs<ExtArgs>
    Courts?: boolean | Club$CourtsArgs<ExtArgs>
    Event?: boolean | Club$EventArgs<ExtArgs>
    Players?: boolean | Club$PlayersArgs<ExtArgs>
    Sessions?: boolean | Club$SessionsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      Coaches: Prisma.$CoachesPayload<ExtArgs>[]
      Courts: Prisma.$CourtsPayload<ExtArgs>[]
      Event: Prisma.$EventPayload<ExtArgs>[]
      Players: Prisma.$PlayersPayload<ExtArgs>[]
      Sessions: Prisma.$SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      name: string | null
      club_manager: string | null
      email: string | null
      password: string | null
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Coaches<T extends Club$CoachesArgs<ExtArgs> = {}>(args?: Subset<T, Club$CoachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Courts<T extends Club$CourtsArgs<ExtArgs> = {}>(args?: Subset<T, Club$CourtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Event<T extends Club$EventArgs<ExtArgs> = {}>(args?: Subset<T, Club$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Players<T extends Club$PlayersArgs<ExtArgs> = {}>(args?: Subset<T, Club$PlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sessions<T extends Club$SessionsArgs<ExtArgs> = {}>(args?: Subset<T, Club$SessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'BigInt'>
    readonly created_at: FieldRef<"Club", 'DateTime'>
    readonly name: FieldRef<"Club", 'String'>
    readonly club_manager: FieldRef<"Club", 'String'>
    readonly email: FieldRef<"Club", 'String'>
    readonly password: FieldRef<"Club", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data?: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club.Coaches
   */
  export type Club$CoachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    where?: CoachesWhereInput
    orderBy?: CoachesOrderByWithRelationInput | CoachesOrderByWithRelationInput[]
    cursor?: CoachesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachesScalarFieldEnum | CoachesScalarFieldEnum[]
  }

  /**
   * Club.Courts
   */
  export type Club$CourtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    where?: CourtsWhereInput
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    cursor?: CourtsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourtsScalarFieldEnum | CourtsScalarFieldEnum[]
  }

  /**
   * Club.Event
   */
  export type Club$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Club.Players
   */
  export type Club$PlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    cursor?: PlayersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Club.Sessions
   */
  export type Club$SessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
  }


  /**
   * Model Coaches
   */

  export type AggregateCoaches = {
    _count: CoachesCountAggregateOutputType | null
    _avg: CoachesAvgAggregateOutputType | null
    _sum: CoachesSumAggregateOutputType | null
    _min: CoachesMinAggregateOutputType | null
    _max: CoachesMaxAggregateOutputType | null
  }

  export type CoachesAvgAggregateOutputType = {
    id: number | null
    charges: number | null
    club_id: number | null
  }

  export type CoachesSumAggregateOutputType = {
    id: bigint | null
    charges: bigint | null
    club_id: bigint | null
  }

  export type CoachesMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    charges: bigint | null
    club_id: bigint | null
    picture: string | null
    email: string | null
    password: string | null
  }

  export type CoachesMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    charges: bigint | null
    club_id: bigint | null
    picture: string | null
    email: string | null
    password: string | null
  }

  export type CoachesCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    charges: number
    club_id: number
    picture: number
    email: number
    password: number
    _all: number
  }


  export type CoachesAvgAggregateInputType = {
    id?: true
    charges?: true
    club_id?: true
  }

  export type CoachesSumAggregateInputType = {
    id?: true
    charges?: true
    club_id?: true
  }

  export type CoachesMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
    picture?: true
    email?: true
    password?: true
  }

  export type CoachesMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
    picture?: true
    email?: true
    password?: true
  }

  export type CoachesCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
    picture?: true
    email?: true
    password?: true
    _all?: true
  }

  export type CoachesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coaches to aggregate.
     */
    where?: CoachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachesOrderByWithRelationInput | CoachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coaches
    **/
    _count?: true | CoachesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachesMaxAggregateInputType
  }

  export type GetCoachesAggregateType<T extends CoachesAggregateArgs> = {
        [P in keyof T & keyof AggregateCoaches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoaches[P]>
      : GetScalarType<T[P], AggregateCoaches[P]>
  }




  export type CoachesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachesWhereInput
    orderBy?: CoachesOrderByWithAggregationInput | CoachesOrderByWithAggregationInput[]
    by: CoachesScalarFieldEnum[] | CoachesScalarFieldEnum
    having?: CoachesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachesCountAggregateInputType | true
    _avg?: CoachesAvgAggregateInputType
    _sum?: CoachesSumAggregateInputType
    _min?: CoachesMinAggregateInputType
    _max?: CoachesMaxAggregateInputType
  }

  export type CoachesGroupByOutputType = {
    id: bigint
    created_at: Date
    name: string | null
    charges: bigint | null
    club_id: bigint | null
    picture: string | null
    email: string | null
    password: string | null
    _count: CoachesCountAggregateOutputType | null
    _avg: CoachesAvgAggregateOutputType | null
    _sum: CoachesSumAggregateOutputType | null
    _min: CoachesMinAggregateOutputType | null
    _max: CoachesMaxAggregateOutputType | null
  }

  type GetCoachesGroupByPayload<T extends CoachesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachesGroupByOutputType[P]>
            : GetScalarType<T[P], CoachesGroupByOutputType[P]>
        }
      >
    >


  export type CoachesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
    Club?: boolean | Coaches$ClubArgs<ExtArgs>
    Sessions?: boolean | Coaches$SessionsArgs<ExtArgs>
    _count?: boolean | CoachesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coaches"]>

  export type CoachesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
    Club?: boolean | Coaches$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["coaches"]>

  export type CoachesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
    Club?: boolean | Coaches$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["coaches"]>

  export type CoachesSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
  }

  export type CoachesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "charges" | "club_id" | "picture" | "email" | "password", ExtArgs["result"]["coaches"]>
  export type CoachesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Coaches$ClubArgs<ExtArgs>
    Sessions?: boolean | Coaches$SessionsArgs<ExtArgs>
    _count?: boolean | CoachesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoachesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Coaches$ClubArgs<ExtArgs>
  }
  export type CoachesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Coaches$ClubArgs<ExtArgs>
  }

  export type $CoachesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coaches"
    objects: {
      Club: Prisma.$ClubPayload<ExtArgs> | null
      Sessions: Prisma.$SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      name: string | null
      charges: bigint | null
      club_id: bigint | null
      picture: string | null
      email: string | null
      password: string | null
    }, ExtArgs["result"]["coaches"]>
    composites: {}
  }

  type CoachesGetPayload<S extends boolean | null | undefined | CoachesDefaultArgs> = $Result.GetResult<Prisma.$CoachesPayload, S>

  type CoachesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachesCountAggregateInputType | true
    }

  export interface CoachesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coaches'], meta: { name: 'Coaches' } }
    /**
     * Find zero or one Coaches that matches the filter.
     * @param {CoachesFindUniqueArgs} args - Arguments to find a Coaches
     * @example
     * // Get one Coaches
     * const coaches = await prisma.coaches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachesFindUniqueArgs>(args: SelectSubset<T, CoachesFindUniqueArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coaches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachesFindUniqueOrThrowArgs} args - Arguments to find a Coaches
     * @example
     * // Get one Coaches
     * const coaches = await prisma.coaches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachesFindFirstArgs} args - Arguments to find a Coaches
     * @example
     * // Get one Coaches
     * const coaches = await prisma.coaches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachesFindFirstArgs>(args?: SelectSubset<T, CoachesFindFirstArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coaches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachesFindFirstOrThrowArgs} args - Arguments to find a Coaches
     * @example
     * // Get one Coaches
     * const coaches = await prisma.coaches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coaches
     * const coaches = await prisma.coaches.findMany()
     * 
     * // Get first 10 Coaches
     * const coaches = await prisma.coaches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachesWithIdOnly = await prisma.coaches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachesFindManyArgs>(args?: SelectSubset<T, CoachesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coaches.
     * @param {CoachesCreateArgs} args - Arguments to create a Coaches.
     * @example
     * // Create one Coaches
     * const Coaches = await prisma.coaches.create({
     *   data: {
     *     // ... data to create a Coaches
     *   }
     * })
     * 
     */
    create<T extends CoachesCreateArgs>(args: SelectSubset<T, CoachesCreateArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coaches.
     * @param {CoachesCreateManyArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coaches = await prisma.coaches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachesCreateManyArgs>(args?: SelectSubset<T, CoachesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coaches and returns the data saved in the database.
     * @param {CoachesCreateManyAndReturnArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coaches = await prisma.coaches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coaches and only return the `id`
     * const coachesWithIdOnly = await prisma.coaches.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachesCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coaches.
     * @param {CoachesDeleteArgs} args - Arguments to delete one Coaches.
     * @example
     * // Delete one Coaches
     * const Coaches = await prisma.coaches.delete({
     *   where: {
     *     // ... filter to delete one Coaches
     *   }
     * })
     * 
     */
    delete<T extends CoachesDeleteArgs>(args: SelectSubset<T, CoachesDeleteArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coaches.
     * @param {CoachesUpdateArgs} args - Arguments to update one Coaches.
     * @example
     * // Update one Coaches
     * const coaches = await prisma.coaches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachesUpdateArgs>(args: SelectSubset<T, CoachesUpdateArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coaches.
     * @param {CoachesDeleteManyArgs} args - Arguments to filter Coaches to delete.
     * @example
     * // Delete a few Coaches
     * const { count } = await prisma.coaches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachesDeleteManyArgs>(args?: SelectSubset<T, CoachesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coaches
     * const coaches = await prisma.coaches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachesUpdateManyArgs>(args: SelectSubset<T, CoachesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coaches and returns the data updated in the database.
     * @param {CoachesUpdateManyAndReturnArgs} args - Arguments to update many Coaches.
     * @example
     * // Update many Coaches
     * const coaches = await prisma.coaches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coaches and only return the `id`
     * const coachesWithIdOnly = await prisma.coaches.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoachesUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coaches.
     * @param {CoachesUpsertArgs} args - Arguments to update or create a Coaches.
     * @example
     * // Update or create a Coaches
     * const coaches = await prisma.coaches.upsert({
     *   create: {
     *     // ... data to create a Coaches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coaches we want to update
     *   }
     * })
     */
    upsert<T extends CoachesUpsertArgs>(args: SelectSubset<T, CoachesUpsertArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachesCountArgs} args - Arguments to filter Coaches to count.
     * @example
     * // Count the number of Coaches
     * const count = await prisma.coaches.count({
     *   where: {
     *     // ... the filter for the Coaches we want to count
     *   }
     * })
    **/
    count<T extends CoachesCountArgs>(
      args?: Subset<T, CoachesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoachesAggregateArgs>(args: Subset<T, CoachesAggregateArgs>): Prisma.PrismaPromise<GetCoachesAggregateType<T>>

    /**
     * Group by Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoachesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachesGroupByArgs['orderBy'] }
        : { orderBy?: CoachesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoachesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coaches model
   */
  readonly fields: CoachesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coaches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Club<T extends Coaches$ClubArgs<ExtArgs> = {}>(args?: Subset<T, Coaches$ClubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Sessions<T extends Coaches$SessionsArgs<ExtArgs> = {}>(args?: Subset<T, Coaches$SessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coaches model
   */
  interface CoachesFieldRefs {
    readonly id: FieldRef<"Coaches", 'BigInt'>
    readonly created_at: FieldRef<"Coaches", 'DateTime'>
    readonly name: FieldRef<"Coaches", 'String'>
    readonly charges: FieldRef<"Coaches", 'BigInt'>
    readonly club_id: FieldRef<"Coaches", 'BigInt'>
    readonly picture: FieldRef<"Coaches", 'String'>
    readonly email: FieldRef<"Coaches", 'String'>
    readonly password: FieldRef<"Coaches", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Coaches findUnique
   */
  export type CoachesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * Filter, which Coaches to fetch.
     */
    where: CoachesWhereUniqueInput
  }

  /**
   * Coaches findUniqueOrThrow
   */
  export type CoachesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * Filter, which Coaches to fetch.
     */
    where: CoachesWhereUniqueInput
  }

  /**
   * Coaches findFirst
   */
  export type CoachesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * Filter, which Coaches to fetch.
     */
    where?: CoachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachesOrderByWithRelationInput | CoachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachesScalarFieldEnum | CoachesScalarFieldEnum[]
  }

  /**
   * Coaches findFirstOrThrow
   */
  export type CoachesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * Filter, which Coaches to fetch.
     */
    where?: CoachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachesOrderByWithRelationInput | CoachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachesScalarFieldEnum | CoachesScalarFieldEnum[]
  }

  /**
   * Coaches findMany
   */
  export type CoachesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * Filter, which Coaches to fetch.
     */
    where?: CoachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachesOrderByWithRelationInput | CoachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coaches.
     */
    cursor?: CoachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    distinct?: CoachesScalarFieldEnum | CoachesScalarFieldEnum[]
  }

  /**
   * Coaches create
   */
  export type CoachesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * The data needed to create a Coaches.
     */
    data?: XOR<CoachesCreateInput, CoachesUncheckedCreateInput>
  }

  /**
   * Coaches createMany
   */
  export type CoachesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coaches.
     */
    data: CoachesCreateManyInput | CoachesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coaches createManyAndReturn
   */
  export type CoachesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * The data used to create many Coaches.
     */
    data: CoachesCreateManyInput | CoachesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coaches update
   */
  export type CoachesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * The data needed to update a Coaches.
     */
    data: XOR<CoachesUpdateInput, CoachesUncheckedUpdateInput>
    /**
     * Choose, which Coaches to update.
     */
    where: CoachesWhereUniqueInput
  }

  /**
   * Coaches updateMany
   */
  export type CoachesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachesUpdateManyMutationInput, CoachesUncheckedUpdateManyInput>
    /**
     * Filter which Coaches to update
     */
    where?: CoachesWhereInput
    /**
     * Limit how many Coaches to update.
     */
    limit?: number
  }

  /**
   * Coaches updateManyAndReturn
   */
  export type CoachesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachesUpdateManyMutationInput, CoachesUncheckedUpdateManyInput>
    /**
     * Filter which Coaches to update
     */
    where?: CoachesWhereInput
    /**
     * Limit how many Coaches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coaches upsert
   */
  export type CoachesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * The filter to search for the Coaches to update in case it exists.
     */
    where: CoachesWhereUniqueInput
    /**
     * In case the Coaches found by the `where` argument doesn't exist, create a new Coaches with this data.
     */
    create: XOR<CoachesCreateInput, CoachesUncheckedCreateInput>
    /**
     * In case the Coaches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachesUpdateInput, CoachesUncheckedUpdateInput>
  }

  /**
   * Coaches delete
   */
  export type CoachesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    /**
     * Filter which Coaches to delete.
     */
    where: CoachesWhereUniqueInput
  }

  /**
   * Coaches deleteMany
   */
  export type CoachesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coaches to delete
     */
    where?: CoachesWhereInput
    /**
     * Limit how many Coaches to delete.
     */
    limit?: number
  }

  /**
   * Coaches.Club
   */
  export type Coaches$ClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * Coaches.Sessions
   */
  export type Coaches$SessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Coaches without action
   */
  export type CoachesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
  }


  /**
   * Model Courts
   */

  export type AggregateCourts = {
    _count: CourtsCountAggregateOutputType | null
    _avg: CourtsAvgAggregateOutputType | null
    _sum: CourtsSumAggregateOutputType | null
    _min: CourtsMinAggregateOutputType | null
    _max: CourtsMaxAggregateOutputType | null
  }

  export type CourtsAvgAggregateOutputType = {
    id: number | null
    charges: number | null
    club_id: number | null
  }

  export type CourtsSumAggregateOutputType = {
    id: bigint | null
    charges: bigint | null
    club_id: bigint | null
  }

  export type CourtsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    charges: bigint | null
    club_id: bigint | null
  }

  export type CourtsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    charges: bigint | null
    club_id: bigint | null
  }

  export type CourtsCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    charges: number
    club_id: number
    _all: number
  }


  export type CourtsAvgAggregateInputType = {
    id?: true
    charges?: true
    club_id?: true
  }

  export type CourtsSumAggregateInputType = {
    id?: true
    charges?: true
    club_id?: true
  }

  export type CourtsMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
  }

  export type CourtsMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
  }

  export type CourtsCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
    _all?: true
  }

  export type CourtsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courts to aggregate.
     */
    where?: CourtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courts
    **/
    _count?: true | CourtsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourtsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourtsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourtsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourtsMaxAggregateInputType
  }

  export type GetCourtsAggregateType<T extends CourtsAggregateArgs> = {
        [P in keyof T & keyof AggregateCourts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourts[P]>
      : GetScalarType<T[P], AggregateCourts[P]>
  }




  export type CourtsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtsWhereInput
    orderBy?: CourtsOrderByWithAggregationInput | CourtsOrderByWithAggregationInput[]
    by: CourtsScalarFieldEnum[] | CourtsScalarFieldEnum
    having?: CourtsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourtsCountAggregateInputType | true
    _avg?: CourtsAvgAggregateInputType
    _sum?: CourtsSumAggregateInputType
    _min?: CourtsMinAggregateInputType
    _max?: CourtsMaxAggregateInputType
  }

  export type CourtsGroupByOutputType = {
    id: bigint
    created_at: Date
    name: string | null
    charges: bigint | null
    club_id: bigint | null
    _count: CourtsCountAggregateOutputType | null
    _avg: CourtsAvgAggregateOutputType | null
    _sum: CourtsSumAggregateOutputType | null
    _min: CourtsMinAggregateOutputType | null
    _max: CourtsMaxAggregateOutputType | null
  }

  type GetCourtsGroupByPayload<T extends CourtsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourtsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourtsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtsGroupByOutputType[P]>
            : GetScalarType<T[P], CourtsGroupByOutputType[P]>
        }
      >
    >


  export type CourtsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    Club?: boolean | Courts$ClubArgs<ExtArgs>
    Sessions?: boolean | Courts$SessionsArgs<ExtArgs>
    _count?: boolean | CourtsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courts"]>

  export type CourtsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    Club?: boolean | Courts$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["courts"]>

  export type CourtsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    Club?: boolean | Courts$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["courts"]>

  export type CourtsSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
  }

  export type CourtsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "charges" | "club_id", ExtArgs["result"]["courts"]>
  export type CourtsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Courts$ClubArgs<ExtArgs>
    Sessions?: boolean | Courts$SessionsArgs<ExtArgs>
    _count?: boolean | CourtsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourtsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Courts$ClubArgs<ExtArgs>
  }
  export type CourtsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Courts$ClubArgs<ExtArgs>
  }

  export type $CourtsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courts"
    objects: {
      Club: Prisma.$ClubPayload<ExtArgs> | null
      Sessions: Prisma.$SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      name: string | null
      charges: bigint | null
      club_id: bigint | null
    }, ExtArgs["result"]["courts"]>
    composites: {}
  }

  type CourtsGetPayload<S extends boolean | null | undefined | CourtsDefaultArgs> = $Result.GetResult<Prisma.$CourtsPayload, S>

  type CourtsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourtsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourtsCountAggregateInputType | true
    }

  export interface CourtsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courts'], meta: { name: 'Courts' } }
    /**
     * Find zero or one Courts that matches the filter.
     * @param {CourtsFindUniqueArgs} args - Arguments to find a Courts
     * @example
     * // Get one Courts
     * const courts = await prisma.courts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourtsFindUniqueArgs>(args: SelectSubset<T, CourtsFindUniqueArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourtsFindUniqueOrThrowArgs} args - Arguments to find a Courts
     * @example
     * // Get one Courts
     * const courts = await prisma.courts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourtsFindUniqueOrThrowArgs>(args: SelectSubset<T, CourtsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsFindFirstArgs} args - Arguments to find a Courts
     * @example
     * // Get one Courts
     * const courts = await prisma.courts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourtsFindFirstArgs>(args?: SelectSubset<T, CourtsFindFirstArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsFindFirstOrThrowArgs} args - Arguments to find a Courts
     * @example
     * // Get one Courts
     * const courts = await prisma.courts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourtsFindFirstOrThrowArgs>(args?: SelectSubset<T, CourtsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courts
     * const courts = await prisma.courts.findMany()
     * 
     * // Get first 10 Courts
     * const courts = await prisma.courts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courtsWithIdOnly = await prisma.courts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourtsFindManyArgs>(args?: SelectSubset<T, CourtsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courts.
     * @param {CourtsCreateArgs} args - Arguments to create a Courts.
     * @example
     * // Create one Courts
     * const Courts = await prisma.courts.create({
     *   data: {
     *     // ... data to create a Courts
     *   }
     * })
     * 
     */
    create<T extends CourtsCreateArgs>(args: SelectSubset<T, CourtsCreateArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courts.
     * @param {CourtsCreateManyArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const courts = await prisma.courts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourtsCreateManyArgs>(args?: SelectSubset<T, CourtsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courts and returns the data saved in the database.
     * @param {CourtsCreateManyAndReturnArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const courts = await prisma.courts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courts and only return the `id`
     * const courtsWithIdOnly = await prisma.courts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourtsCreateManyAndReturnArgs>(args?: SelectSubset<T, CourtsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courts.
     * @param {CourtsDeleteArgs} args - Arguments to delete one Courts.
     * @example
     * // Delete one Courts
     * const Courts = await prisma.courts.delete({
     *   where: {
     *     // ... filter to delete one Courts
     *   }
     * })
     * 
     */
    delete<T extends CourtsDeleteArgs>(args: SelectSubset<T, CourtsDeleteArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courts.
     * @param {CourtsUpdateArgs} args - Arguments to update one Courts.
     * @example
     * // Update one Courts
     * const courts = await prisma.courts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourtsUpdateArgs>(args: SelectSubset<T, CourtsUpdateArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courts.
     * @param {CourtsDeleteManyArgs} args - Arguments to filter Courts to delete.
     * @example
     * // Delete a few Courts
     * const { count } = await prisma.courts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourtsDeleteManyArgs>(args?: SelectSubset<T, CourtsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courts
     * const courts = await prisma.courts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourtsUpdateManyArgs>(args: SelectSubset<T, CourtsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts and returns the data updated in the database.
     * @param {CourtsUpdateManyAndReturnArgs} args - Arguments to update many Courts.
     * @example
     * // Update many Courts
     * const courts = await prisma.courts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courts and only return the `id`
     * const courtsWithIdOnly = await prisma.courts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourtsUpdateManyAndReturnArgs>(args: SelectSubset<T, CourtsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courts.
     * @param {CourtsUpsertArgs} args - Arguments to update or create a Courts.
     * @example
     * // Update or create a Courts
     * const courts = await prisma.courts.upsert({
     *   create: {
     *     // ... data to create a Courts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courts we want to update
     *   }
     * })
     */
    upsert<T extends CourtsUpsertArgs>(args: SelectSubset<T, CourtsUpsertArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsCountArgs} args - Arguments to filter Courts to count.
     * @example
     * // Count the number of Courts
     * const count = await prisma.courts.count({
     *   where: {
     *     // ... the filter for the Courts we want to count
     *   }
     * })
    **/
    count<T extends CourtsCountArgs>(
      args?: Subset<T, CourtsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourtsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourtsAggregateArgs>(args: Subset<T, CourtsAggregateArgs>): Prisma.PrismaPromise<GetCourtsAggregateType<T>>

    /**
     * Group by Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourtsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtsGroupByArgs['orderBy'] }
        : { orderBy?: CourtsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourtsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courts model
   */
  readonly fields: CourtsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourtsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Club<T extends Courts$ClubArgs<ExtArgs> = {}>(args?: Subset<T, Courts$ClubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Sessions<T extends Courts$SessionsArgs<ExtArgs> = {}>(args?: Subset<T, Courts$SessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Courts model
   */
  interface CourtsFieldRefs {
    readonly id: FieldRef<"Courts", 'BigInt'>
    readonly created_at: FieldRef<"Courts", 'DateTime'>
    readonly name: FieldRef<"Courts", 'String'>
    readonly charges: FieldRef<"Courts", 'BigInt'>
    readonly club_id: FieldRef<"Courts", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Courts findUnique
   */
  export type CourtsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where: CourtsWhereUniqueInput
  }

  /**
   * Courts findUniqueOrThrow
   */
  export type CourtsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where: CourtsWhereUniqueInput
  }

  /**
   * Courts findFirst
   */
  export type CourtsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtsScalarFieldEnum | CourtsScalarFieldEnum[]
  }

  /**
   * Courts findFirstOrThrow
   */
  export type CourtsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtsScalarFieldEnum | CourtsScalarFieldEnum[]
  }

  /**
   * Courts findMany
   */
  export type CourtsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtsOrderByWithRelationInput | CourtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courts.
     */
    cursor?: CourtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    distinct?: CourtsScalarFieldEnum | CourtsScalarFieldEnum[]
  }

  /**
   * Courts create
   */
  export type CourtsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * The data needed to create a Courts.
     */
    data?: XOR<CourtsCreateInput, CourtsUncheckedCreateInput>
  }

  /**
   * Courts createMany
   */
  export type CourtsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courts.
     */
    data: CourtsCreateManyInput | CourtsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courts createManyAndReturn
   */
  export type CourtsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * The data used to create many Courts.
     */
    data: CourtsCreateManyInput | CourtsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courts update
   */
  export type CourtsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * The data needed to update a Courts.
     */
    data: XOR<CourtsUpdateInput, CourtsUncheckedUpdateInput>
    /**
     * Choose, which Courts to update.
     */
    where: CourtsWhereUniqueInput
  }

  /**
   * Courts updateMany
   */
  export type CourtsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtsUpdateManyMutationInput, CourtsUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtsWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
  }

  /**
   * Courts updateManyAndReturn
   */
  export type CourtsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtsUpdateManyMutationInput, CourtsUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtsWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courts upsert
   */
  export type CourtsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * The filter to search for the Courts to update in case it exists.
     */
    where: CourtsWhereUniqueInput
    /**
     * In case the Courts found by the `where` argument doesn't exist, create a new Courts with this data.
     */
    create: XOR<CourtsCreateInput, CourtsUncheckedCreateInput>
    /**
     * In case the Courts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourtsUpdateInput, CourtsUncheckedUpdateInput>
  }

  /**
   * Courts delete
   */
  export type CourtsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    /**
     * Filter which Courts to delete.
     */
    where: CourtsWhereUniqueInput
  }

  /**
   * Courts deleteMany
   */
  export type CourtsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courts to delete
     */
    where?: CourtsWhereInput
    /**
     * Limit how many Courts to delete.
     */
    limit?: number
  }

  /**
   * Courts.Club
   */
  export type Courts$ClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * Courts.Sessions
   */
  export type Courts$SessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Courts without action
   */
  export type CourtsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    charges: number | null
    club_id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: bigint | null
    charges: bigint | null
    club_id: bigint | null
  }

  export type EventMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    charges: bigint | null
    club_id: bigint | null
    description: string | null
    picture: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    charges: bigint | null
    club_id: bigint | null
    description: string | null
    picture: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    charges: number
    club_id: number
    description: number
    picture: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    charges?: true
    club_id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    charges?: true
    club_id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
    description?: true
    picture?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
    description?: true
    picture?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    charges?: true
    club_id?: true
    description?: true
    picture?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: bigint
    created_at: Date
    name: string | null
    charges: bigint | null
    club_id: bigint | null
    description: string | null
    picture: string | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    description?: boolean
    picture?: boolean
    Club?: boolean | Event$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    description?: boolean
    picture?: boolean
    Club?: boolean | Event$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    description?: boolean
    picture?: boolean
    Club?: boolean | Event$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    charges?: boolean
    club_id?: boolean
    description?: boolean
    picture?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "charges" | "club_id" | "description" | "picture", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Event$ClubArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Event$ClubArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Event$ClubArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      Club: Prisma.$ClubPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      name: string | null
      charges: bigint | null
      club_id: bigint | null
      description: string | null
      picture: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Club<T extends Event$ClubArgs<ExtArgs> = {}>(args?: Subset<T, Event$ClubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'BigInt'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
    readonly name: FieldRef<"Event", 'String'>
    readonly charges: FieldRef<"Event", 'BigInt'>
    readonly club_id: FieldRef<"Event", 'BigInt'>
    readonly description: FieldRef<"Event", 'String'>
    readonly picture: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data?: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.Club
   */
  export type Event$ClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: bigint | null
    event_id: bigint | null
  }

  export type EventsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    event_id: bigint | null
  }

  export type EventsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    event_id: bigint | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    created_at: number
    event_id: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    created_at?: true
    event_id?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    created_at?: true
    event_id?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    created_at?: true
    event_id?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: bigint
    created_at: Date
    event_id: bigint | null
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    event_id?: boolean
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    event_id?: boolean
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    event_id?: boolean
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    created_at?: boolean
    event_id?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "event_id", ExtArgs["result"]["events"]>

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      event_id: bigint | null
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'BigInt'>
    readonly created_at: FieldRef<"Events", 'DateTime'>
    readonly event_id: FieldRef<"Events", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data?: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
  }


  /**
   * Model Players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersAvgAggregateOutputType = {
    id: number | null
    club_id: number | null
  }

  export type PlayersSumAggregateOutputType = {
    id: bigint | null
    club_id: bigint | null
  }

  export type PlayersMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    club_id: bigint | null
    picture: string | null
    email: string | null
    password: string | null
  }

  export type PlayersMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    name: string | null
    club_id: bigint | null
    picture: string | null
    email: string | null
    password: string | null
  }

  export type PlayersCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    club_id: number
    picture: number
    email: number
    password: number
    _all: number
  }


  export type PlayersAvgAggregateInputType = {
    id?: true
    club_id?: true
  }

  export type PlayersSumAggregateInputType = {
    id?: true
    club_id?: true
  }

  export type PlayersMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    club_id?: true
    picture?: true
    email?: true
    password?: true
  }

  export type PlayersMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    club_id?: true
    picture?: true
    email?: true
    password?: true
  }

  export type PlayersCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    club_id?: true
    picture?: true
    email?: true
    password?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to aggregate.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type PlayersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithAggregationInput | PlayersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: PlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _avg?: PlayersAvgAggregateInputType
    _sum?: PlayersSumAggregateInputType
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    id: bigint
    created_at: Date
    name: string | null
    club_id: bigint | null
    picture: string | null
    email: string | null
    password: string | null
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends PlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type PlayersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    club_id?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
    Club?: boolean | Players$ClubArgs<ExtArgs>
    Sessions?: boolean | Players$SessionsArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    club_id?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
    Club?: boolean | Players$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    club_id?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
    Club?: boolean | Players$ClubArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    club_id?: boolean
    picture?: boolean
    email?: boolean
    password?: boolean
  }

  export type PlayersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "club_id" | "picture" | "email" | "password", ExtArgs["result"]["players"]>
  export type PlayersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Players$ClubArgs<ExtArgs>
    Sessions?: boolean | Players$SessionsArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Players$ClubArgs<ExtArgs>
  }
  export type PlayersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Players$ClubArgs<ExtArgs>
  }

  export type $PlayersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Players"
    objects: {
      Club: Prisma.$ClubPayload<ExtArgs> | null
      Sessions: Prisma.$SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      name: string | null
      club_id: bigint | null
      picture: string | null
      email: string | null
      password: string | null
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type PlayersGetPayload<S extends boolean | null | undefined | PlayersDefaultArgs> = $Result.GetResult<Prisma.$PlayersPayload, S>

  type PlayersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface PlayersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Players'], meta: { name: 'Players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {PlayersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayersFindUniqueArgs>(args: SelectSubset<T, PlayersFindUniqueArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayersFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayersFindFirstArgs>(args?: SelectSubset<T, PlayersFindFirstArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayersFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playersWithIdOnly = await prisma.players.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayersFindManyArgs>(args?: SelectSubset<T, PlayersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players.
     * @param {PlayersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends PlayersCreateArgs>(args: SelectSubset<T, PlayersCreateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayersCreateManyArgs>(args?: SelectSubset<T, PlayersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayersCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayersCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Players.
     * @param {PlayersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends PlayersDeleteArgs>(args: SelectSubset<T, PlayersDeleteArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players.
     * @param {PlayersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayersUpdateArgs>(args: SelectSubset<T, PlayersUpdateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayersDeleteManyArgs>(args?: SelectSubset<T, PlayersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayersUpdateManyArgs>(args: SelectSubset<T, PlayersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayersUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayersUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Players.
     * @param {PlayersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends PlayersUpsertArgs>(args: SelectSubset<T, PlayersUpsertArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayersCountArgs>(
      args?: Subset<T, PlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayersGroupByArgs['orderBy'] }
        : { orderBy?: PlayersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Players model
   */
  readonly fields: PlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Club<T extends Players$ClubArgs<ExtArgs> = {}>(args?: Subset<T, Players$ClubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Sessions<T extends Players$SessionsArgs<ExtArgs> = {}>(args?: Subset<T, Players$SessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Players model
   */
  interface PlayersFieldRefs {
    readonly id: FieldRef<"Players", 'BigInt'>
    readonly created_at: FieldRef<"Players", 'DateTime'>
    readonly name: FieldRef<"Players", 'String'>
    readonly club_id: FieldRef<"Players", 'BigInt'>
    readonly picture: FieldRef<"Players", 'String'>
    readonly email: FieldRef<"Players", 'String'>
    readonly password: FieldRef<"Players", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Players findUnique
   */
  export type PlayersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findUniqueOrThrow
   */
  export type PlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findFirst
   */
  export type PlayersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findFirstOrThrow
   */
  export type PlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findMany
   */
  export type PlayersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players create
   */
  export type PlayersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to create a Players.
     */
    data?: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
  }

  /**
   * Players createMany
   */
  export type PlayersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players createManyAndReturn
   */
  export type PlayersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Players update
   */
  export type PlayersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to update a Players.
     */
    data: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
    /**
     * Choose, which Players to update.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players updateMany
   */
  export type PlayersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Players updateManyAndReturn
   */
  export type PlayersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Players upsert
   */
  export type PlayersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The filter to search for the Players to update in case it exists.
     */
    where: PlayersWhereUniqueInput
    /**
     * In case the Players found by the `where` argument doesn't exist, create a new Players with this data.
     */
    create: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
    /**
     * In case the Players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
  }

  /**
   * Players delete
   */
  export type PlayersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter which Players to delete.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players deleteMany
   */
  export type PlayersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Players.Club
   */
  export type Players$ClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * Players.Sessions
   */
  export type Players$SessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Players without action
   */
  export type PlayersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
  }


  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
    player_id: number | null
    charges: number | null
    coach_id: number | null
    court_id: number | null
    club_id: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: bigint | null
    player_id: bigint | null
    charges: bigint | null
    coach_id: bigint | null
    court_id: bigint | null
    club_id: bigint | null
  }

  export type SessionsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    player_id: bigint | null
    charges: bigint | null
    coach_id: bigint | null
    court_id: bigint | null
    club_id: bigint | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    player_id: bigint | null
    charges: bigint | null
    coach_id: bigint | null
    court_id: bigint | null
    club_id: bigint | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    created_at: number
    player_id: number
    charges: number
    coach_id: number
    court_id: number
    club_id: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
    player_id?: true
    charges?: true
    coach_id?: true
    court_id?: true
    club_id?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    player_id?: true
    charges?: true
    coach_id?: true
    court_id?: true
    club_id?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    created_at?: true
    player_id?: true
    charges?: true
    coach_id?: true
    court_id?: true
    club_id?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    created_at?: true
    player_id?: true
    charges?: true
    coach_id?: true
    court_id?: true
    club_id?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    created_at?: true
    player_id?: true
    charges?: true
    coach_id?: true
    court_id?: true
    club_id?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: bigint
    created_at: Date
    player_id: bigint | null
    charges: bigint | null
    coach_id: bigint | null
    court_id: bigint | null
    club_id: bigint | null
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    player_id?: boolean
    charges?: boolean
    coach_id?: boolean
    court_id?: boolean
    club_id?: boolean
    Club?: boolean | Sessions$ClubArgs<ExtArgs>
    Coaches?: boolean | Sessions$CoachesArgs<ExtArgs>
    Courts?: boolean | Sessions$CourtsArgs<ExtArgs>
    Players?: boolean | Sessions$PlayersArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    player_id?: boolean
    charges?: boolean
    coach_id?: boolean
    court_id?: boolean
    club_id?: boolean
    Club?: boolean | Sessions$ClubArgs<ExtArgs>
    Coaches?: boolean | Sessions$CoachesArgs<ExtArgs>
    Courts?: boolean | Sessions$CourtsArgs<ExtArgs>
    Players?: boolean | Sessions$PlayersArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    player_id?: boolean
    charges?: boolean
    coach_id?: boolean
    court_id?: boolean
    club_id?: boolean
    Club?: boolean | Sessions$ClubArgs<ExtArgs>
    Coaches?: boolean | Sessions$CoachesArgs<ExtArgs>
    Courts?: boolean | Sessions$CourtsArgs<ExtArgs>
    Players?: boolean | Sessions$PlayersArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectScalar = {
    id?: boolean
    created_at?: boolean
    player_id?: boolean
    charges?: boolean
    coach_id?: boolean
    court_id?: boolean
    club_id?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "player_id" | "charges" | "coach_id" | "court_id" | "club_id", ExtArgs["result"]["sessions"]>
  export type SessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Sessions$ClubArgs<ExtArgs>
    Coaches?: boolean | Sessions$CoachesArgs<ExtArgs>
    Courts?: boolean | Sessions$CourtsArgs<ExtArgs>
    Players?: boolean | Sessions$PlayersArgs<ExtArgs>
  }
  export type SessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Sessions$ClubArgs<ExtArgs>
    Coaches?: boolean | Sessions$CoachesArgs<ExtArgs>
    Courts?: boolean | Sessions$CourtsArgs<ExtArgs>
    Players?: boolean | Sessions$PlayersArgs<ExtArgs>
  }
  export type SessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Club?: boolean | Sessions$ClubArgs<ExtArgs>
    Coaches?: boolean | Sessions$CoachesArgs<ExtArgs>
    Courts?: boolean | Sessions$CourtsArgs<ExtArgs>
    Players?: boolean | Sessions$PlayersArgs<ExtArgs>
  }

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {
      Club: Prisma.$ClubPayload<ExtArgs> | null
      Coaches: Prisma.$CoachesPayload<ExtArgs> | null
      Courts: Prisma.$CourtsPayload<ExtArgs> | null
      Players: Prisma.$PlayersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      player_id: bigint | null
      charges: bigint | null
      coach_id: bigint | null
      court_id: bigint | null
      club_id: bigint | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Club<T extends Sessions$ClubArgs<ExtArgs> = {}>(args?: Subset<T, Sessions$ClubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Coaches<T extends Sessions$CoachesArgs<ExtArgs> = {}>(args?: Subset<T, Sessions$CoachesArgs<ExtArgs>>): Prisma__CoachesClient<$Result.GetResult<Prisma.$CoachesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Courts<T extends Sessions$CourtsArgs<ExtArgs> = {}>(args?: Subset<T, Sessions$CourtsArgs<ExtArgs>>): Prisma__CourtsClient<$Result.GetResult<Prisma.$CourtsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Players<T extends Sessions$PlayersArgs<ExtArgs> = {}>(args?: Subset<T, Sessions$PlayersArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly id: FieldRef<"Sessions", 'BigInt'>
    readonly created_at: FieldRef<"Sessions", 'DateTime'>
    readonly player_id: FieldRef<"Sessions", 'BigInt'>
    readonly charges: FieldRef<"Sessions", 'BigInt'>
    readonly coach_id: FieldRef<"Sessions", 'BigInt'>
    readonly court_id: FieldRef<"Sessions", 'BigInt'>
    readonly club_id: FieldRef<"Sessions", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data?: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions createManyAndReturn
   */
  export type SessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions updateManyAndReturn
   */
  export type SessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions.Club
   */
  export type Sessions$ClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * Sessions.Coaches
   */
  export type Sessions$CoachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coaches
     */
    select?: CoachesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coaches
     */
    omit?: CoachesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachesInclude<ExtArgs> | null
    where?: CoachesWhereInput
  }

  /**
   * Sessions.Courts
   */
  export type Sessions$CourtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courts
     */
    select?: CourtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courts
     */
    omit?: CourtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtsInclude<ExtArgs> | null
    where?: CourtsWhereInput
  }

  /**
   * Sessions.Players
   */
  export type Sessions$PlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    where?: PlayersWhereInput
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
  }


  /**
   * Model passwordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type PasswordResetTokenSumAggregateOutputType = {
    id: number | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: number | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: number | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenAvgAggregateInputType = {
    id?: true
  }

  export type PasswordResetTokenSumAggregateInputType = {
    id?: true
  }

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwordResetToken to aggregate.
     */
    where?: passwordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResetTokens to fetch.
     */
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: passwordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned passwordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type passwordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: passwordResetTokenWhereInput
    orderBy?: passwordResetTokenOrderByWithAggregationInput | passwordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: passwordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _avg?: PasswordResetTokenAvgAggregateInputType
    _sum?: PasswordResetTokenSumAggregateInputType
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: number
    email: string
    token: string
    expires: Date
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends passwordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type passwordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type passwordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type passwordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type passwordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }

  export type passwordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expires" | "createdAt", ExtArgs["result"]["passwordResetToken"]>

  export type $passwordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "passwordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      token: string
      expires: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type passwordResetTokenGetPayload<S extends boolean | null | undefined | passwordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$passwordResetTokenPayload, S>

  type passwordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<passwordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface passwordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['passwordResetToken'], meta: { name: 'passwordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {passwordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends passwordResetTokenFindUniqueArgs>(args: SelectSubset<T, passwordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {passwordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends passwordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, passwordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends passwordResetTokenFindFirstArgs>(args?: SelectSubset<T, passwordResetTokenFindFirstArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends passwordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, passwordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends passwordResetTokenFindManyArgs>(args?: SelectSubset<T, passwordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {passwordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends passwordResetTokenCreateArgs>(args: SelectSubset<T, passwordResetTokenCreateArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {passwordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends passwordResetTokenCreateManyArgs>(args?: SelectSubset<T, passwordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {passwordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends passwordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, passwordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {passwordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends passwordResetTokenDeleteArgs>(args: SelectSubset<T, passwordResetTokenDeleteArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {passwordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends passwordResetTokenUpdateArgs>(args: SelectSubset<T, passwordResetTokenUpdateArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {passwordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends passwordResetTokenDeleteManyArgs>(args?: SelectSubset<T, passwordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends passwordResetTokenUpdateManyArgs>(args: SelectSubset<T, passwordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {passwordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends passwordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, passwordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {passwordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends passwordResetTokenUpsertArgs>(args: SelectSubset<T, passwordResetTokenUpsertArgs<ExtArgs>>): Prisma__passwordResetTokenClient<$Result.GetResult<Prisma.$passwordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends passwordResetTokenCountArgs>(
      args?: Subset<T, passwordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends passwordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: passwordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: passwordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, passwordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the passwordResetToken model
   */
  readonly fields: passwordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for passwordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__passwordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the passwordResetToken model
   */
  interface passwordResetTokenFieldRefs {
    readonly id: FieldRef<"passwordResetToken", 'Int'>
    readonly email: FieldRef<"passwordResetToken", 'String'>
    readonly token: FieldRef<"passwordResetToken", 'String'>
    readonly expires: FieldRef<"passwordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"passwordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * passwordResetToken findUnique
   */
  export type passwordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which passwordResetToken to fetch.
     */
    where: passwordResetTokenWhereUniqueInput
  }

  /**
   * passwordResetToken findUniqueOrThrow
   */
  export type passwordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which passwordResetToken to fetch.
     */
    where: passwordResetTokenWhereUniqueInput
  }

  /**
   * passwordResetToken findFirst
   */
  export type passwordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which passwordResetToken to fetch.
     */
    where?: passwordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResetTokens to fetch.
     */
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwordResetTokens.
     */
    cursor?: passwordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * passwordResetToken findFirstOrThrow
   */
  export type passwordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which passwordResetToken to fetch.
     */
    where?: passwordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResetTokens to fetch.
     */
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwordResetTokens.
     */
    cursor?: passwordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * passwordResetToken findMany
   */
  export type passwordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which passwordResetTokens to fetch.
     */
    where?: passwordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResetTokens to fetch.
     */
    orderBy?: passwordResetTokenOrderByWithRelationInput | passwordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing passwordResetTokens.
     */
    cursor?: passwordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * passwordResetToken create
   */
  export type passwordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a passwordResetToken.
     */
    data: XOR<passwordResetTokenCreateInput, passwordResetTokenUncheckedCreateInput>
  }

  /**
   * passwordResetToken createMany
   */
  export type passwordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many passwordResetTokens.
     */
    data: passwordResetTokenCreateManyInput | passwordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * passwordResetToken createManyAndReturn
   */
  export type passwordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many passwordResetTokens.
     */
    data: passwordResetTokenCreateManyInput | passwordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * passwordResetToken update
   */
  export type passwordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a passwordResetToken.
     */
    data: XOR<passwordResetTokenUpdateInput, passwordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which passwordResetToken to update.
     */
    where: passwordResetTokenWhereUniqueInput
  }

  /**
   * passwordResetToken updateMany
   */
  export type passwordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update passwordResetTokens.
     */
    data: XOR<passwordResetTokenUpdateManyMutationInput, passwordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which passwordResetTokens to update
     */
    where?: passwordResetTokenWhereInput
    /**
     * Limit how many passwordResetTokens to update.
     */
    limit?: number
  }

  /**
   * passwordResetToken updateManyAndReturn
   */
  export type passwordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update passwordResetTokens.
     */
    data: XOR<passwordResetTokenUpdateManyMutationInput, passwordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which passwordResetTokens to update
     */
    where?: passwordResetTokenWhereInput
    /**
     * Limit how many passwordResetTokens to update.
     */
    limit?: number
  }

  /**
   * passwordResetToken upsert
   */
  export type passwordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the passwordResetToken to update in case it exists.
     */
    where: passwordResetTokenWhereUniqueInput
    /**
     * In case the passwordResetToken found by the `where` argument doesn't exist, create a new passwordResetToken with this data.
     */
    create: XOR<passwordResetTokenCreateInput, passwordResetTokenUncheckedCreateInput>
    /**
     * In case the passwordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<passwordResetTokenUpdateInput, passwordResetTokenUncheckedUpdateInput>
  }

  /**
   * passwordResetToken delete
   */
  export type passwordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
    /**
     * Filter which passwordResetToken to delete.
     */
    where: passwordResetTokenWhereUniqueInput
  }

  /**
   * passwordResetToken deleteMany
   */
  export type passwordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwordResetTokens to delete
     */
    where?: passwordResetTokenWhereInput
    /**
     * Limit how many passwordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * passwordResetToken without action
   */
  export type passwordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordResetToken
     */
    select?: passwordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordResetToken
     */
    omit?: passwordResetTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClubScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    club_manager: 'club_manager',
    email: 'email',
    password: 'password'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const CoachesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    charges: 'charges',
    club_id: 'club_id',
    picture: 'picture',
    email: 'email',
    password: 'password'
  };

  export type CoachesScalarFieldEnum = (typeof CoachesScalarFieldEnum)[keyof typeof CoachesScalarFieldEnum]


  export const CourtsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    charges: 'charges',
    club_id: 'club_id'
  };

  export type CourtsScalarFieldEnum = (typeof CourtsScalarFieldEnum)[keyof typeof CourtsScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    charges: 'charges',
    club_id: 'club_id',
    description: 'description',
    picture: 'picture'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    event_id: 'event_id'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const PlayersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    club_id: 'club_id',
    picture: 'picture',
    email: 'email',
    password: 'password'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    player_id: 'player_id',
    charges: 'charges',
    coach_id: 'coach_id',
    court_id: 'court_id',
    club_id: 'club_id'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: BigIntFilter<"Club"> | bigint | number
    created_at?: DateTimeFilter<"Club"> | Date | string
    name?: StringNullableFilter<"Club"> | string | null
    club_manager?: StringNullableFilter<"Club"> | string | null
    email?: StringNullableFilter<"Club"> | string | null
    password?: StringNullableFilter<"Club"> | string | null
    Coaches?: CoachesListRelationFilter
    Courts?: CourtsListRelationFilter
    Event?: EventListRelationFilter
    Players?: PlayersListRelationFilter
    Sessions?: SessionsListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    club_manager?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    Coaches?: CoachesOrderByRelationAggregateInput
    Courts?: CourtsOrderByRelationAggregateInput
    Event?: EventOrderByRelationAggregateInput
    Players?: PlayersOrderByRelationAggregateInput
    Sessions?: SessionsOrderByRelationAggregateInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    created_at?: DateTimeFilter<"Club"> | Date | string
    name?: StringNullableFilter<"Club"> | string | null
    club_manager?: StringNullableFilter<"Club"> | string | null
    password?: StringNullableFilter<"Club"> | string | null
    Coaches?: CoachesListRelationFilter
    Courts?: CourtsListRelationFilter
    Event?: EventListRelationFilter
    Players?: PlayersListRelationFilter
    Sessions?: SessionsListRelationFilter
  }, "id" | "email">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    club_manager?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: ClubCountOrderByAggregateInput
    _avg?: ClubAvgOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
    _sum?: ClubSumOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Club"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Club"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Club"> | string | null
    club_manager?: StringNullableWithAggregatesFilter<"Club"> | string | null
    email?: StringNullableWithAggregatesFilter<"Club"> | string | null
    password?: StringNullableWithAggregatesFilter<"Club"> | string | null
  }

  export type CoachesWhereInput = {
    AND?: CoachesWhereInput | CoachesWhereInput[]
    OR?: CoachesWhereInput[]
    NOT?: CoachesWhereInput | CoachesWhereInput[]
    id?: BigIntFilter<"Coaches"> | bigint | number
    created_at?: DateTimeFilter<"Coaches"> | Date | string
    name?: StringNullableFilter<"Coaches"> | string | null
    charges?: BigIntNullableFilter<"Coaches"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Coaches"> | bigint | number | null
    picture?: StringNullableFilter<"Coaches"> | string | null
    email?: StringNullableFilter<"Coaches"> | string | null
    password?: StringNullableFilter<"Coaches"> | string | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    Sessions?: SessionsListRelationFilter
  }

  export type CoachesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    Club?: ClubOrderByWithRelationInput
    Sessions?: SessionsOrderByRelationAggregateInput
  }

  export type CoachesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: CoachesWhereInput | CoachesWhereInput[]
    OR?: CoachesWhereInput[]
    NOT?: CoachesWhereInput | CoachesWhereInput[]
    created_at?: DateTimeFilter<"Coaches"> | Date | string
    name?: StringNullableFilter<"Coaches"> | string | null
    charges?: BigIntNullableFilter<"Coaches"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Coaches"> | bigint | number | null
    picture?: StringNullableFilter<"Coaches"> | string | null
    password?: StringNullableFilter<"Coaches"> | string | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    Sessions?: SessionsListRelationFilter
  }, "id" | "email">

  export type CoachesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: CoachesCountOrderByAggregateInput
    _avg?: CoachesAvgOrderByAggregateInput
    _max?: CoachesMaxOrderByAggregateInput
    _min?: CoachesMinOrderByAggregateInput
    _sum?: CoachesSumOrderByAggregateInput
  }

  export type CoachesScalarWhereWithAggregatesInput = {
    AND?: CoachesScalarWhereWithAggregatesInput | CoachesScalarWhereWithAggregatesInput[]
    OR?: CoachesScalarWhereWithAggregatesInput[]
    NOT?: CoachesScalarWhereWithAggregatesInput | CoachesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Coaches"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Coaches"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Coaches"> | string | null
    charges?: BigIntNullableWithAggregatesFilter<"Coaches"> | bigint | number | null
    club_id?: BigIntNullableWithAggregatesFilter<"Coaches"> | bigint | number | null
    picture?: StringNullableWithAggregatesFilter<"Coaches"> | string | null
    email?: StringNullableWithAggregatesFilter<"Coaches"> | string | null
    password?: StringNullableWithAggregatesFilter<"Coaches"> | string | null
  }

  export type CourtsWhereInput = {
    AND?: CourtsWhereInput | CourtsWhereInput[]
    OR?: CourtsWhereInput[]
    NOT?: CourtsWhereInput | CourtsWhereInput[]
    id?: BigIntFilter<"Courts"> | bigint | number
    created_at?: DateTimeFilter<"Courts"> | Date | string
    name?: StringNullableFilter<"Courts"> | string | null
    charges?: BigIntNullableFilter<"Courts"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Courts"> | bigint | number | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    Sessions?: SessionsListRelationFilter
  }

  export type CourtsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    Club?: ClubOrderByWithRelationInput
    Sessions?: SessionsOrderByRelationAggregateInput
  }

  export type CourtsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CourtsWhereInput | CourtsWhereInput[]
    OR?: CourtsWhereInput[]
    NOT?: CourtsWhereInput | CourtsWhereInput[]
    created_at?: DateTimeFilter<"Courts"> | Date | string
    name?: StringNullableFilter<"Courts"> | string | null
    charges?: BigIntNullableFilter<"Courts"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Courts"> | bigint | number | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    Sessions?: SessionsListRelationFilter
  }, "id">

  export type CourtsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    _count?: CourtsCountOrderByAggregateInput
    _avg?: CourtsAvgOrderByAggregateInput
    _max?: CourtsMaxOrderByAggregateInput
    _min?: CourtsMinOrderByAggregateInput
    _sum?: CourtsSumOrderByAggregateInput
  }

  export type CourtsScalarWhereWithAggregatesInput = {
    AND?: CourtsScalarWhereWithAggregatesInput | CourtsScalarWhereWithAggregatesInput[]
    OR?: CourtsScalarWhereWithAggregatesInput[]
    NOT?: CourtsScalarWhereWithAggregatesInput | CourtsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Courts"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Courts"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Courts"> | string | null
    charges?: BigIntNullableWithAggregatesFilter<"Courts"> | bigint | number | null
    club_id?: BigIntNullableWithAggregatesFilter<"Courts"> | bigint | number | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: BigIntFilter<"Event"> | bigint | number
    created_at?: DateTimeFilter<"Event"> | Date | string
    name?: StringNullableFilter<"Event"> | string | null
    charges?: BigIntNullableFilter<"Event"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Event"> | bigint | number | null
    description?: StringNullableFilter<"Event"> | string | null
    picture?: StringNullableFilter<"Event"> | string | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    Club?: ClubOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    created_at?: DateTimeFilter<"Event"> | Date | string
    name?: StringNullableFilter<"Event"> | string | null
    charges?: BigIntNullableFilter<"Event"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Event"> | bigint | number | null
    description?: StringNullableFilter<"Event"> | string | null
    picture?: StringNullableFilter<"Event"> | string | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Event"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Event"> | string | null
    charges?: BigIntNullableWithAggregatesFilter<"Event"> | bigint | number | null
    club_id?: BigIntNullableWithAggregatesFilter<"Event"> | bigint | number | null
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: BigIntFilter<"Events"> | bigint | number
    created_at?: DateTimeFilter<"Events"> | Date | string
    event_id?: BigIntNullableFilter<"Events"> | bigint | number | null
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrderInput | SortOrder
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    created_at?: DateTimeFilter<"Events"> | Date | string
    event_id?: BigIntNullableFilter<"Events"> | bigint | number | null
  }, "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrderInput | SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Events"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    event_id?: BigIntNullableWithAggregatesFilter<"Events"> | bigint | number | null
  }

  export type PlayersWhereInput = {
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    id?: BigIntFilter<"Players"> | bigint | number
    created_at?: DateTimeFilter<"Players"> | Date | string
    name?: StringNullableFilter<"Players"> | string | null
    club_id?: BigIntNullableFilter<"Players"> | bigint | number | null
    picture?: StringNullableFilter<"Players"> | string | null
    email?: StringNullableFilter<"Players"> | string | null
    password?: StringNullableFilter<"Players"> | string | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    Sessions?: SessionsListRelationFilter
  }

  export type PlayersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    Club?: ClubOrderByWithRelationInput
    Sessions?: SessionsOrderByRelationAggregateInput
  }

  export type PlayersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    created_at?: DateTimeFilter<"Players"> | Date | string
    name?: StringNullableFilter<"Players"> | string | null
    club_id?: BigIntNullableFilter<"Players"> | bigint | number | null
    picture?: StringNullableFilter<"Players"> | string | null
    password?: StringNullableFilter<"Players"> | string | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    Sessions?: SessionsListRelationFilter
  }, "id" | "email">

  export type PlayersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: PlayersCountOrderByAggregateInput
    _avg?: PlayersAvgOrderByAggregateInput
    _max?: PlayersMaxOrderByAggregateInput
    _min?: PlayersMinOrderByAggregateInput
    _sum?: PlayersSumOrderByAggregateInput
  }

  export type PlayersScalarWhereWithAggregatesInput = {
    AND?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    OR?: PlayersScalarWhereWithAggregatesInput[]
    NOT?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Players"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Players"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Players"> | string | null
    club_id?: BigIntNullableWithAggregatesFilter<"Players"> | bigint | number | null
    picture?: StringNullableWithAggregatesFilter<"Players"> | string | null
    email?: StringNullableWithAggregatesFilter<"Players"> | string | null
    password?: StringNullableWithAggregatesFilter<"Players"> | string | null
  }

  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    id?: BigIntFilter<"Sessions"> | bigint | number
    created_at?: DateTimeFilter<"Sessions"> | Date | string
    player_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    charges?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    coach_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    court_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    Coaches?: XOR<CoachesNullableScalarRelationFilter, CoachesWhereInput> | null
    Courts?: XOR<CourtsNullableScalarRelationFilter, CourtsWhereInput> | null
    Players?: XOR<PlayersNullableScalarRelationFilter, PlayersWhereInput> | null
  }

  export type SessionsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    player_id?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    coach_id?: SortOrderInput | SortOrder
    court_id?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    Club?: ClubOrderByWithRelationInput
    Coaches?: CoachesOrderByWithRelationInput
    Courts?: CourtsOrderByWithRelationInput
    Players?: PlayersOrderByWithRelationInput
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    created_at?: DateTimeFilter<"Sessions"> | Date | string
    player_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    charges?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    coach_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    court_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    Club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    Coaches?: XOR<CoachesNullableScalarRelationFilter, CoachesWhereInput> | null
    Courts?: XOR<CourtsNullableScalarRelationFilter, CourtsWhereInput> | null
    Players?: XOR<PlayersNullableScalarRelationFilter, PlayersWhereInput> | null
  }, "id">

  export type SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    player_id?: SortOrderInput | SortOrder
    charges?: SortOrderInput | SortOrder
    coach_id?: SortOrderInput | SortOrder
    court_id?: SortOrderInput | SortOrder
    club_id?: SortOrderInput | SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _avg?: SessionsAvgOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
    _sum?: SessionsSumOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Sessions"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Sessions"> | Date | string
    player_id?: BigIntNullableWithAggregatesFilter<"Sessions"> | bigint | number | null
    charges?: BigIntNullableWithAggregatesFilter<"Sessions"> | bigint | number | null
    coach_id?: BigIntNullableWithAggregatesFilter<"Sessions"> | bigint | number | null
    court_id?: BigIntNullableWithAggregatesFilter<"Sessions"> | bigint | number | null
    club_id?: BigIntNullableWithAggregatesFilter<"Sessions"> | bigint | number | null
  }

  export type passwordResetTokenWhereInput = {
    AND?: passwordResetTokenWhereInput | passwordResetTokenWhereInput[]
    OR?: passwordResetTokenWhereInput[]
    NOT?: passwordResetTokenWhereInput | passwordResetTokenWhereInput[]
    id?: IntFilter<"passwordResetToken"> | number
    email?: StringFilter<"passwordResetToken"> | string
    token?: StringFilter<"passwordResetToken"> | string
    expires?: DateTimeFilter<"passwordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"passwordResetToken"> | Date | string
  }

  export type passwordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: passwordResetTokenWhereInput | passwordResetTokenWhereInput[]
    OR?: passwordResetTokenWhereInput[]
    NOT?: passwordResetTokenWhereInput | passwordResetTokenWhereInput[]
    email?: StringFilter<"passwordResetToken"> | string
    token?: StringFilter<"passwordResetToken"> | string
    expires?: DateTimeFilter<"passwordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"passwordResetToken"> | Date | string
  }, "id">

  export type passwordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    _count?: passwordResetTokenCountOrderByAggregateInput
    _avg?: passwordResetTokenAvgOrderByAggregateInput
    _max?: passwordResetTokenMaxOrderByAggregateInput
    _min?: passwordResetTokenMinOrderByAggregateInput
    _sum?: passwordResetTokenSumOrderByAggregateInput
  }

  export type passwordResetTokenScalarWhereWithAggregatesInput = {
    AND?: passwordResetTokenScalarWhereWithAggregatesInput | passwordResetTokenScalarWhereWithAggregatesInput[]
    OR?: passwordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: passwordResetTokenScalarWhereWithAggregatesInput | passwordResetTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"passwordResetToken"> | number
    email?: StringWithAggregatesFilter<"passwordResetToken"> | string
    token?: StringWithAggregatesFilter<"passwordResetToken"> | string
    expires?: DateTimeWithAggregatesFilter<"passwordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"passwordResetToken"> | Date | string
  }

  export type ClubCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesCreateNestedManyWithoutClubInput
    Courts?: CourtsCreateNestedManyWithoutClubInput
    Event?: EventCreateNestedManyWithoutClubInput
    Players?: PlayersCreateNestedManyWithoutClubInput
    Sessions?: SessionsCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesUncheckedCreateNestedManyWithoutClubInput
    Courts?: CourtsUncheckedCreateNestedManyWithoutClubInput
    Event?: EventUncheckedCreateNestedManyWithoutClubInput
    Players?: PlayersUncheckedCreateNestedManyWithoutClubInput
    Sessions?: SessionsUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUpdateManyWithoutClubNestedInput
    Courts?: CourtsUpdateManyWithoutClubNestedInput
    Event?: EventUpdateManyWithoutClubNestedInput
    Players?: PlayersUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUncheckedUpdateManyWithoutClubNestedInput
    Courts?: CourtsUncheckedUpdateManyWithoutClubNestedInput
    Event?: EventUncheckedUpdateManyWithoutClubNestedInput
    Players?: PlayersUncheckedUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
  }

  export type ClubUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoachesCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Club?: ClubCreateNestedOneWithoutCoachesInput
    Sessions?: SessionsCreateNestedManyWithoutCoachesInput
  }

  export type CoachesUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    club_id?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Sessions?: SessionsUncheckedCreateNestedManyWithoutCoachesInput
  }

  export type CoachesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Club?: ClubUpdateOneWithoutCoachesNestedInput
    Sessions?: SessionsUpdateManyWithoutCoachesNestedInput
  }

  export type CoachesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Sessions?: SessionsUncheckedUpdateManyWithoutCoachesNestedInput
  }

  export type CoachesCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    club_id?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
  }

  export type CoachesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoachesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourtsCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    Club?: ClubCreateNestedOneWithoutCourtsInput
    Sessions?: SessionsCreateNestedManyWithoutCourtsInput
  }

  export type CourtsUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    club_id?: bigint | number | null
    Sessions?: SessionsUncheckedCreateNestedManyWithoutCourtsInput
  }

  export type CourtsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Club?: ClubUpdateOneWithoutCourtsNestedInput
    Sessions?: SessionsUpdateManyWithoutCourtsNestedInput
  }

  export type CourtsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Sessions?: SessionsUncheckedUpdateManyWithoutCourtsNestedInput
  }

  export type CourtsCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type CourtsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type CourtsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EventCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    description?: string | null
    picture?: string | null
    Club?: ClubCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    club_id?: bigint | number | null
    description?: string | null
    picture?: string | null
  }

  export type EventUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    Club?: ClubUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    club_id?: bigint | number | null
    description?: string | null
    picture?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventsCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    event_id?: bigint | number | null
  }

  export type EventsUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    event_id?: bigint | number | null
  }

  export type EventsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EventsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EventsCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    event_id?: bigint | number | null
  }

  export type EventsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type PlayersCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Club?: ClubCreateNestedOneWithoutPlayersInput
    Sessions?: SessionsCreateNestedManyWithoutPlayersInput
  }

  export type PlayersUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_id?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Sessions?: SessionsUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Club?: ClubUpdateOneWithoutPlayersNestedInput
    Sessions?: SessionsUpdateManyWithoutPlayersNestedInput
  }

  export type PlayersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Sessions?: SessionsUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type PlayersCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_id?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
  }

  export type PlayersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionsCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    charges?: bigint | number | null
    Club?: ClubCreateNestedOneWithoutSessionsInput
    Coaches?: CoachesCreateNestedOneWithoutSessionsInput
    Courts?: CourtsCreateNestedOneWithoutSessionsInput
    Players?: PlayersCreateNestedOneWithoutSessionsInput
  }

  export type SessionsUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    player_id?: bigint | number | null
    charges?: bigint | number | null
    coach_id?: bigint | number | null
    court_id?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type SessionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Club?: ClubUpdateOneWithoutSessionsNestedInput
    Coaches?: CoachesUpdateOneWithoutSessionsNestedInput
    Courts?: CourtsUpdateOneWithoutSessionsNestedInput
    Players?: PlayersUpdateOneWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coach_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    court_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    player_id?: bigint | number | null
    charges?: bigint | number | null
    coach_id?: bigint | number | null
    court_id?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type SessionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coach_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    court_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type passwordResetTokenCreateInput = {
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type passwordResetTokenUncheckedCreateInput = {
    id?: number
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type passwordResetTokenUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenCreateManyInput = {
    id?: number
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type passwordResetTokenUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CoachesListRelationFilter = {
    every?: CoachesWhereInput
    some?: CoachesWhereInput
    none?: CoachesWhereInput
  }

  export type CourtsListRelationFilter = {
    every?: CourtsWhereInput
    some?: CourtsWhereInput
    none?: CourtsWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type PlayersListRelationFilter = {
    every?: PlayersWhereInput
    some?: PlayersWhereInput
    none?: PlayersWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: SessionsWhereInput
    some?: SessionsWhereInput
    none?: SessionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CoachesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourtsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    club_manager?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type ClubAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    club_manager?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    club_manager?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type ClubSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ClubNullableScalarRelationFilter = {
    is?: ClubWhereInput | null
    isNot?: ClubWhereInput | null
  }

  export type CoachesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type CoachesAvgOrderByAggregateInput = {
    id?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type CoachesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type CoachesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type CoachesSumOrderByAggregateInput = {
    id?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type CourtsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type CourtsAvgOrderByAggregateInput = {
    id?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type CourtsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type CourtsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type CourtsSumOrderByAggregateInput = {
    id?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
    description?: SortOrder
    picture?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
    description?: SortOrder
    picture?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
    description?: SortOrder
    picture?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    charges?: SortOrder
    club_id?: SortOrder
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    event_id?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type PlayersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    club_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type PlayersAvgOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
  }

  export type PlayersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    club_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type PlayersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    club_id?: SortOrder
    picture?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type PlayersSumOrderByAggregateInput = {
    id?: SortOrder
    club_id?: SortOrder
  }

  export type CoachesNullableScalarRelationFilter = {
    is?: CoachesWhereInput | null
    isNot?: CoachesWhereInput | null
  }

  export type CourtsNullableScalarRelationFilter = {
    is?: CourtsWhereInput | null
    isNot?: CourtsWhereInput | null
  }

  export type PlayersNullableScalarRelationFilter = {
    is?: PlayersWhereInput | null
    isNot?: PlayersWhereInput | null
  }

  export type SessionsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    player_id?: SortOrder
    charges?: SortOrder
    coach_id?: SortOrder
    court_id?: SortOrder
    club_id?: SortOrder
  }

  export type SessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    charges?: SortOrder
    coach_id?: SortOrder
    court_id?: SortOrder
    club_id?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    player_id?: SortOrder
    charges?: SortOrder
    coach_id?: SortOrder
    court_id?: SortOrder
    club_id?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    player_id?: SortOrder
    charges?: SortOrder
    coach_id?: SortOrder
    court_id?: SortOrder
    club_id?: SortOrder
  }

  export type SessionsSumOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    charges?: SortOrder
    coach_id?: SortOrder
    court_id?: SortOrder
    club_id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type passwordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type passwordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CoachesCreateNestedManyWithoutClubInput = {
    create?: XOR<CoachesCreateWithoutClubInput, CoachesUncheckedCreateWithoutClubInput> | CoachesCreateWithoutClubInput[] | CoachesUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CoachesCreateOrConnectWithoutClubInput | CoachesCreateOrConnectWithoutClubInput[]
    createMany?: CoachesCreateManyClubInputEnvelope
    connect?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
  }

  export type CourtsCreateNestedManyWithoutClubInput = {
    create?: XOR<CourtsCreateWithoutClubInput, CourtsUncheckedCreateWithoutClubInput> | CourtsCreateWithoutClubInput[] | CourtsUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CourtsCreateOrConnectWithoutClubInput | CourtsCreateOrConnectWithoutClubInput[]
    createMany?: CourtsCreateManyClubInputEnvelope
    connect?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutClubInput = {
    create?: XOR<EventCreateWithoutClubInput, EventUncheckedCreateWithoutClubInput> | EventCreateWithoutClubInput[] | EventUncheckedCreateWithoutClubInput[]
    connectOrCreate?: EventCreateOrConnectWithoutClubInput | EventCreateOrConnectWithoutClubInput[]
    createMany?: EventCreateManyClubInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type PlayersCreateNestedManyWithoutClubInput = {
    create?: XOR<PlayersCreateWithoutClubInput, PlayersUncheckedCreateWithoutClubInput> | PlayersCreateWithoutClubInput[] | PlayersUncheckedCreateWithoutClubInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutClubInput | PlayersCreateOrConnectWithoutClubInput[]
    createMany?: PlayersCreateManyClubInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type SessionsCreateNestedManyWithoutClubInput = {
    create?: XOR<SessionsCreateWithoutClubInput, SessionsUncheckedCreateWithoutClubInput> | SessionsCreateWithoutClubInput[] | SessionsUncheckedCreateWithoutClubInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutClubInput | SessionsCreateOrConnectWithoutClubInput[]
    createMany?: SessionsCreateManyClubInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type CoachesUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<CoachesCreateWithoutClubInput, CoachesUncheckedCreateWithoutClubInput> | CoachesCreateWithoutClubInput[] | CoachesUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CoachesCreateOrConnectWithoutClubInput | CoachesCreateOrConnectWithoutClubInput[]
    createMany?: CoachesCreateManyClubInputEnvelope
    connect?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
  }

  export type CourtsUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<CourtsCreateWithoutClubInput, CourtsUncheckedCreateWithoutClubInput> | CourtsCreateWithoutClubInput[] | CourtsUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CourtsCreateOrConnectWithoutClubInput | CourtsCreateOrConnectWithoutClubInput[]
    createMany?: CourtsCreateManyClubInputEnvelope
    connect?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<EventCreateWithoutClubInput, EventUncheckedCreateWithoutClubInput> | EventCreateWithoutClubInput[] | EventUncheckedCreateWithoutClubInput[]
    connectOrCreate?: EventCreateOrConnectWithoutClubInput | EventCreateOrConnectWithoutClubInput[]
    createMany?: EventCreateManyClubInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type PlayersUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<PlayersCreateWithoutClubInput, PlayersUncheckedCreateWithoutClubInput> | PlayersCreateWithoutClubInput[] | PlayersUncheckedCreateWithoutClubInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutClubInput | PlayersCreateOrConnectWithoutClubInput[]
    createMany?: PlayersCreateManyClubInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<SessionsCreateWithoutClubInput, SessionsUncheckedCreateWithoutClubInput> | SessionsCreateWithoutClubInput[] | SessionsUncheckedCreateWithoutClubInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutClubInput | SessionsCreateOrConnectWithoutClubInput[]
    createMany?: SessionsCreateManyClubInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CoachesUpdateManyWithoutClubNestedInput = {
    create?: XOR<CoachesCreateWithoutClubInput, CoachesUncheckedCreateWithoutClubInput> | CoachesCreateWithoutClubInput[] | CoachesUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CoachesCreateOrConnectWithoutClubInput | CoachesCreateOrConnectWithoutClubInput[]
    upsert?: CoachesUpsertWithWhereUniqueWithoutClubInput | CoachesUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: CoachesCreateManyClubInputEnvelope
    set?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
    disconnect?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
    delete?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
    connect?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
    update?: CoachesUpdateWithWhereUniqueWithoutClubInput | CoachesUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: CoachesUpdateManyWithWhereWithoutClubInput | CoachesUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: CoachesScalarWhereInput | CoachesScalarWhereInput[]
  }

  export type CourtsUpdateManyWithoutClubNestedInput = {
    create?: XOR<CourtsCreateWithoutClubInput, CourtsUncheckedCreateWithoutClubInput> | CourtsCreateWithoutClubInput[] | CourtsUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CourtsCreateOrConnectWithoutClubInput | CourtsCreateOrConnectWithoutClubInput[]
    upsert?: CourtsUpsertWithWhereUniqueWithoutClubInput | CourtsUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: CourtsCreateManyClubInputEnvelope
    set?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
    disconnect?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
    delete?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
    connect?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
    update?: CourtsUpdateWithWhereUniqueWithoutClubInput | CourtsUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: CourtsUpdateManyWithWhereWithoutClubInput | CourtsUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: CourtsScalarWhereInput | CourtsScalarWhereInput[]
  }

  export type EventUpdateManyWithoutClubNestedInput = {
    create?: XOR<EventCreateWithoutClubInput, EventUncheckedCreateWithoutClubInput> | EventCreateWithoutClubInput[] | EventUncheckedCreateWithoutClubInput[]
    connectOrCreate?: EventCreateOrConnectWithoutClubInput | EventCreateOrConnectWithoutClubInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutClubInput | EventUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: EventCreateManyClubInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutClubInput | EventUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: EventUpdateManyWithWhereWithoutClubInput | EventUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type PlayersUpdateManyWithoutClubNestedInput = {
    create?: XOR<PlayersCreateWithoutClubInput, PlayersUncheckedCreateWithoutClubInput> | PlayersCreateWithoutClubInput[] | PlayersUncheckedCreateWithoutClubInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutClubInput | PlayersCreateOrConnectWithoutClubInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutClubInput | PlayersUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: PlayersCreateManyClubInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutClubInput | PlayersUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutClubInput | PlayersUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type SessionsUpdateManyWithoutClubNestedInput = {
    create?: XOR<SessionsCreateWithoutClubInput, SessionsUncheckedCreateWithoutClubInput> | SessionsCreateWithoutClubInput[] | SessionsUncheckedCreateWithoutClubInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutClubInput | SessionsCreateOrConnectWithoutClubInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutClubInput | SessionsUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: SessionsCreateManyClubInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutClubInput | SessionsUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutClubInput | SessionsUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type CoachesUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<CoachesCreateWithoutClubInput, CoachesUncheckedCreateWithoutClubInput> | CoachesCreateWithoutClubInput[] | CoachesUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CoachesCreateOrConnectWithoutClubInput | CoachesCreateOrConnectWithoutClubInput[]
    upsert?: CoachesUpsertWithWhereUniqueWithoutClubInput | CoachesUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: CoachesCreateManyClubInputEnvelope
    set?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
    disconnect?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
    delete?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
    connect?: CoachesWhereUniqueInput | CoachesWhereUniqueInput[]
    update?: CoachesUpdateWithWhereUniqueWithoutClubInput | CoachesUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: CoachesUpdateManyWithWhereWithoutClubInput | CoachesUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: CoachesScalarWhereInput | CoachesScalarWhereInput[]
  }

  export type CourtsUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<CourtsCreateWithoutClubInput, CourtsUncheckedCreateWithoutClubInput> | CourtsCreateWithoutClubInput[] | CourtsUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CourtsCreateOrConnectWithoutClubInput | CourtsCreateOrConnectWithoutClubInput[]
    upsert?: CourtsUpsertWithWhereUniqueWithoutClubInput | CourtsUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: CourtsCreateManyClubInputEnvelope
    set?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
    disconnect?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
    delete?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
    connect?: CourtsWhereUniqueInput | CourtsWhereUniqueInput[]
    update?: CourtsUpdateWithWhereUniqueWithoutClubInput | CourtsUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: CourtsUpdateManyWithWhereWithoutClubInput | CourtsUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: CourtsScalarWhereInput | CourtsScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<EventCreateWithoutClubInput, EventUncheckedCreateWithoutClubInput> | EventCreateWithoutClubInput[] | EventUncheckedCreateWithoutClubInput[]
    connectOrCreate?: EventCreateOrConnectWithoutClubInput | EventCreateOrConnectWithoutClubInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutClubInput | EventUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: EventCreateManyClubInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutClubInput | EventUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: EventUpdateManyWithWhereWithoutClubInput | EventUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type PlayersUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<PlayersCreateWithoutClubInput, PlayersUncheckedCreateWithoutClubInput> | PlayersCreateWithoutClubInput[] | PlayersUncheckedCreateWithoutClubInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutClubInput | PlayersCreateOrConnectWithoutClubInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutClubInput | PlayersUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: PlayersCreateManyClubInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutClubInput | PlayersUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutClubInput | PlayersUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<SessionsCreateWithoutClubInput, SessionsUncheckedCreateWithoutClubInput> | SessionsCreateWithoutClubInput[] | SessionsUncheckedCreateWithoutClubInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutClubInput | SessionsCreateOrConnectWithoutClubInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutClubInput | SessionsUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: SessionsCreateManyClubInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutClubInput | SessionsUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutClubInput | SessionsUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutCoachesInput = {
    create?: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput>
    connectOrCreate?: ClubCreateOrConnectWithoutCoachesInput
    connect?: ClubWhereUniqueInput
  }

  export type SessionsCreateNestedManyWithoutCoachesInput = {
    create?: XOR<SessionsCreateWithoutCoachesInput, SessionsUncheckedCreateWithoutCoachesInput> | SessionsCreateWithoutCoachesInput[] | SessionsUncheckedCreateWithoutCoachesInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutCoachesInput | SessionsCreateOrConnectWithoutCoachesInput[]
    createMany?: SessionsCreateManyCoachesInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutCoachesInput = {
    create?: XOR<SessionsCreateWithoutCoachesInput, SessionsUncheckedCreateWithoutCoachesInput> | SessionsCreateWithoutCoachesInput[] | SessionsUncheckedCreateWithoutCoachesInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutCoachesInput | SessionsCreateOrConnectWithoutCoachesInput[]
    createMany?: SessionsCreateManyCoachesInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ClubUpdateOneWithoutCoachesNestedInput = {
    create?: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput>
    connectOrCreate?: ClubCreateOrConnectWithoutCoachesInput
    upsert?: ClubUpsertWithoutCoachesInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutCoachesInput, ClubUpdateWithoutCoachesInput>, ClubUncheckedUpdateWithoutCoachesInput>
  }

  export type SessionsUpdateManyWithoutCoachesNestedInput = {
    create?: XOR<SessionsCreateWithoutCoachesInput, SessionsUncheckedCreateWithoutCoachesInput> | SessionsCreateWithoutCoachesInput[] | SessionsUncheckedCreateWithoutCoachesInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutCoachesInput | SessionsCreateOrConnectWithoutCoachesInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutCoachesInput | SessionsUpsertWithWhereUniqueWithoutCoachesInput[]
    createMany?: SessionsCreateManyCoachesInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutCoachesInput | SessionsUpdateWithWhereUniqueWithoutCoachesInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutCoachesInput | SessionsUpdateManyWithWhereWithoutCoachesInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutCoachesNestedInput = {
    create?: XOR<SessionsCreateWithoutCoachesInput, SessionsUncheckedCreateWithoutCoachesInput> | SessionsCreateWithoutCoachesInput[] | SessionsUncheckedCreateWithoutCoachesInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutCoachesInput | SessionsCreateOrConnectWithoutCoachesInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutCoachesInput | SessionsUpsertWithWhereUniqueWithoutCoachesInput[]
    createMany?: SessionsCreateManyCoachesInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutCoachesInput | SessionsUpdateWithWhereUniqueWithoutCoachesInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutCoachesInput | SessionsUpdateManyWithWhereWithoutCoachesInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutCourtsInput = {
    create?: XOR<ClubCreateWithoutCourtsInput, ClubUncheckedCreateWithoutCourtsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutCourtsInput
    connect?: ClubWhereUniqueInput
  }

  export type SessionsCreateNestedManyWithoutCourtsInput = {
    create?: XOR<SessionsCreateWithoutCourtsInput, SessionsUncheckedCreateWithoutCourtsInput> | SessionsCreateWithoutCourtsInput[] | SessionsUncheckedCreateWithoutCourtsInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutCourtsInput | SessionsCreateOrConnectWithoutCourtsInput[]
    createMany?: SessionsCreateManyCourtsInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutCourtsInput = {
    create?: XOR<SessionsCreateWithoutCourtsInput, SessionsUncheckedCreateWithoutCourtsInput> | SessionsCreateWithoutCourtsInput[] | SessionsUncheckedCreateWithoutCourtsInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutCourtsInput | SessionsCreateOrConnectWithoutCourtsInput[]
    createMany?: SessionsCreateManyCourtsInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type ClubUpdateOneWithoutCourtsNestedInput = {
    create?: XOR<ClubCreateWithoutCourtsInput, ClubUncheckedCreateWithoutCourtsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutCourtsInput
    upsert?: ClubUpsertWithoutCourtsInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutCourtsInput, ClubUpdateWithoutCourtsInput>, ClubUncheckedUpdateWithoutCourtsInput>
  }

  export type SessionsUpdateManyWithoutCourtsNestedInput = {
    create?: XOR<SessionsCreateWithoutCourtsInput, SessionsUncheckedCreateWithoutCourtsInput> | SessionsCreateWithoutCourtsInput[] | SessionsUncheckedCreateWithoutCourtsInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutCourtsInput | SessionsCreateOrConnectWithoutCourtsInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutCourtsInput | SessionsUpsertWithWhereUniqueWithoutCourtsInput[]
    createMany?: SessionsCreateManyCourtsInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutCourtsInput | SessionsUpdateWithWhereUniqueWithoutCourtsInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutCourtsInput | SessionsUpdateManyWithWhereWithoutCourtsInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutCourtsNestedInput = {
    create?: XOR<SessionsCreateWithoutCourtsInput, SessionsUncheckedCreateWithoutCourtsInput> | SessionsCreateWithoutCourtsInput[] | SessionsUncheckedCreateWithoutCourtsInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutCourtsInput | SessionsCreateOrConnectWithoutCourtsInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutCourtsInput | SessionsUpsertWithWhereUniqueWithoutCourtsInput[]
    createMany?: SessionsCreateManyCourtsInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutCourtsInput | SessionsUpdateWithWhereUniqueWithoutCourtsInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutCourtsInput | SessionsUpdateManyWithWhereWithoutCourtsInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutEventInput = {
    create?: XOR<ClubCreateWithoutEventInput, ClubUncheckedCreateWithoutEventInput>
    connectOrCreate?: ClubCreateOrConnectWithoutEventInput
    connect?: ClubWhereUniqueInput
  }

  export type ClubUpdateOneWithoutEventNestedInput = {
    create?: XOR<ClubCreateWithoutEventInput, ClubUncheckedCreateWithoutEventInput>
    connectOrCreate?: ClubCreateOrConnectWithoutEventInput
    upsert?: ClubUpsertWithoutEventInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutEventInput, ClubUpdateWithoutEventInput>, ClubUncheckedUpdateWithoutEventInput>
  }

  export type ClubCreateNestedOneWithoutPlayersInput = {
    create?: XOR<ClubCreateWithoutPlayersInput, ClubUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: ClubCreateOrConnectWithoutPlayersInput
    connect?: ClubWhereUniqueInput
  }

  export type SessionsCreateNestedManyWithoutPlayersInput = {
    create?: XOR<SessionsCreateWithoutPlayersInput, SessionsUncheckedCreateWithoutPlayersInput> | SessionsCreateWithoutPlayersInput[] | SessionsUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutPlayersInput | SessionsCreateOrConnectWithoutPlayersInput[]
    createMany?: SessionsCreateManyPlayersInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<SessionsCreateWithoutPlayersInput, SessionsUncheckedCreateWithoutPlayersInput> | SessionsCreateWithoutPlayersInput[] | SessionsUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutPlayersInput | SessionsCreateOrConnectWithoutPlayersInput[]
    createMany?: SessionsCreateManyPlayersInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type ClubUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<ClubCreateWithoutPlayersInput, ClubUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: ClubCreateOrConnectWithoutPlayersInput
    upsert?: ClubUpsertWithoutPlayersInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutPlayersInput, ClubUpdateWithoutPlayersInput>, ClubUncheckedUpdateWithoutPlayersInput>
  }

  export type SessionsUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<SessionsCreateWithoutPlayersInput, SessionsUncheckedCreateWithoutPlayersInput> | SessionsCreateWithoutPlayersInput[] | SessionsUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutPlayersInput | SessionsCreateOrConnectWithoutPlayersInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutPlayersInput | SessionsUpsertWithWhereUniqueWithoutPlayersInput[]
    createMany?: SessionsCreateManyPlayersInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutPlayersInput | SessionsUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutPlayersInput | SessionsUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<SessionsCreateWithoutPlayersInput, SessionsUncheckedCreateWithoutPlayersInput> | SessionsCreateWithoutPlayersInput[] | SessionsUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutPlayersInput | SessionsCreateOrConnectWithoutPlayersInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutPlayersInput | SessionsUpsertWithWhereUniqueWithoutPlayersInput[]
    createMany?: SessionsCreateManyPlayersInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutPlayersInput | SessionsUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutPlayersInput | SessionsUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutSessionsInput = {
    create?: XOR<ClubCreateWithoutSessionsInput, ClubUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutSessionsInput
    connect?: ClubWhereUniqueInput
  }

  export type CoachesCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CoachesCreateWithoutSessionsInput, CoachesUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CoachesCreateOrConnectWithoutSessionsInput
    connect?: CoachesWhereUniqueInput
  }

  export type CourtsCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CourtsCreateWithoutSessionsInput, CourtsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CourtsCreateOrConnectWithoutSessionsInput
    connect?: CourtsWhereUniqueInput
  }

  export type PlayersCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PlayersCreateWithoutSessionsInput, PlayersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutSessionsInput
    connect?: PlayersWhereUniqueInput
  }

  export type ClubUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<ClubCreateWithoutSessionsInput, ClubUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutSessionsInput
    upsert?: ClubUpsertWithoutSessionsInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutSessionsInput, ClubUpdateWithoutSessionsInput>, ClubUncheckedUpdateWithoutSessionsInput>
  }

  export type CoachesUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<CoachesCreateWithoutSessionsInput, CoachesUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CoachesCreateOrConnectWithoutSessionsInput
    upsert?: CoachesUpsertWithoutSessionsInput
    disconnect?: CoachesWhereInput | boolean
    delete?: CoachesWhereInput | boolean
    connect?: CoachesWhereUniqueInput
    update?: XOR<XOR<CoachesUpdateToOneWithWhereWithoutSessionsInput, CoachesUpdateWithoutSessionsInput>, CoachesUncheckedUpdateWithoutSessionsInput>
  }

  export type CourtsUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<CourtsCreateWithoutSessionsInput, CourtsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CourtsCreateOrConnectWithoutSessionsInput
    upsert?: CourtsUpsertWithoutSessionsInput
    disconnect?: CourtsWhereInput | boolean
    delete?: CourtsWhereInput | boolean
    connect?: CourtsWhereUniqueInput
    update?: XOR<XOR<CourtsUpdateToOneWithWhereWithoutSessionsInput, CourtsUpdateWithoutSessionsInput>, CourtsUncheckedUpdateWithoutSessionsInput>
  }

  export type PlayersUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<PlayersCreateWithoutSessionsInput, PlayersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutSessionsInput
    upsert?: PlayersUpsertWithoutSessionsInput
    disconnect?: PlayersWhereInput | boolean
    delete?: PlayersWhereInput | boolean
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutSessionsInput, PlayersUpdateWithoutSessionsInput>, PlayersUncheckedUpdateWithoutSessionsInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CoachesCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Sessions?: SessionsCreateNestedManyWithoutCoachesInput
  }

  export type CoachesUncheckedCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Sessions?: SessionsUncheckedCreateNestedManyWithoutCoachesInput
  }

  export type CoachesCreateOrConnectWithoutClubInput = {
    where: CoachesWhereUniqueInput
    create: XOR<CoachesCreateWithoutClubInput, CoachesUncheckedCreateWithoutClubInput>
  }

  export type CoachesCreateManyClubInputEnvelope = {
    data: CoachesCreateManyClubInput | CoachesCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type CourtsCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    Sessions?: SessionsCreateNestedManyWithoutCourtsInput
  }

  export type CourtsUncheckedCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    Sessions?: SessionsUncheckedCreateNestedManyWithoutCourtsInput
  }

  export type CourtsCreateOrConnectWithoutClubInput = {
    where: CourtsWhereUniqueInput
    create: XOR<CourtsCreateWithoutClubInput, CourtsUncheckedCreateWithoutClubInput>
  }

  export type CourtsCreateManyClubInputEnvelope = {
    data: CourtsCreateManyClubInput | CourtsCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    description?: string | null
    picture?: string | null
  }

  export type EventUncheckedCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    description?: string | null
    picture?: string | null
  }

  export type EventCreateOrConnectWithoutClubInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutClubInput, EventUncheckedCreateWithoutClubInput>
  }

  export type EventCreateManyClubInputEnvelope = {
    data: EventCreateManyClubInput | EventCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type PlayersCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Sessions?: SessionsCreateNestedManyWithoutPlayersInput
  }

  export type PlayersUncheckedCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Sessions?: SessionsUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayersCreateOrConnectWithoutClubInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutClubInput, PlayersUncheckedCreateWithoutClubInput>
  }

  export type PlayersCreateManyClubInputEnvelope = {
    data: PlayersCreateManyClubInput | PlayersCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type SessionsCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    charges?: bigint | number | null
    Coaches?: CoachesCreateNestedOneWithoutSessionsInput
    Courts?: CourtsCreateNestedOneWithoutSessionsInput
    Players?: PlayersCreateNestedOneWithoutSessionsInput
  }

  export type SessionsUncheckedCreateWithoutClubInput = {
    id?: bigint | number
    created_at?: Date | string
    player_id?: bigint | number | null
    charges?: bigint | number | null
    coach_id?: bigint | number | null
    court_id?: bigint | number | null
  }

  export type SessionsCreateOrConnectWithoutClubInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutClubInput, SessionsUncheckedCreateWithoutClubInput>
  }

  export type SessionsCreateManyClubInputEnvelope = {
    data: SessionsCreateManyClubInput | SessionsCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type CoachesUpsertWithWhereUniqueWithoutClubInput = {
    where: CoachesWhereUniqueInput
    update: XOR<CoachesUpdateWithoutClubInput, CoachesUncheckedUpdateWithoutClubInput>
    create: XOR<CoachesCreateWithoutClubInput, CoachesUncheckedCreateWithoutClubInput>
  }

  export type CoachesUpdateWithWhereUniqueWithoutClubInput = {
    where: CoachesWhereUniqueInput
    data: XOR<CoachesUpdateWithoutClubInput, CoachesUncheckedUpdateWithoutClubInput>
  }

  export type CoachesUpdateManyWithWhereWithoutClubInput = {
    where: CoachesScalarWhereInput
    data: XOR<CoachesUpdateManyMutationInput, CoachesUncheckedUpdateManyWithoutClubInput>
  }

  export type CoachesScalarWhereInput = {
    AND?: CoachesScalarWhereInput | CoachesScalarWhereInput[]
    OR?: CoachesScalarWhereInput[]
    NOT?: CoachesScalarWhereInput | CoachesScalarWhereInput[]
    id?: BigIntFilter<"Coaches"> | bigint | number
    created_at?: DateTimeFilter<"Coaches"> | Date | string
    name?: StringNullableFilter<"Coaches"> | string | null
    charges?: BigIntNullableFilter<"Coaches"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Coaches"> | bigint | number | null
    picture?: StringNullableFilter<"Coaches"> | string | null
    email?: StringNullableFilter<"Coaches"> | string | null
    password?: StringNullableFilter<"Coaches"> | string | null
  }

  export type CourtsUpsertWithWhereUniqueWithoutClubInput = {
    where: CourtsWhereUniqueInput
    update: XOR<CourtsUpdateWithoutClubInput, CourtsUncheckedUpdateWithoutClubInput>
    create: XOR<CourtsCreateWithoutClubInput, CourtsUncheckedCreateWithoutClubInput>
  }

  export type CourtsUpdateWithWhereUniqueWithoutClubInput = {
    where: CourtsWhereUniqueInput
    data: XOR<CourtsUpdateWithoutClubInput, CourtsUncheckedUpdateWithoutClubInput>
  }

  export type CourtsUpdateManyWithWhereWithoutClubInput = {
    where: CourtsScalarWhereInput
    data: XOR<CourtsUpdateManyMutationInput, CourtsUncheckedUpdateManyWithoutClubInput>
  }

  export type CourtsScalarWhereInput = {
    AND?: CourtsScalarWhereInput | CourtsScalarWhereInput[]
    OR?: CourtsScalarWhereInput[]
    NOT?: CourtsScalarWhereInput | CourtsScalarWhereInput[]
    id?: BigIntFilter<"Courts"> | bigint | number
    created_at?: DateTimeFilter<"Courts"> | Date | string
    name?: StringNullableFilter<"Courts"> | string | null
    charges?: BigIntNullableFilter<"Courts"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Courts"> | bigint | number | null
  }

  export type EventUpsertWithWhereUniqueWithoutClubInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutClubInput, EventUncheckedUpdateWithoutClubInput>
    create: XOR<EventCreateWithoutClubInput, EventUncheckedCreateWithoutClubInput>
  }

  export type EventUpdateWithWhereUniqueWithoutClubInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutClubInput, EventUncheckedUpdateWithoutClubInput>
  }

  export type EventUpdateManyWithWhereWithoutClubInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutClubInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: BigIntFilter<"Event"> | bigint | number
    created_at?: DateTimeFilter<"Event"> | Date | string
    name?: StringNullableFilter<"Event"> | string | null
    charges?: BigIntNullableFilter<"Event"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Event"> | bigint | number | null
    description?: StringNullableFilter<"Event"> | string | null
    picture?: StringNullableFilter<"Event"> | string | null
  }

  export type PlayersUpsertWithWhereUniqueWithoutClubInput = {
    where: PlayersWhereUniqueInput
    update: XOR<PlayersUpdateWithoutClubInput, PlayersUncheckedUpdateWithoutClubInput>
    create: XOR<PlayersCreateWithoutClubInput, PlayersUncheckedCreateWithoutClubInput>
  }

  export type PlayersUpdateWithWhereUniqueWithoutClubInput = {
    where: PlayersWhereUniqueInput
    data: XOR<PlayersUpdateWithoutClubInput, PlayersUncheckedUpdateWithoutClubInput>
  }

  export type PlayersUpdateManyWithWhereWithoutClubInput = {
    where: PlayersScalarWhereInput
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyWithoutClubInput>
  }

  export type PlayersScalarWhereInput = {
    AND?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    OR?: PlayersScalarWhereInput[]
    NOT?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    id?: BigIntFilter<"Players"> | bigint | number
    created_at?: DateTimeFilter<"Players"> | Date | string
    name?: StringNullableFilter<"Players"> | string | null
    club_id?: BigIntNullableFilter<"Players"> | bigint | number | null
    picture?: StringNullableFilter<"Players"> | string | null
    email?: StringNullableFilter<"Players"> | string | null
    password?: StringNullableFilter<"Players"> | string | null
  }

  export type SessionsUpsertWithWhereUniqueWithoutClubInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutClubInput, SessionsUncheckedUpdateWithoutClubInput>
    create: XOR<SessionsCreateWithoutClubInput, SessionsUncheckedCreateWithoutClubInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutClubInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutClubInput, SessionsUncheckedUpdateWithoutClubInput>
  }

  export type SessionsUpdateManyWithWhereWithoutClubInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutClubInput>
  }

  export type SessionsScalarWhereInput = {
    AND?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    OR?: SessionsScalarWhereInput[]
    NOT?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    id?: BigIntFilter<"Sessions"> | bigint | number
    created_at?: DateTimeFilter<"Sessions"> | Date | string
    player_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    charges?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    coach_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    court_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
    club_id?: BigIntNullableFilter<"Sessions"> | bigint | number | null
  }

  export type ClubCreateWithoutCoachesInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Courts?: CourtsCreateNestedManyWithoutClubInput
    Event?: EventCreateNestedManyWithoutClubInput
    Players?: PlayersCreateNestedManyWithoutClubInput
    Sessions?: SessionsCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutCoachesInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Courts?: CourtsUncheckedCreateNestedManyWithoutClubInput
    Event?: EventUncheckedCreateNestedManyWithoutClubInput
    Players?: PlayersUncheckedCreateNestedManyWithoutClubInput
    Sessions?: SessionsUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutCoachesInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput>
  }

  export type SessionsCreateWithoutCoachesInput = {
    id?: bigint | number
    created_at?: Date | string
    charges?: bigint | number | null
    Club?: ClubCreateNestedOneWithoutSessionsInput
    Courts?: CourtsCreateNestedOneWithoutSessionsInput
    Players?: PlayersCreateNestedOneWithoutSessionsInput
  }

  export type SessionsUncheckedCreateWithoutCoachesInput = {
    id?: bigint | number
    created_at?: Date | string
    player_id?: bigint | number | null
    charges?: bigint | number | null
    court_id?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type SessionsCreateOrConnectWithoutCoachesInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutCoachesInput, SessionsUncheckedCreateWithoutCoachesInput>
  }

  export type SessionsCreateManyCoachesInputEnvelope = {
    data: SessionsCreateManyCoachesInput | SessionsCreateManyCoachesInput[]
    skipDuplicates?: boolean
  }

  export type ClubUpsertWithoutCoachesInput = {
    update: XOR<ClubUpdateWithoutCoachesInput, ClubUncheckedUpdateWithoutCoachesInput>
    create: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutCoachesInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutCoachesInput, ClubUncheckedUpdateWithoutCoachesInput>
  }

  export type ClubUpdateWithoutCoachesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Courts?: CourtsUpdateManyWithoutClubNestedInput
    Event?: EventUpdateManyWithoutClubNestedInput
    Players?: PlayersUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutCoachesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Courts?: CourtsUncheckedUpdateManyWithoutClubNestedInput
    Event?: EventUncheckedUpdateManyWithoutClubNestedInput
    Players?: PlayersUncheckedUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUncheckedUpdateManyWithoutClubNestedInput
  }

  export type SessionsUpsertWithWhereUniqueWithoutCoachesInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutCoachesInput, SessionsUncheckedUpdateWithoutCoachesInput>
    create: XOR<SessionsCreateWithoutCoachesInput, SessionsUncheckedCreateWithoutCoachesInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutCoachesInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutCoachesInput, SessionsUncheckedUpdateWithoutCoachesInput>
  }

  export type SessionsUpdateManyWithWhereWithoutCoachesInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutCoachesInput>
  }

  export type ClubCreateWithoutCourtsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesCreateNestedManyWithoutClubInput
    Event?: EventCreateNestedManyWithoutClubInput
    Players?: PlayersCreateNestedManyWithoutClubInput
    Sessions?: SessionsCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutCourtsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesUncheckedCreateNestedManyWithoutClubInput
    Event?: EventUncheckedCreateNestedManyWithoutClubInput
    Players?: PlayersUncheckedCreateNestedManyWithoutClubInput
    Sessions?: SessionsUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutCourtsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutCourtsInput, ClubUncheckedCreateWithoutCourtsInput>
  }

  export type SessionsCreateWithoutCourtsInput = {
    id?: bigint | number
    created_at?: Date | string
    charges?: bigint | number | null
    Club?: ClubCreateNestedOneWithoutSessionsInput
    Coaches?: CoachesCreateNestedOneWithoutSessionsInput
    Players?: PlayersCreateNestedOneWithoutSessionsInput
  }

  export type SessionsUncheckedCreateWithoutCourtsInput = {
    id?: bigint | number
    created_at?: Date | string
    player_id?: bigint | number | null
    charges?: bigint | number | null
    coach_id?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type SessionsCreateOrConnectWithoutCourtsInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutCourtsInput, SessionsUncheckedCreateWithoutCourtsInput>
  }

  export type SessionsCreateManyCourtsInputEnvelope = {
    data: SessionsCreateManyCourtsInput | SessionsCreateManyCourtsInput[]
    skipDuplicates?: boolean
  }

  export type ClubUpsertWithoutCourtsInput = {
    update: XOR<ClubUpdateWithoutCourtsInput, ClubUncheckedUpdateWithoutCourtsInput>
    create: XOR<ClubCreateWithoutCourtsInput, ClubUncheckedCreateWithoutCourtsInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutCourtsInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutCourtsInput, ClubUncheckedUpdateWithoutCourtsInput>
  }

  export type ClubUpdateWithoutCourtsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUpdateManyWithoutClubNestedInput
    Event?: EventUpdateManyWithoutClubNestedInput
    Players?: PlayersUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutCourtsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUncheckedUpdateManyWithoutClubNestedInput
    Event?: EventUncheckedUpdateManyWithoutClubNestedInput
    Players?: PlayersUncheckedUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUncheckedUpdateManyWithoutClubNestedInput
  }

  export type SessionsUpsertWithWhereUniqueWithoutCourtsInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutCourtsInput, SessionsUncheckedUpdateWithoutCourtsInput>
    create: XOR<SessionsCreateWithoutCourtsInput, SessionsUncheckedCreateWithoutCourtsInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutCourtsInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutCourtsInput, SessionsUncheckedUpdateWithoutCourtsInput>
  }

  export type SessionsUpdateManyWithWhereWithoutCourtsInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutCourtsInput>
  }

  export type ClubCreateWithoutEventInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesCreateNestedManyWithoutClubInput
    Courts?: CourtsCreateNestedManyWithoutClubInput
    Players?: PlayersCreateNestedManyWithoutClubInput
    Sessions?: SessionsCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutEventInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesUncheckedCreateNestedManyWithoutClubInput
    Courts?: CourtsUncheckedCreateNestedManyWithoutClubInput
    Players?: PlayersUncheckedCreateNestedManyWithoutClubInput
    Sessions?: SessionsUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutEventInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutEventInput, ClubUncheckedCreateWithoutEventInput>
  }

  export type ClubUpsertWithoutEventInput = {
    update: XOR<ClubUpdateWithoutEventInput, ClubUncheckedUpdateWithoutEventInput>
    create: XOR<ClubCreateWithoutEventInput, ClubUncheckedCreateWithoutEventInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutEventInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutEventInput, ClubUncheckedUpdateWithoutEventInput>
  }

  export type ClubUpdateWithoutEventInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUpdateManyWithoutClubNestedInput
    Courts?: CourtsUpdateManyWithoutClubNestedInput
    Players?: PlayersUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutEventInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUncheckedUpdateManyWithoutClubNestedInput
    Courts?: CourtsUncheckedUpdateManyWithoutClubNestedInput
    Players?: PlayersUncheckedUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateWithoutPlayersInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesCreateNestedManyWithoutClubInput
    Courts?: CourtsCreateNestedManyWithoutClubInput
    Event?: EventCreateNestedManyWithoutClubInput
    Sessions?: SessionsCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutPlayersInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesUncheckedCreateNestedManyWithoutClubInput
    Courts?: CourtsUncheckedCreateNestedManyWithoutClubInput
    Event?: EventUncheckedCreateNestedManyWithoutClubInput
    Sessions?: SessionsUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutPlayersInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutPlayersInput, ClubUncheckedCreateWithoutPlayersInput>
  }

  export type SessionsCreateWithoutPlayersInput = {
    id?: bigint | number
    created_at?: Date | string
    charges?: bigint | number | null
    Club?: ClubCreateNestedOneWithoutSessionsInput
    Coaches?: CoachesCreateNestedOneWithoutSessionsInput
    Courts?: CourtsCreateNestedOneWithoutSessionsInput
  }

  export type SessionsUncheckedCreateWithoutPlayersInput = {
    id?: bigint | number
    created_at?: Date | string
    charges?: bigint | number | null
    coach_id?: bigint | number | null
    court_id?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type SessionsCreateOrConnectWithoutPlayersInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutPlayersInput, SessionsUncheckedCreateWithoutPlayersInput>
  }

  export type SessionsCreateManyPlayersInputEnvelope = {
    data: SessionsCreateManyPlayersInput | SessionsCreateManyPlayersInput[]
    skipDuplicates?: boolean
  }

  export type ClubUpsertWithoutPlayersInput = {
    update: XOR<ClubUpdateWithoutPlayersInput, ClubUncheckedUpdateWithoutPlayersInput>
    create: XOR<ClubCreateWithoutPlayersInput, ClubUncheckedCreateWithoutPlayersInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutPlayersInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutPlayersInput, ClubUncheckedUpdateWithoutPlayersInput>
  }

  export type ClubUpdateWithoutPlayersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUpdateManyWithoutClubNestedInput
    Courts?: CourtsUpdateManyWithoutClubNestedInput
    Event?: EventUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutPlayersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUncheckedUpdateManyWithoutClubNestedInput
    Courts?: CourtsUncheckedUpdateManyWithoutClubNestedInput
    Event?: EventUncheckedUpdateManyWithoutClubNestedInput
    Sessions?: SessionsUncheckedUpdateManyWithoutClubNestedInput
  }

  export type SessionsUpsertWithWhereUniqueWithoutPlayersInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutPlayersInput, SessionsUncheckedUpdateWithoutPlayersInput>
    create: XOR<SessionsCreateWithoutPlayersInput, SessionsUncheckedCreateWithoutPlayersInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutPlayersInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutPlayersInput, SessionsUncheckedUpdateWithoutPlayersInput>
  }

  export type SessionsUpdateManyWithWhereWithoutPlayersInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutPlayersInput>
  }

  export type ClubCreateWithoutSessionsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesCreateNestedManyWithoutClubInput
    Courts?: CourtsCreateNestedManyWithoutClubInput
    Event?: EventCreateNestedManyWithoutClubInput
    Players?: PlayersCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutSessionsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_manager?: string | null
    email?: string | null
    password?: string | null
    Coaches?: CoachesUncheckedCreateNestedManyWithoutClubInput
    Courts?: CourtsUncheckedCreateNestedManyWithoutClubInput
    Event?: EventUncheckedCreateNestedManyWithoutClubInput
    Players?: PlayersUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutSessionsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutSessionsInput, ClubUncheckedCreateWithoutSessionsInput>
  }

  export type CoachesCreateWithoutSessionsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Club?: ClubCreateNestedOneWithoutCoachesInput
  }

  export type CoachesUncheckedCreateWithoutSessionsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    club_id?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
  }

  export type CoachesCreateOrConnectWithoutSessionsInput = {
    where: CoachesWhereUniqueInput
    create: XOR<CoachesCreateWithoutSessionsInput, CoachesUncheckedCreateWithoutSessionsInput>
  }

  export type CourtsCreateWithoutSessionsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    Club?: ClubCreateNestedOneWithoutCourtsInput
  }

  export type CourtsUncheckedCreateWithoutSessionsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type CourtsCreateOrConnectWithoutSessionsInput = {
    where: CourtsWhereUniqueInput
    create: XOR<CourtsCreateWithoutSessionsInput, CourtsUncheckedCreateWithoutSessionsInput>
  }

  export type PlayersCreateWithoutSessionsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    picture?: string | null
    email?: string | null
    password?: string | null
    Club?: ClubCreateNestedOneWithoutPlayersInput
  }

  export type PlayersUncheckedCreateWithoutSessionsInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    club_id?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
  }

  export type PlayersCreateOrConnectWithoutSessionsInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutSessionsInput, PlayersUncheckedCreateWithoutSessionsInput>
  }

  export type ClubUpsertWithoutSessionsInput = {
    update: XOR<ClubUpdateWithoutSessionsInput, ClubUncheckedUpdateWithoutSessionsInput>
    create: XOR<ClubCreateWithoutSessionsInput, ClubUncheckedCreateWithoutSessionsInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutSessionsInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutSessionsInput, ClubUncheckedUpdateWithoutSessionsInput>
  }

  export type ClubUpdateWithoutSessionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUpdateManyWithoutClubNestedInput
    Courts?: CourtsUpdateManyWithoutClubNestedInput
    Event?: EventUpdateManyWithoutClubNestedInput
    Players?: PlayersUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutSessionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_manager?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Coaches?: CoachesUncheckedUpdateManyWithoutClubNestedInput
    Courts?: CourtsUncheckedUpdateManyWithoutClubNestedInput
    Event?: EventUncheckedUpdateManyWithoutClubNestedInput
    Players?: PlayersUncheckedUpdateManyWithoutClubNestedInput
  }

  export type CoachesUpsertWithoutSessionsInput = {
    update: XOR<CoachesUpdateWithoutSessionsInput, CoachesUncheckedUpdateWithoutSessionsInput>
    create: XOR<CoachesCreateWithoutSessionsInput, CoachesUncheckedCreateWithoutSessionsInput>
    where?: CoachesWhereInput
  }

  export type CoachesUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CoachesWhereInput
    data: XOR<CoachesUpdateWithoutSessionsInput, CoachesUncheckedUpdateWithoutSessionsInput>
  }

  export type CoachesUpdateWithoutSessionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Club?: ClubUpdateOneWithoutCoachesNestedInput
  }

  export type CoachesUncheckedUpdateWithoutSessionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourtsUpsertWithoutSessionsInput = {
    update: XOR<CourtsUpdateWithoutSessionsInput, CourtsUncheckedUpdateWithoutSessionsInput>
    create: XOR<CourtsCreateWithoutSessionsInput, CourtsUncheckedCreateWithoutSessionsInput>
    where?: CourtsWhereInput
  }

  export type CourtsUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CourtsWhereInput
    data: XOR<CourtsUpdateWithoutSessionsInput, CourtsUncheckedUpdateWithoutSessionsInput>
  }

  export type CourtsUpdateWithoutSessionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Club?: ClubUpdateOneWithoutCourtsNestedInput
  }

  export type CourtsUncheckedUpdateWithoutSessionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type PlayersUpsertWithoutSessionsInput = {
    update: XOR<PlayersUpdateWithoutSessionsInput, PlayersUncheckedUpdateWithoutSessionsInput>
    create: XOR<PlayersCreateWithoutSessionsInput, PlayersUncheckedCreateWithoutSessionsInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutSessionsInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutSessionsInput, PlayersUncheckedUpdateWithoutSessionsInput>
  }

  export type PlayersUpdateWithoutSessionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Club?: ClubUpdateOneWithoutPlayersNestedInput
  }

  export type PlayersUncheckedUpdateWithoutSessionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoachesCreateManyClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    picture?: string | null
    email?: string | null
    password?: string | null
  }

  export type CourtsCreateManyClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
  }

  export type EventCreateManyClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    charges?: bigint | number | null
    description?: string | null
    picture?: string | null
  }

  export type PlayersCreateManyClubInput = {
    id?: bigint | number
    created_at?: Date | string
    name?: string | null
    picture?: string | null
    email?: string | null
    password?: string | null
  }

  export type SessionsCreateManyClubInput = {
    id?: bigint | number
    created_at?: Date | string
    player_id?: bigint | number | null
    charges?: bigint | number | null
    coach_id?: bigint | number | null
    court_id?: bigint | number | null
  }

  export type CoachesUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Sessions?: SessionsUpdateManyWithoutCoachesNestedInput
  }

  export type CoachesUncheckedUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Sessions?: SessionsUncheckedUpdateManyWithoutCoachesNestedInput
  }

  export type CoachesUncheckedUpdateManyWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourtsUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Sessions?: SessionsUpdateManyWithoutCourtsNestedInput
  }

  export type CourtsUncheckedUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Sessions?: SessionsUncheckedUpdateManyWithoutCourtsNestedInput
  }

  export type CourtsUncheckedUpdateManyWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EventUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayersUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Sessions?: SessionsUpdateManyWithoutPlayersNestedInput
  }

  export type PlayersUncheckedUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Sessions?: SessionsUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type PlayersUncheckedUpdateManyWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionsUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Coaches?: CoachesUpdateOneWithoutSessionsNestedInput
    Courts?: CourtsUpdateOneWithoutSessionsNestedInput
    Players?: PlayersUpdateOneWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coach_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    court_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsUncheckedUpdateManyWithoutClubInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coach_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    court_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsCreateManyCoachesInput = {
    id?: bigint | number
    created_at?: Date | string
    player_id?: bigint | number | null
    charges?: bigint | number | null
    court_id?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type SessionsUpdateWithoutCoachesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Club?: ClubUpdateOneWithoutSessionsNestedInput
    Courts?: CourtsUpdateOneWithoutSessionsNestedInput
    Players?: PlayersUpdateOneWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateWithoutCoachesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    court_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsUncheckedUpdateManyWithoutCoachesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    court_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsCreateManyCourtsInput = {
    id?: bigint | number
    created_at?: Date | string
    player_id?: bigint | number | null
    charges?: bigint | number | null
    coach_id?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type SessionsUpdateWithoutCourtsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Club?: ClubUpdateOneWithoutSessionsNestedInput
    Coaches?: CoachesUpdateOneWithoutSessionsNestedInput
    Players?: PlayersUpdateOneWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateWithoutCourtsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coach_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsUncheckedUpdateManyWithoutCourtsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    player_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coach_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsCreateManyPlayersInput = {
    id?: bigint | number
    created_at?: Date | string
    charges?: bigint | number | null
    coach_id?: bigint | number | null
    court_id?: bigint | number | null
    club_id?: bigint | number | null
  }

  export type SessionsUpdateWithoutPlayersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Club?: ClubUpdateOneWithoutSessionsNestedInput
    Coaches?: CoachesUpdateOneWithoutSessionsNestedInput
    Courts?: CourtsUpdateOneWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateWithoutPlayersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coach_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    court_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SessionsUncheckedUpdateManyWithoutPlayersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coach_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    court_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    club_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}