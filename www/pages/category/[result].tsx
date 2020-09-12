import React from "react";
import { useQuery, gql } from "@apollo/client";
import { categoryType } from "types/category";
import FormRenderer from "components/form";
import { ListRenderer } from "components/customList";
import styles from "styles/Search.module.css";
import { Layout } from "antd";

type categoryByPKType = {
	category_by_pk: categoryType;
};

export const getServerSideProps = async ({ params }) => {
	return {
		props: {
			result: params.result as number,
		},
	};
};

const Q_GET_COMPANIES_BY_CATEGORY = gql`
	query getCompaniesByCategory($id: Int!) {
		category_by_pk(id: $id) {
			name
			companies {
				id
				name
				description
				address
				contact
				category {
					name
				}
			}
		}
	}
`;

const Result = ({ result }) => {
	const { data, loading } = useQuery<categoryByPKType>(
		Q_GET_COMPANIES_BY_CATEGORY,
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
