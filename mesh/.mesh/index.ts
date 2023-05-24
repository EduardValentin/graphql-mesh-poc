// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { SamuraiApiTypes } from './sources/samurai-api/types';
import type { SwordApiTypes } from './sources/sword-api/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  googleProtobufEmptyInput: any;
  ObjMap: any;
};

export type Query = {
  comSamuraiV1SamuraiServiceGetById?: Maybe<V1Samurai>;
  comSamuraiV1SamuraiServiceListAllSamurai?: Maybe<Array<Maybe<V1Samurai>>>;
  comSamuraiV1SamuraiServiceListById?: Maybe<Array<Maybe<V1Samurai>>>;
  comSamuraiV1SamuraiServiceConnectivityState?: Maybe<connectivityState>;
  apiV1SwordServiceListSwords?: Maybe<Array<Maybe<V1Sword>>>;
  apiV1SwordServiceListBySamuraiId?: Maybe<Array<Maybe<V1Sword>>>;
  apiV1SwordServiceGetById?: Maybe<V1Sword>;
  apiV1SwordServiceListById?: Maybe<Array<Maybe<V1Sword>>>;
  apiV1SwordServiceGetSamuraiWithSwords?: Maybe<V1SamuraiWithSwordsResponse>;
  apiV1SwordServiceListSamuraiWithSwords?: Maybe<Array<Maybe<V1SamuraiWithSwordsResponse>>>;
  apiV1SwordServiceConnectivityState?: Maybe<connectivityState>;
};


export type QuerycomSamuraiV1SamuraiServiceGetByIdArgs = {
  input?: InputMaybe<comSamuraiV1GetByIdRequestInput>;
};


export type QuerycomSamuraiV1SamuraiServiceListAllSamuraiArgs = {
  input?: InputMaybe<Scalars['googleProtobufEmptyInput']>;
};


export type QuerycomSamuraiV1SamuraiServiceListByIdArgs = {
  input?: InputMaybe<V1ListSamuraiByIdInput>;
};


export type QuerycomSamuraiV1SamuraiServiceConnectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};


export type QueryapiV1SwordServiceListSwordsArgs = {
  input?: InputMaybe<Scalars['googleProtobufEmptyInput']>;
};


export type QueryapiV1SwordServiceListBySamuraiIdArgs = {
  input?: InputMaybe<V1ListBySamuraiIdRequestInput>;
};


export type QueryapiV1SwordServiceGetByIdArgs = {
  input?: InputMaybe<V1GetByIdRequestInput>;
};


export type QueryapiV1SwordServiceListByIdArgs = {
  input?: InputMaybe<V1ListSwordsByIdRequestInput>;
};


export type QueryapiV1SwordServiceGetSamuraiWithSwordsArgs = {
  input?: InputMaybe<V1SamuraiWithSwordsRequestInput>;
};


export type QueryapiV1SwordServiceListSamuraiWithSwordsArgs = {
  input?: InputMaybe<V1ListSamuraiWithSwordsRequestInput>;
};


export type QueryapiV1SwordServiceConnectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};

export type V1Samurai = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  swords?: Maybe<Array<Maybe<V1Sword>>>;
};

export type comSamuraiV1GetByIdRequestInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type V1ListSamuraiByIdInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type connectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

export type Mutation = {
  apiV1SwordServiceCreateSword?: Maybe<V1Sword>;
};


export type MutationapiV1SwordServiceCreateSwordArgs = {
  input?: InputMaybe<V1CreateSwordRequestInput>;
};

export type V1Sword = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<V1Type>;
  samuraiId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  samurai?: Maybe<V1Samurai>;
};

export type V1Type =
  | 'UNKNOWN'
  | 'KATANA'
  | 'TACHI'
  | 'UCHIGATANA'
  | 'WAKIZASHI';

export type V1ListBySamuraiIdRequestInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type V1GetByIdRequestInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type V1ListSwordsByIdRequestInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type V1SamuraiWithSwordsResponse = {
  id?: Maybe<Scalars['String']>;
  swords?: Maybe<Array<Maybe<V1Sword>>>;
};

export type V1SamuraiWithSwordsRequestInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type V1ListSamuraiWithSwordsRequestInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type V1CreateSwordRequestInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<V1Type>;
  samuraiId?: InputMaybe<Scalars['String']>;
  swordAttributes?: InputMaybe<V1SwordAttributesInput>;
};

export type V1SwordAttributesInput = {
  bladeWidth?: InputMaybe<Scalars['Float']>;
  bladeHeight?: InputMaybe<Scalars['Float']>;
  handleLength?: InputMaybe<Scalars['Float']>;
  handleColor?: InputMaybe<Scalars['String']>;
  decoration?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  V1Samurai: ResolverTypeWrapper<V1Samurai>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  comSamuraiV1GetByIdRequestInput: comSamuraiV1GetByIdRequestInput;
  googleProtobufEmptyInput: ResolverTypeWrapper<Scalars['googleProtobufEmptyInput']>;
  V1ListSamuraiByIdInput: V1ListSamuraiByIdInput;
  connectivityState: connectivityState;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']>;
  Mutation: ResolverTypeWrapper<{}>;
  V1Sword: ResolverTypeWrapper<V1Sword>;
  V1Type: V1Type;
  V1ListBySamuraiIdRequestInput: V1ListBySamuraiIdRequestInput;
  V1GetByIdRequestInput: V1GetByIdRequestInput;
  V1ListSwordsByIdRequestInput: V1ListSwordsByIdRequestInput;
  V1SamuraiWithSwordsResponse: ResolverTypeWrapper<V1SamuraiWithSwordsResponse>;
  V1SamuraiWithSwordsRequestInput: V1SamuraiWithSwordsRequestInput;
  V1ListSamuraiWithSwordsRequestInput: V1ListSamuraiWithSwordsRequestInput;
  V1CreateSwordRequestInput: V1CreateSwordRequestInput;
  V1SwordAttributesInput: V1SwordAttributesInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  V1Samurai: V1Samurai;
  String: Scalars['String'];
  Int: Scalars['Int'];
  comSamuraiV1GetByIdRequestInput: comSamuraiV1GetByIdRequestInput;
  googleProtobufEmptyInput: Scalars['googleProtobufEmptyInput'];
  V1ListSamuraiByIdInput: V1ListSamuraiByIdInput;
  Boolean: Scalars['Boolean'];
  ObjMap: Scalars['ObjMap'];
  Mutation: {};
  V1Sword: V1Sword;
  V1ListBySamuraiIdRequestInput: V1ListBySamuraiIdRequestInput;
  V1GetByIdRequestInput: V1GetByIdRequestInput;
  V1ListSwordsByIdRequestInput: V1ListSwordsByIdRequestInput;
  V1SamuraiWithSwordsResponse: V1SamuraiWithSwordsResponse;
  V1SamuraiWithSwordsRequestInput: V1SamuraiWithSwordsRequestInput;
  V1ListSamuraiWithSwordsRequestInput: V1ListSamuraiWithSwordsRequestInput;
  V1CreateSwordRequestInput: V1CreateSwordRequestInput;
  V1SwordAttributesInput: V1SwordAttributesInput;
  Float: Scalars['Float'];
}>;

export type grpcMethodDirectiveArgs = {
  rootJsonName?: Maybe<Scalars['String']>;
  objPath?: Maybe<Scalars['String']>;
  methodName?: Maybe<Scalars['String']>;
  responseStream?: Maybe<Scalars['Boolean']>;
};

export type grpcMethodDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = grpcMethodDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type grpcConnectivityStateDirectiveArgs = {
  rootJsonName?: Maybe<Scalars['String']>;
  objPath?: Maybe<Scalars['String']>;
};

export type grpcConnectivityStateDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = grpcConnectivityStateDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type grpcRootJsonDirectiveArgs = {
  name?: Maybe<Scalars['String']>;
  rootJson?: Maybe<Scalars['ObjMap']>;
  loadOptions?: Maybe<Scalars['ObjMap']>;
};

export type grpcRootJsonDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = grpcRootJsonDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  comSamuraiV1SamuraiServiceGetById?: Resolver<Maybe<ResolversTypes['V1Samurai']>, ParentType, ContextType, Partial<QuerycomSamuraiV1SamuraiServiceGetByIdArgs>>;
  comSamuraiV1SamuraiServiceListAllSamurai?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Samurai']>>>, ParentType, ContextType, Partial<QuerycomSamuraiV1SamuraiServiceListAllSamuraiArgs>>;
  comSamuraiV1SamuraiServiceListById?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Samurai']>>>, ParentType, ContextType, Partial<QuerycomSamuraiV1SamuraiServiceListByIdArgs>>;
  comSamuraiV1SamuraiServiceConnectivityState?: Resolver<Maybe<ResolversTypes['connectivityState']>, ParentType, ContextType, Partial<QuerycomSamuraiV1SamuraiServiceConnectivityStateArgs>>;
  apiV1SwordServiceListSwords?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Sword']>>>, ParentType, ContextType, Partial<QueryapiV1SwordServiceListSwordsArgs>>;
  apiV1SwordServiceListBySamuraiId?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Sword']>>>, ParentType, ContextType, Partial<QueryapiV1SwordServiceListBySamuraiIdArgs>>;
  apiV1SwordServiceGetById?: Resolver<Maybe<ResolversTypes['V1Sword']>, ParentType, ContextType, Partial<QueryapiV1SwordServiceGetByIdArgs>>;
  apiV1SwordServiceListById?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Sword']>>>, ParentType, ContextType, Partial<QueryapiV1SwordServiceListByIdArgs>>;
  apiV1SwordServiceGetSamuraiWithSwords?: Resolver<Maybe<ResolversTypes['V1SamuraiWithSwordsResponse']>, ParentType, ContextType, Partial<QueryapiV1SwordServiceGetSamuraiWithSwordsArgs>>;
  apiV1SwordServiceListSamuraiWithSwords?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1SamuraiWithSwordsResponse']>>>, ParentType, ContextType, Partial<QueryapiV1SwordServiceListSamuraiWithSwordsArgs>>;
  apiV1SwordServiceConnectivityState?: Resolver<Maybe<ResolversTypes['connectivityState']>, ParentType, ContextType, Partial<QueryapiV1SwordServiceConnectivityStateArgs>>;
}>;

export type V1SamuraiResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Samurai'] = ResolversParentTypes['V1Samurai']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  swords?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Sword']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface googleProtobufEmptyInputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['googleProtobufEmptyInput'], any> {
  name: 'googleProtobufEmptyInput';
}

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  apiV1SwordServiceCreateSword?: Resolver<Maybe<ResolversTypes['V1Sword']>, ParentType, ContextType, Partial<MutationapiV1SwordServiceCreateSwordArgs>>;
}>;

export type V1SwordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Sword'] = ResolversParentTypes['V1Sword']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['V1Type']>, ParentType, ContextType>;
  samuraiId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  samurai?: Resolver<Maybe<ResolversTypes['V1Samurai']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SamuraiWithSwordsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SamuraiWithSwordsResponse'] = ResolversParentTypes['V1SamuraiWithSwordsResponse']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swords?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Sword']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  V1Samurai?: V1SamuraiResolvers<ContextType>;
  googleProtobufEmptyInput?: GraphQLScalarType;
  ObjMap?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  V1Sword?: V1SwordResolvers<ContextType>;
  V1SamuraiWithSwordsResponse?: V1SamuraiWithSwordsResponseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  grpcMethod?: grpcMethodDirectiveResolver<any, any, ContextType>;
  grpcConnectivityState?: grpcConnectivityStateDirectiveResolver<any, any, ContextType>;
  grpcRootJson?: grpcRootJsonDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = SamuraiApiTypes.Context & SwordApiTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));