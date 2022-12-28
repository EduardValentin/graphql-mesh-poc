// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GrpcHandler from "@graphql-mesh/grpc"
import { parse } from 'graphql';
import StitchingMerger from "@graphql-mesh/merger-stitching";
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
  Float: number;
  google_protobuf_Empty_Input: any;
};

export type Query = {
  com_samurai_v1_SamuraiService_GetById?: Maybe<com_samurai_v1_Samurai>;
  com_samurai_v1_SamuraiService_ListAllSamurai?: Maybe<Array<Maybe<com_samurai_v1_Samurai>>>;
  com_samurai_v1_SamuraiService_ListById?: Maybe<Array<Maybe<com_samurai_v1_Samurai>>>;
  com_samurai_v1_SamuraiService_connectivityState?: Maybe<ConnectivityState>;
  com_sword_v1_SwordService_ListSwords?: Maybe<Array<Maybe<com_sword_v1_Sword>>>;
  com_sword_v1_SwordService_ListBySamuraiId?: Maybe<Array<Maybe<com_sword_v1_Sword>>>;
  com_sword_v1_SwordService_GetById?: Maybe<com_sword_v1_Sword>;
  com_sword_v1_SwordService_ListById?: Maybe<Array<Maybe<com_sword_v1_Sword>>>;
  com_sword_v1_SwordService_GetSamuraiWithSwords?: Maybe<com_sword_v1_SamuraiWithSwordsResponse>;
  com_sword_v1_SwordService_ListSamuraiWithSwords?: Maybe<Array<Maybe<com_sword_v1_SamuraiWithSwordsResponse>>>;
  com_sword_v1_SwordService_connectivityState?: Maybe<ConnectivityState>;
};


export type Querycom_samurai_v1_SamuraiService_GetByIdArgs = {
  input?: InputMaybe<com_samurai_v1_GetByIdRequest_Input>;
};


export type Querycom_samurai_v1_SamuraiService_ListAllSamuraiArgs = {
  input?: InputMaybe<Scalars['google_protobuf_Empty_Input']>;
};


export type Querycom_samurai_v1_SamuraiService_ListByIdArgs = {
  input?: InputMaybe<com_samurai_v1_ListSamuraiById_Input>;
};


export type Querycom_samurai_v1_SamuraiService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};


export type Querycom_sword_v1_SwordService_ListSwordsArgs = {
  input?: InputMaybe<Scalars['google_protobuf_Empty_Input']>;
};


export type Querycom_sword_v1_SwordService_ListBySamuraiIdArgs = {
  input?: InputMaybe<com_sword_v1_ListBySamuraiIdRequest_Input>;
};


export type Querycom_sword_v1_SwordService_GetByIdArgs = {
  input?: InputMaybe<com_sword_v1_GetByIdRequest_Input>;
};


export type Querycom_sword_v1_SwordService_ListByIdArgs = {
  input?: InputMaybe<com_sword_v1_ListSwordsByIdRequest_Input>;
};


export type Querycom_sword_v1_SwordService_GetSamuraiWithSwordsArgs = {
  input?: InputMaybe<com_sword_v1_SamuraiWithSwordsRequest_Input>;
};


export type Querycom_sword_v1_SwordService_ListSamuraiWithSwordsArgs = {
  input?: InputMaybe<com_sword_v1_ListSamuraiWithSwordsRequest_Input>;
};


export type Querycom_sword_v1_SwordService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};

export type com_samurai_v1_Samurai = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  swords?: Maybe<Array<Maybe<com_sword_v1_Sword>>>;
};

export type com_samurai_v1_GetByIdRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type com_samurai_v1_ListSamuraiById_Input = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

export type Mutation = {
  com_sword_v1_SwordService_CreateSword?: Maybe<com_sword_v1_Sword>;
};


export type Mutationcom_sword_v1_SwordService_CreateSwordArgs = {
  input?: InputMaybe<com_sword_v1_CreateSwordRequest_Input>;
};

export type com_sword_v1_Sword = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<com_sword_v1_Type>;
  samurai_id?: Maybe<Scalars['String']>;
  samurai?: Maybe<com_samurai_v1_Samurai>;
};

export type com_sword_v1_Type =
  | 'UNKNOWN'
  | 'KATANA'
  | 'TACHI'
  | 'UCHIGATANA'
  | 'WAKIZASHI';

export type com_sword_v1_ListBySamuraiIdRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type com_sword_v1_GetByIdRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type com_sword_v1_ListSwordsByIdRequest_Input = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type com_sword_v1_SamuraiWithSwordsResponse = {
  id?: Maybe<Scalars['String']>;
  swords?: Maybe<Array<Maybe<com_sword_v1_Sword>>>;
};

export type com_sword_v1_SamuraiWithSwordsRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type com_sword_v1_ListSamuraiWithSwordsRequest_Input = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type com_sword_v1_CreateSwordRequest_Input = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<com_sword_v1_Type>;
  samurai_id?: InputMaybe<Scalars['String']>;
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
  com_samurai_v1_Samurai: ResolverTypeWrapper<com_samurai_v1_Samurai>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  com_samurai_v1_GetByIdRequest_Input: com_samurai_v1_GetByIdRequest_Input;
  google_protobuf_Empty_Input: ResolverTypeWrapper<Scalars['google_protobuf_Empty_Input']>;
  com_samurai_v1_ListSamuraiById_Input: com_samurai_v1_ListSamuraiById_Input;
  ConnectivityState: ConnectivityState;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  com_sword_v1_Sword: ResolverTypeWrapper<com_sword_v1_Sword>;
  com_sword_v1_Type: com_sword_v1_Type;
  com_sword_v1_ListBySamuraiIdRequest_Input: com_sword_v1_ListBySamuraiIdRequest_Input;
  com_sword_v1_GetByIdRequest_Input: com_sword_v1_GetByIdRequest_Input;
  com_sword_v1_ListSwordsByIdRequest_Input: com_sword_v1_ListSwordsByIdRequest_Input;
  com_sword_v1_SamuraiWithSwordsResponse: ResolverTypeWrapper<com_sword_v1_SamuraiWithSwordsResponse>;
  com_sword_v1_SamuraiWithSwordsRequest_Input: com_sword_v1_SamuraiWithSwordsRequest_Input;
  com_sword_v1_ListSamuraiWithSwordsRequest_Input: com_sword_v1_ListSamuraiWithSwordsRequest_Input;
  com_sword_v1_CreateSwordRequest_Input: com_sword_v1_CreateSwordRequest_Input;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  com_samurai_v1_Samurai: com_samurai_v1_Samurai;
  String: Scalars['String'];
  Int: Scalars['Int'];
  com_samurai_v1_GetByIdRequest_Input: com_samurai_v1_GetByIdRequest_Input;
  google_protobuf_Empty_Input: Scalars['google_protobuf_Empty_Input'];
  com_samurai_v1_ListSamuraiById_Input: com_samurai_v1_ListSamuraiById_Input;
  Boolean: Scalars['Boolean'];
  Mutation: {};
  com_sword_v1_Sword: com_sword_v1_Sword;
  com_sword_v1_ListBySamuraiIdRequest_Input: com_sword_v1_ListBySamuraiIdRequest_Input;
  com_sword_v1_GetByIdRequest_Input: com_sword_v1_GetByIdRequest_Input;
  com_sword_v1_ListSwordsByIdRequest_Input: com_sword_v1_ListSwordsByIdRequest_Input;
  com_sword_v1_SamuraiWithSwordsResponse: com_sword_v1_SamuraiWithSwordsResponse;
  com_sword_v1_SamuraiWithSwordsRequest_Input: com_sword_v1_SamuraiWithSwordsRequest_Input;
  com_sword_v1_ListSamuraiWithSwordsRequest_Input: com_sword_v1_ListSamuraiWithSwordsRequest_Input;
  com_sword_v1_CreateSwordRequest_Input: com_sword_v1_CreateSwordRequest_Input;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  com_samurai_v1_SamuraiService_GetById?: Resolver<Maybe<ResolversTypes['com_samurai_v1_Samurai']>, ParentType, ContextType, Partial<Querycom_samurai_v1_SamuraiService_GetByIdArgs>>;
  com_samurai_v1_SamuraiService_ListAllSamurai?: Resolver<Maybe<Array<Maybe<ResolversTypes['com_samurai_v1_Samurai']>>>, ParentType, ContextType, Partial<Querycom_samurai_v1_SamuraiService_ListAllSamuraiArgs>>;
  com_samurai_v1_SamuraiService_ListById?: Resolver<Maybe<Array<Maybe<ResolversTypes['com_samurai_v1_Samurai']>>>, ParentType, ContextType, Partial<Querycom_samurai_v1_SamuraiService_ListByIdArgs>>;
  com_samurai_v1_SamuraiService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Querycom_samurai_v1_SamuraiService_connectivityStateArgs>>;
  com_sword_v1_SwordService_ListSwords?: Resolver<Maybe<Array<Maybe<ResolversTypes['com_sword_v1_Sword']>>>, ParentType, ContextType, Partial<Querycom_sword_v1_SwordService_ListSwordsArgs>>;
  com_sword_v1_SwordService_ListBySamuraiId?: Resolver<Maybe<Array<Maybe<ResolversTypes['com_sword_v1_Sword']>>>, ParentType, ContextType, Partial<Querycom_sword_v1_SwordService_ListBySamuraiIdArgs>>;
  com_sword_v1_SwordService_GetById?: Resolver<Maybe<ResolversTypes['com_sword_v1_Sword']>, ParentType, ContextType, Partial<Querycom_sword_v1_SwordService_GetByIdArgs>>;
  com_sword_v1_SwordService_ListById?: Resolver<Maybe<Array<Maybe<ResolversTypes['com_sword_v1_Sword']>>>, ParentType, ContextType, Partial<Querycom_sword_v1_SwordService_ListByIdArgs>>;
  com_sword_v1_SwordService_GetSamuraiWithSwords?: Resolver<Maybe<ResolversTypes['com_sword_v1_SamuraiWithSwordsResponse']>, ParentType, ContextType, Partial<Querycom_sword_v1_SwordService_GetSamuraiWithSwordsArgs>>;
  com_sword_v1_SwordService_ListSamuraiWithSwords?: Resolver<Maybe<Array<Maybe<ResolversTypes['com_sword_v1_SamuraiWithSwordsResponse']>>>, ParentType, ContextType, Partial<Querycom_sword_v1_SwordService_ListSamuraiWithSwordsArgs>>;
  com_sword_v1_SwordService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Querycom_sword_v1_SwordService_connectivityStateArgs>>;
}>;

export type com_samurai_v1_SamuraiResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['com_samurai_v1_Samurai'] = ResolversParentTypes['com_samurai_v1_Samurai']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  swords?: Resolver<Maybe<Array<Maybe<ResolversTypes['com_sword_v1_Sword']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface google_protobuf_Empty_InputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['google_protobuf_Empty_Input'], any> {
  name: 'google_protobuf_Empty_Input';
}

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  com_sword_v1_SwordService_CreateSword?: Resolver<Maybe<ResolversTypes['com_sword_v1_Sword']>, ParentType, ContextType, Partial<Mutationcom_sword_v1_SwordService_CreateSwordArgs>>;
}>;

export type com_sword_v1_SwordResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['com_sword_v1_Sword'] = ResolversParentTypes['com_sword_v1_Sword']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['com_sword_v1_Type']>, ParentType, ContextType>;
  samurai_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  samurai?: Resolver<Maybe<ResolversTypes['com_samurai_v1_Samurai']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type com_sword_v1_SamuraiWithSwordsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['com_sword_v1_SamuraiWithSwordsResponse'] = ResolversParentTypes['com_sword_v1_SamuraiWithSwordsResponse']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swords?: Resolver<Maybe<Array<Maybe<ResolversTypes['com_sword_v1_Sword']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  com_samurai_v1_Samurai?: com_samurai_v1_SamuraiResolvers<ContextType>;
  google_protobuf_Empty_Input?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  com_sword_v1_Sword?: com_sword_v1_SwordResolvers<ContextType>;
  com_sword_v1_SamuraiWithSwordsResponse?: com_sword_v1_SamuraiWithSwordsResponseResolvers<ContextType>;
}>;


export type MeshContext = SamuraiApiTypes.Context & SwordApiTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/samurai-api/descriptorSet.proto":
      return import("./sources/samurai-api/descriptorSet.proto") as T;
    
    case ".mesh/sources/sword-api/descriptorSet.proto":
      return import("./sources/sword-api/descriptorSet.proto") as T;
    
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

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const swordApiTransforms = [];
const samuraiApiTransforms = [];
const swordApiHandler = new GrpcHandler({
              name: "sword-api",
              config: {"endpoint":"localhost:50051","source":{"file":"../proto/src/main/proto/com/sword/v1/sword_service.proto","load":{"includeDirs":["../proto/src/main/proto"]}}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("sword-api"),
              logger: logger.child("sword-api"),
              importFn,
            });
const samuraiApiHandler = new GrpcHandler({
              name: "samurai-api",
              config: {"endpoint":"localhost:50052","source":{"file":"../proto/src/main/proto/com/samurai/v1/samurai_service.proto","load":{"includeDirs":["../proto/src/main/proto"]}}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("samurai-api"),
              logger: logger.child("samurai-api"),
              importFn,
            });
sources[0] = {
          name: 'sword-api',
          handler: swordApiHandler,
          transforms: swordApiTransforms
        }
sources[1] = {
          name: 'samurai-api',
          handler: samuraiApiHandler,
          transforms: samuraiApiTransforms
        }
const additionalTypeDefs = [parse("extend type com_samurai_v1_Samurai {\n  swords: [com_sword_v1_Sword]\n}\n\nextend type com_sword_v1_Sword {\n  samurai: com_samurai_v1_Samurai\n}"),] as any[];
const additionalResolvers = await Promise.all([
        import("../resolvers.ts")
            .then(m => m.resolvers || m.default || m)
      ]);
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
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