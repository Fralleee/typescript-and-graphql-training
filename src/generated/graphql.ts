import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
};

export type CountryNode = Node & {
  __typename?: 'CountryNode';
  active: Scalars['Boolean'];
  alpha2Code?: Maybe<Scalars['String']>;
  alpha3Code?: Maybe<Scalars['String']>;
  altSpellings?: Maybe<Array<Scalars['String']>>;
  area?: Maybe<Scalars['Int']>;
  borders?: Maybe<Array<Scalars['String']>>;
  callingCodes?: Maybe<Array<Scalars['String']>>;
  capital?: Maybe<Scalars['String']>;
  cioc?: Maybe<Scalars['String']>;
  currencies: CurrencyNodeConnection;
  dateAdded?: Maybe<Scalars['DateTime']>;
  dateModified: Scalars['DateTime'];
  demonym?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['String']>;
  gini?: Maybe<Scalars['Decimal']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  languages: LanguageNodeConnection;
  latLng?: Maybe<Array<Scalars['Decimal']>>;
  name: Scalars['String'];
  nativeName?: Maybe<Scalars['String']>;
  numericCode?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
  regionalBlocs: RegionalBlocNodeConnection;
  subregion?: Maybe<Scalars['String']>;
  timezones?: Maybe<Array<Scalars['String']>>;
  topLevelDomain?: Maybe<Array<Scalars['String']>>;
  translations?: Maybe<Scalars['JSONString']>;
};


export type CountryNodeCurrenciesArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  code_Icontains?: InputMaybe<Scalars['String']>;
  code_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_Icontains?: InputMaybe<Scalars['String']>;
  symbol_Istartswith?: InputMaybe<Scalars['String']>;
};


export type CountryNodeLanguagesArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  iso6391?: InputMaybe<Scalars['String']>;
  iso6391_Icontains?: InputMaybe<Scalars['String']>;
  iso6391_Istartswith?: InputMaybe<Scalars['String']>;
  iso6392?: InputMaybe<Scalars['String']>;
  iso6392_Icontains?: InputMaybe<Scalars['String']>;
  iso6392_Istartswith?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  nativeName?: InputMaybe<Scalars['String']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CountryNodeRegionalBlocsArgs = {
  acronym?: InputMaybe<Scalars['String']>;
  acronym_Icontains?: InputMaybe<Scalars['String']>;
  acronym_Istartswith?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type CountryNodeConnection = {
  __typename?: 'CountryNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CountryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CountryNode` and its cursor. */
export type CountryNodeEdge = {
  __typename?: 'CountryNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CountryNode>;
};

export type CurrencyNode = Node & {
  __typename?: 'CurrencyNode';
  active: Scalars['Boolean'];
  code?: Maybe<Scalars['String']>;
  countrySet: CountryNodeConnection;
  dateAdded?: Maybe<Scalars['DateTime']>;
  dateModified: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};


export type CurrencyNodeCountrySetArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  alpha2Code?: InputMaybe<Scalars['String']>;
  alpha2Code_Icontains?: InputMaybe<Scalars['String']>;
  alpha2Code_Istartswith?: InputMaybe<Scalars['String']>;
  alpha3Code?: InputMaybe<Scalars['String']>;
  alpha3Code_Icontains?: InputMaybe<Scalars['String']>;
  alpha3Code_Istartswith?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['Int']>;
  area_Gte?: InputMaybe<Scalars['Int']>;
  area_Lte?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  capital?: InputMaybe<Scalars['String']>;
  capital_Icontains?: InputMaybe<Scalars['String']>;
  capital_Istartswith?: InputMaybe<Scalars['String']>;
  cioc?: InputMaybe<Scalars['String']>;
  cioc_Icontains?: InputMaybe<Scalars['String']>;
  cioc_Istartswith?: InputMaybe<Scalars['String']>;
  demonym?: InputMaybe<Scalars['String']>;
  demonym_Icontains?: InputMaybe<Scalars['String']>;
  demonym_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  gini?: InputMaybe<Scalars['Float']>;
  gini_Gte?: InputMaybe<Scalars['Float']>;
  gini_Lte?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  nativeName?: InputMaybe<Scalars['String']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']>;
  numericCode?: InputMaybe<Scalars['String']>;
  numericCode_Icontains?: InputMaybe<Scalars['String']>;
  numericCode_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  population?: InputMaybe<Scalars['Int']>;
  population_Gte?: InputMaybe<Scalars['Int']>;
  population_Lte?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
  region_Icontains?: InputMaybe<Scalars['String']>;
  region_Istartswith?: InputMaybe<Scalars['String']>;
  subregion?: InputMaybe<Scalars['String']>;
  subregion_Icontains?: InputMaybe<Scalars['String']>;
  subregion_Istartswith?: InputMaybe<Scalars['String']>;
};

export type CurrencyNodeConnection = {
  __typename?: 'CurrencyNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CurrencyNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CurrencyNode` and its cursor. */
export type CurrencyNodeEdge = {
  __typename?: 'CurrencyNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<CurrencyNode>;
};

export type LanguageNode = Node & {
  __typename?: 'LanguageNode';
  active: Scalars['Boolean'];
  countrySet: CountryNodeConnection;
  dateAdded?: Maybe<Scalars['DateTime']>;
  dateModified: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  iso6391?: Maybe<Scalars['String']>;
  iso6392?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nativeName?: Maybe<Scalars['String']>;
};


export type LanguageNodeCountrySetArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  alpha2Code?: InputMaybe<Scalars['String']>;
  alpha2Code_Icontains?: InputMaybe<Scalars['String']>;
  alpha2Code_Istartswith?: InputMaybe<Scalars['String']>;
  alpha3Code?: InputMaybe<Scalars['String']>;
  alpha3Code_Icontains?: InputMaybe<Scalars['String']>;
  alpha3Code_Istartswith?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['Int']>;
  area_Gte?: InputMaybe<Scalars['Int']>;
  area_Lte?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  capital?: InputMaybe<Scalars['String']>;
  capital_Icontains?: InputMaybe<Scalars['String']>;
  capital_Istartswith?: InputMaybe<Scalars['String']>;
  cioc?: InputMaybe<Scalars['String']>;
  cioc_Icontains?: InputMaybe<Scalars['String']>;
  cioc_Istartswith?: InputMaybe<Scalars['String']>;
  demonym?: InputMaybe<Scalars['String']>;
  demonym_Icontains?: InputMaybe<Scalars['String']>;
  demonym_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  gini?: InputMaybe<Scalars['Float']>;
  gini_Gte?: InputMaybe<Scalars['Float']>;
  gini_Lte?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  nativeName?: InputMaybe<Scalars['String']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']>;
  numericCode?: InputMaybe<Scalars['String']>;
  numericCode_Icontains?: InputMaybe<Scalars['String']>;
  numericCode_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  population?: InputMaybe<Scalars['Int']>;
  population_Gte?: InputMaybe<Scalars['Int']>;
  population_Lte?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
  region_Icontains?: InputMaybe<Scalars['String']>;
  region_Istartswith?: InputMaybe<Scalars['String']>;
  subregion?: InputMaybe<Scalars['String']>;
  subregion_Icontains?: InputMaybe<Scalars['String']>;
  subregion_Istartswith?: InputMaybe<Scalars['String']>;
};

export type LanguageNodeConnection = {
  __typename?: 'LanguageNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LanguageNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `LanguageNode` and its cursor. */
export type LanguageNodeEdge = {
  __typename?: 'LanguageNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<LanguageNode>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  countries?: Maybe<CountryNodeConnection>;
  /** The ID of the object */
  country?: Maybe<CountryNode>;
  currencies?: Maybe<CurrencyNodeConnection>;
  /** The ID of the object */
  currency?: Maybe<CurrencyNode>;
  /** The ID of the object */
  language?: Maybe<LanguageNode>;
  languages?: Maybe<LanguageNodeConnection>;
  /** The ID of the object */
  regionalBloc?: Maybe<RegionalBlocNode>;
  regionalBlocs?: Maybe<RegionalBlocNodeConnection>;
};


export type QueryCountriesArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  alpha2Code?: InputMaybe<Scalars['String']>;
  alpha2Code_Icontains?: InputMaybe<Scalars['String']>;
  alpha2Code_Istartswith?: InputMaybe<Scalars['String']>;
  alpha3Code?: InputMaybe<Scalars['String']>;
  alpha3Code_Icontains?: InputMaybe<Scalars['String']>;
  alpha3Code_Istartswith?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['Int']>;
  area_Gte?: InputMaybe<Scalars['Int']>;
  area_Lte?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  capital?: InputMaybe<Scalars['String']>;
  capital_Icontains?: InputMaybe<Scalars['String']>;
  capital_Istartswith?: InputMaybe<Scalars['String']>;
  cioc?: InputMaybe<Scalars['String']>;
  cioc_Icontains?: InputMaybe<Scalars['String']>;
  cioc_Istartswith?: InputMaybe<Scalars['String']>;
  demonym?: InputMaybe<Scalars['String']>;
  demonym_Icontains?: InputMaybe<Scalars['String']>;
  demonym_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  gini?: InputMaybe<Scalars['Float']>;
  gini_Gte?: InputMaybe<Scalars['Float']>;
  gini_Lte?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  nativeName?: InputMaybe<Scalars['String']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']>;
  numericCode?: InputMaybe<Scalars['String']>;
  numericCode_Icontains?: InputMaybe<Scalars['String']>;
  numericCode_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  population?: InputMaybe<Scalars['Int']>;
  population_Gte?: InputMaybe<Scalars['Int']>;
  population_Lte?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
  region_Icontains?: InputMaybe<Scalars['String']>;
  region_Istartswith?: InputMaybe<Scalars['String']>;
  subregion?: InputMaybe<Scalars['String']>;
  subregion_Icontains?: InputMaybe<Scalars['String']>;
  subregion_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryCurrenciesArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  code_Icontains?: InputMaybe<Scalars['String']>;
  code_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_Icontains?: InputMaybe<Scalars['String']>;
  symbol_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryCurrencyArgs = {
  id: Scalars['ID'];
};


export type QueryLanguageArgs = {
  id: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  iso6391?: InputMaybe<Scalars['String']>;
  iso6391_Icontains?: InputMaybe<Scalars['String']>;
  iso6391_Istartswith?: InputMaybe<Scalars['String']>;
  iso6392?: InputMaybe<Scalars['String']>;
  iso6392_Icontains?: InputMaybe<Scalars['String']>;
  iso6392_Istartswith?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  nativeName?: InputMaybe<Scalars['String']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRegionalBlocArgs = {
  id: Scalars['ID'];
};


export type QueryRegionalBlocsArgs = {
  acronym?: InputMaybe<Scalars['String']>;
  acronym_Icontains?: InputMaybe<Scalars['String']>;
  acronym_Istartswith?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type RegionalBlocNode = Node & {
  __typename?: 'RegionalBlocNode';
  acronym?: Maybe<Scalars['String']>;
  active: Scalars['Boolean'];
  countrySet: CountryNodeConnection;
  dateAdded?: Maybe<Scalars['DateTime']>;
  dateModified: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  otherAcronyms: Array<Scalars['String']>;
  otherNames: Array<Scalars['String']>;
};


export type RegionalBlocNodeCountrySetArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  alpha2Code?: InputMaybe<Scalars['String']>;
  alpha2Code_Icontains?: InputMaybe<Scalars['String']>;
  alpha2Code_Istartswith?: InputMaybe<Scalars['String']>;
  alpha3Code?: InputMaybe<Scalars['String']>;
  alpha3Code_Icontains?: InputMaybe<Scalars['String']>;
  alpha3Code_Istartswith?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['Int']>;
  area_Gte?: InputMaybe<Scalars['Int']>;
  area_Lte?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  capital?: InputMaybe<Scalars['String']>;
  capital_Icontains?: InputMaybe<Scalars['String']>;
  capital_Istartswith?: InputMaybe<Scalars['String']>;
  cioc?: InputMaybe<Scalars['String']>;
  cioc_Icontains?: InputMaybe<Scalars['String']>;
  cioc_Istartswith?: InputMaybe<Scalars['String']>;
  demonym?: InputMaybe<Scalars['String']>;
  demonym_Icontains?: InputMaybe<Scalars['String']>;
  demonym_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  gini?: InputMaybe<Scalars['Float']>;
  gini_Gte?: InputMaybe<Scalars['Float']>;
  gini_Lte?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  nativeName?: InputMaybe<Scalars['String']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']>;
  numericCode?: InputMaybe<Scalars['String']>;
  numericCode_Icontains?: InputMaybe<Scalars['String']>;
  numericCode_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  population?: InputMaybe<Scalars['Int']>;
  population_Gte?: InputMaybe<Scalars['Int']>;
  population_Lte?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
  region_Icontains?: InputMaybe<Scalars['String']>;
  region_Istartswith?: InputMaybe<Scalars['String']>;
  subregion?: InputMaybe<Scalars['String']>;
  subregion_Icontains?: InputMaybe<Scalars['String']>;
  subregion_Istartswith?: InputMaybe<Scalars['String']>;
};

export type RegionalBlocNodeConnection = {
  __typename?: 'RegionalBlocNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RegionalBlocNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `RegionalBlocNode` and its cursor. */
export type RegionalBlocNodeEdge = {
  __typename?: 'RegionalBlocNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<RegionalBlocNode>;
};

export type GetCountriesQueryVariables = Exact<{
  count: Scalars['Int'];
}>;


export type GetCountriesQuery = { __typename?: 'Query', countries?: { __typename?: 'CountryNodeConnection', edges: Array<{ __typename?: 'CountryNodeEdge', node?: { __typename?: 'CountryNode', name: string, flag?: string | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type GetSpecificCountryQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetSpecificCountryQuery = { __typename?: 'Query', countries?: { __typename?: 'CountryNodeConnection', edges: Array<{ __typename?: 'CountryNodeEdge', node?: { __typename?: 'CountryNode', name: string, capital?: string | null | undefined, region?: string | null | undefined, population?: number | null | undefined, timezones?: Array<string> | null | undefined, nativeName?: string | null | undefined, flag?: string | null | undefined, currencies: { __typename?: 'CurrencyNodeConnection', edges: Array<{ __typename?: 'CurrencyNodeEdge', node?: { __typename?: 'CurrencyNode', name?: string | null | undefined, code?: string | null | undefined, symbol?: string | null | undefined } | null | undefined } | null | undefined> } } | null | undefined } | null | undefined> } | null | undefined };


export const GetCountriesDocument = gql`
    query GetCountries($count: Int!) {
  countries(first: $count) {
    edges {
      node {
        name
        flag
      }
    }
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetSpecificCountryDocument = gql`
    query GetSpecificCountry($name: String!) {
  countries(name: $name) {
    edges {
      node {
        name
        capital
        region
        population
        timezones
        nativeName
        currencies {
          edges {
            node {
              name
              code
              symbol
            }
          }
        }
        flag
      }
    }
  }
}
    `;

/**
 * __useGetSpecificCountryQuery__
 *
 * To run a query within a React component, call `useGetSpecificCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecificCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecificCountryQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetSpecificCountryQuery(baseOptions: Apollo.QueryHookOptions<GetSpecificCountryQuery, GetSpecificCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecificCountryQuery, GetSpecificCountryQueryVariables>(GetSpecificCountryDocument, options);
      }
export function useGetSpecificCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecificCountryQuery, GetSpecificCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecificCountryQuery, GetSpecificCountryQueryVariables>(GetSpecificCountryDocument, options);
        }
export type GetSpecificCountryQueryHookResult = ReturnType<typeof useGetSpecificCountryQuery>;
export type GetSpecificCountryLazyQueryHookResult = ReturnType<typeof useGetSpecificCountryLazyQuery>;
export type GetSpecificCountryQueryResult = Apollo.QueryResult<GetSpecificCountryQuery, GetSpecificCountryQueryVariables>;