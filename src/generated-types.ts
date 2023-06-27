import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateMarkInput = {
  class: Scalars['String']['input'];
  mark: Scalars['Float']['input'];
  student: Scalars['String']['input'];
  teacher: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type Mark = {
  __typename?: 'Mark';
  _id: Scalars['String']['output'];
  class: Scalars['String']['output'];
  mark: Scalars['Float']['output'];
  student: Scalars['String']['output'];
  teacher: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMark: Mark;
  createUser: User;
};


export type MutationCreateMarkArgs = {
  createMarkData: CreateMarkInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  marks: Array<Mark>;
  user: User;
};


export type QueryMarksArgs = {
  class: Scalars['String']['input'];
  mark: Scalars['String']['input'];
  student: Scalars['String']['input'];
  teacher: Scalars['String']['input'];
};


export type QueryUserArgs = {
  _id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, email: string, role: string } };

export type CreateMarkMutationVariables = Exact<{
  createMarkData: CreateMarkInput;
}>;


export type CreateMarkMutation = { __typename?: 'Mutation', createMark: { __typename?: 'Mark', _id: string, student: string, class: string, mark: number, teacher: string } };

export type MarksQueryVariables = Exact<{
  student: Scalars['String']['input'];
  class: Scalars['String']['input'];
  mark: Scalars['String']['input'];
  teacher: Scalars['String']['input'];
}>;


export type MarksQuery = { __typename?: 'Query', marks: Array<{ __typename?: 'Mark', _id: string, student: string, class: string, mark: number, teacher: string }> };

export const CreateUserDocument = gql`
    mutation createUser($createUserData: CreateUserInput!) {
  createUser(createUserData: $createUserData) {
    _id
    email
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateMarkDocument = gql`
    mutation createMark($createMarkData: CreateMarkInput!) {
  createMark(createMarkData: $createMarkData) {
    _id
    student
    class
    mark
    teacher
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMarkGQL extends Apollo.Mutation<CreateMarkMutation, CreateMarkMutationVariables> {
    document = CreateMarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MarksDocument = gql`
    query marks($student: String!, $class: String!, $mark: String!, $teacher: String!) {
  marks(student: $student, class: $class, mark: $mark, teacher: $teacher) {
    _id
    student
    class
    mark
    teacher
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MarksGQL extends Apollo.Query<MarksQuery, MarksQueryVariables> {
    document = MarksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }