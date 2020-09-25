import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category';
  /** An array relationship */
  companies: Array<Company>;
  /** An aggregated array relationship */
  companies_aggregate: Company_Aggregate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "category" */
export type CategoryCompaniesArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};


/** columns and relationships of "category" */
export type CategoryCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  avg?: Maybe<Category_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
  stddev?: Maybe<Category_Stddev_Fields>;
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>;
  sum?: Maybe<Category_Sum_Fields>;
  var_pop?: Maybe<Category_Var_Pop_Fields>;
  var_samp?: Maybe<Category_Var_Samp_Fields>;
  variance?: Maybe<Category_Variance_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "category" */
export type Category_Aggregate_Order_By = {
  avg?: Maybe<Category_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Category_Max_Order_By>;
  min?: Maybe<Category_Min_Order_By>;
  stddev?: Maybe<Category_Stddev_Order_By>;
  stddev_pop?: Maybe<Category_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Category_Stddev_Samp_Order_By>;
  sum?: Maybe<Category_Sum_Order_By>;
  var_pop?: Maybe<Category_Var_Pop_Order_By>;
  var_samp?: Maybe<Category_Var_Samp_Order_By>;
  variance?: Maybe<Category_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "category" */
export type Category_Arr_Rel_Insert_Input = {
  data: Array<Category_Insert_Input>;
  on_conflict?: Maybe<Category_On_Conflict>;
};

/** aggregate avg on columns */
export type Category_Avg_Fields = {
  __typename?: 'category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "category" */
export type Category_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Category_Bool_Exp>>>;
  _not?: Maybe<Category_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Category_Bool_Exp>>>;
  companies?: Maybe<Company_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint */
  CategoryPkey = 'category_pkey'
}

/** input type for incrementing integer column in table "category" */
export type Category_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  companies?: Maybe<Company_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "category" */
export type Category_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "category" */
export type Category_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  on_conflict?: Maybe<Category_On_Conflict>;
};

/** on conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns: Array<Category_Update_Column>;
  where?: Maybe<Category_Bool_Exp>;
};

/** ordering options when selecting data from "category" */
export type Category_Order_By = {
  companies_aggregate?: Maybe<Company_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "category" */
export type Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
  __typename?: 'category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "category" */
export type Category_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
  __typename?: 'category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "category" */
export type Category_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
  __typename?: 'category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "category" */
export type Category_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Category_Sum_Fields = {
  __typename?: 'category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "category" */
export type Category_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
  __typename?: 'category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "category" */
export type Category_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
  __typename?: 'category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "category" */
export type Category_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Category_Variance_Fields = {
  __typename?: 'category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "category" */
export type Category_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "company" */
export type Company = {
  __typename?: 'company';
  address: Scalars['String'];
  /** An object relationship */
  category: Category;
  category_id: Scalars['Int'];
  contact: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo_url?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** aggregated selection of "company" */
export type Company_Aggregate = {
  __typename?: 'company_aggregate';
  aggregate?: Maybe<Company_Aggregate_Fields>;
  nodes: Array<Company>;
};

/** aggregate fields of "company" */
export type Company_Aggregate_Fields = {
  __typename?: 'company_aggregate_fields';
  avg?: Maybe<Company_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Company_Max_Fields>;
  min?: Maybe<Company_Min_Fields>;
  stddev?: Maybe<Company_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Sum_Fields>;
  var_pop?: Maybe<Company_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Var_Samp_Fields>;
  variance?: Maybe<Company_Variance_Fields>;
};


/** aggregate fields of "company" */
export type Company_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Company_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "company" */
export type Company_Aggregate_Order_By = {
  avg?: Maybe<Company_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Company_Max_Order_By>;
  min?: Maybe<Company_Min_Order_By>;
  stddev?: Maybe<Company_Stddev_Order_By>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Order_By>;
  sum?: Maybe<Company_Sum_Order_By>;
  var_pop?: Maybe<Company_Var_Pop_Order_By>;
  var_samp?: Maybe<Company_Var_Samp_Order_By>;
  variance?: Maybe<Company_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "company" */
export type Company_Arr_Rel_Insert_Input = {
  data: Array<Company_Insert_Input>;
  on_conflict?: Maybe<Company_On_Conflict>;
};

/** aggregate avg on columns */
export type Company_Avg_Fields = {
  __typename?: 'company_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "company" */
export type Company_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company". All fields are combined with a logical 'AND'. */
export type Company_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Company_Bool_Exp>>>;
  _not?: Maybe<Company_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Company_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  category?: Maybe<Category_Bool_Exp>;
  category_id?: Maybe<Int_Comparison_Exp>;
  contact?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  logo_url?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "company" */
export enum Company_Constraint {
  /** unique or primary key constraint */
  CompanyPkey = 'company_pkey'
}

/** input type for incrementing integer column in table "company" */
export type Company_Inc_Input = {
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "company" */
export type Company_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  category?: Maybe<Category_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['Int']>;
  contact?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Company_Max_Fields = {
  __typename?: 'company_max_fields';
  address?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  contact?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "company" */
export type Company_Max_Order_By = {
  address?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  contact?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logo_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Company_Min_Fields = {
  __typename?: 'company_min_fields';
  address?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  contact?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "company" */
export type Company_Min_Order_By = {
  address?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  contact?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logo_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "company" */
export type Company_Mutation_Response = {
  __typename?: 'company_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Company>;
};

/** input type for inserting object relation for remote table "company" */
export type Company_Obj_Rel_Insert_Input = {
  data: Company_Insert_Input;
  on_conflict?: Maybe<Company_On_Conflict>;
};

/** on conflict condition type for table "company" */
export type Company_On_Conflict = {
  constraint: Company_Constraint;
  update_columns: Array<Company_Update_Column>;
  where?: Maybe<Company_Bool_Exp>;
};

/** ordering options when selecting data from "company" */
export type Company_Order_By = {
  address?: Maybe<Order_By>;
  category?: Maybe<Category_Order_By>;
  category_id?: Maybe<Order_By>;
  contact?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logo_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "company" */
export type Company_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "company" */
export enum Company_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Contact = 'contact',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "company" */
export type Company_Set_Input = {
  address?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  contact?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Company_Stddev_Fields = {
  __typename?: 'company_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "company" */
export type Company_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_Stddev_Pop_Fields = {
  __typename?: 'company_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "company" */
export type Company_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_Stddev_Samp_Fields = {
  __typename?: 'company_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "company" */
export type Company_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Company_Sum_Fields = {
  __typename?: 'company_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "company" */
export type Company_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "company" */
export enum Company_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Contact = 'contact',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Company_Var_Pop_Fields = {
  __typename?: 'company_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "company" */
export type Company_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_Var_Samp_Fields = {
  __typename?: 'company_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "company" */
export type Company_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_Variance_Fields = {
  __typename?: 'company_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "company" */
export type Company_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "company" */
  delete_company?: Maybe<Company_Mutation_Response>;
  /** delete single row from the table: "company" */
  delete_company_by_pk?: Maybe<Company>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "company" */
  insert_company?: Maybe<Company_Mutation_Response>;
  /** insert a single row into the table: "company" */
  insert_company_one?: Maybe<Company>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update data of the table: "company" */
  update_company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "company" */
  update_company_by_pk?: Maybe<Company>;
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CompanyArgs = {
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: Maybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: Maybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompanyArgs = {
  objects: Array<Company_Insert_Input>;
  on_conflict?: Maybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_OneArgs = {
  object: Company_Insert_Input;
  on_conflict?: Maybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _inc?: Maybe<Category_Inc_Input>;
  _set?: Maybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _inc?: Maybe<Category_Inc_Input>;
  _set?: Maybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CompanyArgs = {
  _inc?: Maybe<Company_Inc_Input>;
  _set?: Maybe<Company_Set_Input>;
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_By_PkArgs = {
  _inc?: Maybe<Company_Inc_Input>;
  _set?: Maybe<Company_Set_Input>;
  pk_columns: Company_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
};


/** query root */
export type Query_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


/** query root */
export type Query_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


/** query root */
export type Query_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCompanyArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};


/** query root */
export type Query_RootCompany_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};


/** query root */
export type Query_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
};


/** subscription root */
export type Subscription_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCompanyArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCompany_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'query_root' }
  & { category: Array<(
    { __typename?: 'category' }
    & Pick<Category, 'id' | 'name' | 'description'>
  )> }
);

export type GetCompaniesByCategoryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCompaniesByCategoryQuery = (
  { __typename?: 'query_root' }
  & { category_by_pk?: Maybe<(
    { __typename?: 'category' }
    & Pick<Category, 'name'>
    & { companies: Array<(
      { __typename?: 'company' }
      & Pick<Company, 'name' | 'description' | 'contact' | 'address' | 'logo_url'>
      & { category: (
        { __typename?: 'category' }
        & Pick<Category, 'name'>
      ) }
    )> }
  )> }
);

export type LandingPageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPageDataQuery = (
  { __typename?: 'query_root' }
  & { category: Array<(
    { __typename?: 'category' }
    & Pick<Category, 'id' | 'name'>
  )>, company: Array<(
    { __typename?: 'company' }
    & Pick<Company, 'name' | 'description' | 'contact' | 'address' | 'logo_url'>
    & { category: (
      { __typename?: 'category' }
      & Pick<Category, 'name'>
    ) }
  )> }
);

export type SearchCompanyByNameQueryVariables = Exact<{
  searchKey: Scalars['String'];
}>;


export type SearchCompanyByNameQuery = (
  { __typename?: 'query_root' }
  & { company: Array<(
    { __typename?: 'company' }
    & Pick<Company, 'name' | 'description' | 'contact' | 'address' | 'logo_url'>
    & { category: (
      { __typename?: 'category' }
      & Pick<Category, 'name'>
    ) }
  )> }
);


export const CategoriesDocument = gql`
    query categories {
  category {
    id
    name
    description
  }
}
    `;
export type CategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoriesQuery, CategoriesQueryVariables>, 'query'>;

    export const CategoriesComponent = (props: CategoriesComponentProps) => (
      <ApolloReactComponents.Query<CategoriesQuery, CategoriesQueryVariables> query={CategoriesDocument} {...props} />
    );
    
export type CategoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CategoriesQuery, CategoriesQueryVariables>
    } & TChildProps;
export function withCategories<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoriesQuery,
  CategoriesQueryVariables,
  CategoriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CategoriesQuery, CategoriesQueryVariables, CategoriesProps<TChildProps, TDataName>>(CategoriesDocument, {
      alias: 'categories',
      ...operationOptions
    });
};
export type CategoriesQueryResult = ApolloReactCommon.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const GetCompaniesByCategoryDocument = gql`
    query getCompaniesByCategory($id: Int!) {
  category_by_pk(id: $id) {
    name
    companies {
      name
      description
      contact
      address
      logo_url
      category {
        name
      }
    }
  }
}
    `;
export type GetCompaniesByCategoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCompaniesByCategoryQuery, GetCompaniesByCategoryQueryVariables>, 'query'> & ({ variables: GetCompaniesByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCompaniesByCategoryComponent = (props: GetCompaniesByCategoryComponentProps) => (
      <ApolloReactComponents.Query<GetCompaniesByCategoryQuery, GetCompaniesByCategoryQueryVariables> query={GetCompaniesByCategoryDocument} {...props} />
    );
    
export type GetCompaniesByCategoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCompaniesByCategoryQuery, GetCompaniesByCategoryQueryVariables>
    } & TChildProps;
export function withGetCompaniesByCategory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCompaniesByCategoryQuery,
  GetCompaniesByCategoryQueryVariables,
  GetCompaniesByCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCompaniesByCategoryQuery, GetCompaniesByCategoryQueryVariables, GetCompaniesByCategoryProps<TChildProps, TDataName>>(GetCompaniesByCategoryDocument, {
      alias: 'getCompaniesByCategory',
      ...operationOptions
    });
};
export type GetCompaniesByCategoryQueryResult = ApolloReactCommon.QueryResult<GetCompaniesByCategoryQuery, GetCompaniesByCategoryQueryVariables>;
export const LandingPageDataDocument = gql`
    query landingPageData {
  category {
    id
    name
  }
  company(where: {name: {_ilike: "%stu%"}}) {
    name
    description
    contact
    address
    logo_url
    category {
      name
    }
  }
}
    `;
export type LandingPageDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LandingPageDataQuery, LandingPageDataQueryVariables>, 'query'>;

    export const LandingPageDataComponent = (props: LandingPageDataComponentProps) => (
      <ApolloReactComponents.Query<LandingPageDataQuery, LandingPageDataQueryVariables> query={LandingPageDataDocument} {...props} />
    );
    
export type LandingPageDataProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<LandingPageDataQuery, LandingPageDataQueryVariables>
    } & TChildProps;
export function withLandingPageData<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LandingPageDataQuery,
  LandingPageDataQueryVariables,
  LandingPageDataProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, LandingPageDataQuery, LandingPageDataQueryVariables, LandingPageDataProps<TChildProps, TDataName>>(LandingPageDataDocument, {
      alias: 'landingPageData',
      ...operationOptions
    });
};
export type LandingPageDataQueryResult = ApolloReactCommon.QueryResult<LandingPageDataQuery, LandingPageDataQueryVariables>;
export const SearchCompanyByNameDocument = gql`
    query searchCompanyByName($searchKey: String!) {
  company(where: {name: {_ilike: $searchKey}}) {
    name
    description
    contact
    address
    logo_url
    category {
      name
    }
  }
}
    `;
export type SearchCompanyByNameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchCompanyByNameQuery, SearchCompanyByNameQueryVariables>, 'query'> & ({ variables: SearchCompanyByNameQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SearchCompanyByNameComponent = (props: SearchCompanyByNameComponentProps) => (
      <ApolloReactComponents.Query<SearchCompanyByNameQuery, SearchCompanyByNameQueryVariables> query={SearchCompanyByNameDocument} {...props} />
    );
    
export type SearchCompanyByNameProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SearchCompanyByNameQuery, SearchCompanyByNameQueryVariables>
    } & TChildProps;
export function withSearchCompanyByName<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SearchCompanyByNameQuery,
  SearchCompanyByNameQueryVariables,
  SearchCompanyByNameProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SearchCompanyByNameQuery, SearchCompanyByNameQueryVariables, SearchCompanyByNameProps<TChildProps, TDataName>>(SearchCompanyByNameDocument, {
      alias: 'searchCompanyByName',
      ...operationOptions
    });
};
export type SearchCompanyByNameQueryResult = ApolloReactCommon.QueryResult<SearchCompanyByNameQuery, SearchCompanyByNameQueryVariables>;