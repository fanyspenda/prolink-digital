import { useQuery, gql } from "@apollo/client";
import { ListRenderer } from "components/customList";
import { Layout } from "antd";
import styles from "styles/Search.module.css";
import FormRenderer from "components/form";
import {
	SearchCompanyByNameDocument,
	SearchCompanyByNameQuery,
} from "graphqlSchema/types";

export const getServerSideProps = async ({ params }) => {
	return {
		props: {
			searchKey: params.search as string,
		},
	};
};

const Search = ({ searchKey }) => {
	const { loading, data, error } = useQuery<SearchCompanyByNameQuery>(
		SearchCompanyByNameDocument,
		{
			variables: {
				searchKey: `%${searchKey}%`,
			},
		}
	);

	error && <p>{error.message}</p>;
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
					{ListRenderer(data.company, data.company.length, searchKey)}
				</Layout>
			</>
		)
	);
};

export default Search;
