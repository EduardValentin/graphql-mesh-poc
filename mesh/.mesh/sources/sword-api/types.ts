// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SwordApiTypes {
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
  Int: number;
  Float: number;
  google_protobuf_Empty_Input: any;
};

export type Query = {
  com_sword_v1_SwordService_ListSwords?: Maybe<Array<Maybe<com_sword_v1_Sword>>>;
  com_sword_v1_SwordService_ListBySamuraiId?: Maybe<Array<Maybe<com_sword_v1_Sword>>>;
  com_sword_v1_SwordService_GetById?: Maybe<com_sword_v1_Sword>;
  com_sword_v1_SwordService_ListById?: Maybe<Array<Maybe<com_sword_v1_Sword>>>;
  com_sword_v1_SwordService_GetSamuraiWithSwords?: Maybe<com_sword_v1_SamuraiWithSwordsResponse>;
  com_sword_v1_SwordService_ListSamuraiWithSwords?: Maybe<Array<Maybe<com_sword_v1_SamuraiWithSwordsResponse>>>;
  com_sword_v1_SwordService_connectivityState?: Maybe<ConnectivityState>;
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

export type com_sword_v1_Sword = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<com_sword_v1_Type>;
  samurai_id?: Maybe<Scalars['String']>;
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

export type com_sword_v1_CreateSwordRequest_Input = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<com_sword_v1_Type>;
  samurai_id?: InputMaybe<Scalars['String']>;
};

  export type QuerySdk = {
      /** null **/
  com_sword_v1_SwordService_ListSwords: InContextSdkMethod<Query['com_sword_v1_SwordService_ListSwords'], Querycom_sword_v1_SwordService_ListSwordsArgs, MeshContext>,
  /** null **/
  com_sword_v1_SwordService_ListBySamuraiId: InContextSdkMethod<Query['com_sword_v1_SwordService_ListBySamuraiId'], Querycom_sword_v1_SwordService_ListBySamuraiIdArgs, MeshContext>,
  /** null **/
  com_sword_v1_SwordService_GetById: InContextSdkMethod<Query['com_sword_v1_SwordService_GetById'], Querycom_sword_v1_SwordService_GetByIdArgs, MeshContext>,
  /** null **/
  com_sword_v1_SwordService_ListById: InContextSdkMethod<Query['com_sword_v1_SwordService_ListById'], Querycom_sword_v1_SwordService_ListByIdArgs, MeshContext>,
  /** null **/
  com_sword_v1_SwordService_GetSamuraiWithSwords: InContextSdkMethod<Query['com_sword_v1_SwordService_GetSamuraiWithSwords'], Querycom_sword_v1_SwordService_GetSamuraiWithSwordsArgs, MeshContext>,
  /** null **/
  com_sword_v1_SwordService_ListSamuraiWithSwords: InContextSdkMethod<Query['com_sword_v1_SwordService_ListSamuraiWithSwords'], Querycom_sword_v1_SwordService_ListSamuraiWithSwordsArgs, MeshContext>,
  /** undefined **/
  com_sword_v1_SwordService_connectivityState: InContextSdkMethod<Query['com_sword_v1_SwordService_connectivityState'], Querycom_sword_v1_SwordService_connectivityStateArgs, MeshContext>
  };

  export type MutationSdk = {
      /** null **/
  com_sword_v1_SwordService_CreateSword: InContextSdkMethod<Mutation['com_sword_v1_SwordService_CreateSword'], Mutationcom_sword_v1_SwordService_CreateSwordArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["sword-api"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
