import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  /** An object relationship */
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['String']>;
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
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
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
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
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
  user_id?: Maybe<Scalars['String']>;
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
  user_id?: Maybe<Order_By>;
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
  user_id?: Maybe<Scalars['String']>;
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
  user_id?: Maybe<Order_By>;
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
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
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
  Name = 'name',
  /** column name */
  UserId = 'user_id'
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
  user_id?: Maybe<Scalars['String']>;
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
  Name = 'name',
  /** column name */
  UserId = 'user_id'
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
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "company" */
  insert_company?: Maybe<Company_Mutation_Response>;
  /** insert a single row into the table: "company" */
  insert_company_one?: Maybe<Company>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update data of the table: "company" */
  update_company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "company" */
  update_company_by_pk?: Maybe<Company>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
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
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  name: Scalars['String'];
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
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: Maybe<User_Role_On_Conflict>;
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


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _set?: Maybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _set?: Maybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
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
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
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


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Role_By_PkArgs = {
  name: Scalars['String'];
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
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
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


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Role_By_PkArgs = {
  name: Scalars['String'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  companies: Array<Company>;
  /** An aggregated array relationship */
  companies_aggregate: Company_Aggregate;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  role: User_Role_Enum;
  /** An object relationship */
  user_role: User_Role;
};


/** columns and relationships of "user" */
export type UserCompaniesArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_Order_By>>;
  where?: Maybe<Company_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  companies?: Maybe<Company_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<User_Role_Enum_Comparison_Exp>;
  user_role?: Maybe<User_Role_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  companies?: Maybe<Company_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<User_Role_Enum>;
  user_role?: Maybe<User_Role_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  companies_aggregate?: Maybe<Company_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  user_role?: Maybe<User_Role_Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  description: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "user_role" */
export type User_RoleUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** columns and relationships of "user_role" */
export type User_RoleUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_role" */
export type User_Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Role_Max_Order_By>;
  min?: Maybe<User_Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_role" */
export type User_Role_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Role_Bool_Exp>>>;
  _not?: Maybe<User_Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Role_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  users?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint */
  UserRolePkey = 'user_role_pkey'
}

export enum User_Role_Enum {
  /** mengatur semua data company */
  Admin = 'admin',
  /** mengatur data company pribadi */
  User = 'user'
}

/** expression to compare columns of type user_role_enum. All fields are combined with logical 'AND'. */
export type User_Role_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Role_Enum>;
  _in?: Maybe<Array<User_Role_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Role_Enum>;
  _nin?: Maybe<Array<User_Role_Enum>>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_role" */
export type User_Role_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_role" */
export type User_Role_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Role>;
};

/** input type for inserting object relation for remote table "user_role" */
export type User_Role_Obj_Rel_Insert_Input = {
  data: User_Role_Insert_Input;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

/** on conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns: Array<User_Role_Update_Column>;
  where?: Maybe<User_Role_Bool_Exp>;
};

/** ordering options when selecting data from "user_role" */
export type User_Role_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: "user_role" */
export type User_Role_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<User_Role_Enum>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'name' | 'role'>
  )> }
);


export const GetUserInfoDocument = gql`
    query getUserInfo {
  user {
    id
    name
    role
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, baseOptions);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, baseOptions);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;