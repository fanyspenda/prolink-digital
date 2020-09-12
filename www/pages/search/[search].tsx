import { useQuery, gql } from "@apollo/client";
import { companyType } from "types/company";
import { ListRenderer } from "components/customList";
import { Layout } from "antd";
import styles from "styles/Search.module.css";
import FormRenderer from "components/form";

type searchResultType = {
	company: companyType[];
};

export const getServerSideProps = async ({ params }) => {
	return {
		props: {
			searchKey: params.search as string,
		},
	};
};

const Q_GET_SEARCH_BY_NAME = gql`
	query searchCompanyByName($searchKey: String!) {
		company(where: { name: { _ilike: $searchKey } }) {
			name
			description
			contact
			address
			category {
				name
			}
		}
	}
`;

const Search = ({ searchKey }) => {
	const { loading, data, error } = useQuery<searchResultType>(
		Q_GET_SEARCH_BY_NAME,
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
