// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SamuraiApiTypes {
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
  ObjMap: any;
};

export type Query = {
  com_samurai_v1_SamuraiService_GetById?: Maybe<com_samurai_v1_Samurai>;
  com_samurai_v1_SamuraiService_ListAllSamurai?: Maybe<Array<Maybe<com_samurai_v1_Samurai>>>;
  com_samurai_v1_SamuraiService_ListById?: Maybe<Array<Maybe<com_samurai_v1_Samurai>>>;
  com_samurai_v1_SamuraiService_connectivityState?: Maybe<ConnectivityState>;
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

export type com_samurai_v1_Samurai = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
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

  export type QuerySdk = {
      /** null **/
  com_samurai_v1_SamuraiService_GetById: InContextSdkMethod<Query['com_samurai_v1_SamuraiService_GetById'], Querycom_samurai_v1_SamuraiService_GetByIdArgs, MeshContext>,
  /** null **/
  com_samurai_v1_SamuraiService_ListAllSamurai: InContextSdkMethod<Query['com_samurai_v1_SamuraiService_ListAllSamurai'], Querycom_samurai_v1_SamuraiService_ListAllSamuraiArgs, MeshContext>,
  /** null **/
  com_samurai_v1_SamuraiService_ListById: InContextSdkMethod<Query['com_samurai_v1_SamuraiService_ListById'], Querycom_samurai_v1_SamuraiService_ListByIdArgs, MeshContext>,
  /** undefined **/
  com_samurai_v1_SamuraiService_connectivityState: InContextSdkMethod<Query['com_samurai_v1_SamuraiService_connectivityState'], Querycom_samurai_v1_SamuraiService_connectivityStateArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["samurai-api"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
