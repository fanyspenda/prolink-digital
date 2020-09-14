import React from "react";
import { useQuery, gql } from "@apollo/client";
import FormRenderer from "components/form";
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
				<Layout
					className={styles.container}
					style={{ marginBottom: "10px" }}
				>
					{FormRenderer()}
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
