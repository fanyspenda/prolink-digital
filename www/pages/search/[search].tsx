import { useQuery } from "@apollo/client";
import { ListRenderer } from "components/customList";
import { Layout, Col, Row, Typography } from "antd";
import SearchBarRenderer from "components/styledForm";
import styles from "styles/Search.module.css";
import {
	SearchCompanyByNameDocument,
	SearchCompanyByNameQuery,
} from "graphqlSchema/types";

export const getServerSideProps = async ({ params }) => {
	let search = params.search == "all" ? "" : params.search;

	return {
		props: {
			searchKey: search as string,
		},
	};
};

const Search = ({ searchKey }) => {
	const { Title, Text } = Typography;
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
				<Layout style={{ marginBottom: "90px", minHeight: "100%" }}>
					{SearchBarRenderer()}
				</Layout>
				<Layout className={styles.container}>
					{ListRenderer(
						data.company,
						data.company.length,
						searchKey == "" ? "semua kategori" : searchKey
					)}
				</Layout>
			</>
		)
	);
};

export default Search;
