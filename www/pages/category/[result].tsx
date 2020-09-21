import React from "react";
import { useQuery, gql } from "@apollo/client";
import SearchBarRenderer from "components/styledForm";
import { ListRenderer } from "components/customList";
import styles from "styles/Search.module.css";
import { Layout } from "antd";
import {
	GetCompaniesByCategoryDocument,
	GetCompaniesByCategoryQuery,
} from "graphqlSchema/types";

export const getServerSideProps = async ({ params }) => {
	return {
		props: {
			result: params.result as number,
		},
	};
};

const Result = ({ result }) => {
	const { data, loading } = useQuery<GetCompaniesByCategoryQuery>(
		GetCompaniesByCategoryDocument,
		{
			variables: {
				id: result,
			},
		}
	);

	return (
		!loading && (
			<>
				<Layout style={{ marginBottom: "90px", minHeight: "100%" }}>
					{SearchBarRenderer()}
				</Layout>
				<Layout className={styles.container}>
					{ListRenderer(
						data.category_by_pk.companies,
						data.category_by_pk.companies.length,
						data.category_by_pk.name
					)}
				</Layout>
			</>
		)
	);
};

export default Result;
