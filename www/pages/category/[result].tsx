import React from "react";
import { useQuery, gql } from "@apollo/client";
import { categoryType } from "types/category";
import { List, Space } from "antd";
import { RiPhoneFill, RiBuilding2Fill } from "react-icons/ri";
// import styles from "styles/Result.module.css";

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

	const AddressRenderer = (text: string) => {
		return (
			<Space>
				<RiBuilding2Fill />
				{text}
			</Space>
		);
	};

	const ContactRenderer = (text: string) => {
		return (
			<Space>
				<RiPhoneFill />
				{text}
			</Space>
		);
	};

	return (
		!loading && (
			<div style={{ margin: "10px 30px 0px 30px" }}>
				<div
					style={{
						padding: "10px 0px 0px 0px",
					}}
				>
					<h1>Anda Mencari Kategori "{data.category_by_pk.name}"</h1>
				</div>

				<p
					style={{
						fontWeight: "lighter",
						marginLeft: "20px",
						marginTop: "0px",
					}}
				>
					menampilkan {data.category_by_pk.companies.length} hasil :
				</p>
				<List
					size="large"
					itemLayout="vertical"
					dataSource={data.category_by_pk.companies}
					renderItem={(company) => (
						<List.Item
							style={{ background: "white" }}
							actions={[
								AddressRenderer(company.address),
								ContactRenderer(company.contact),
							]}
						>
							<List.Item.Meta
								title={
									<b style={{ fontSize: "20px" }}>
										{company.name}
									</b>
								}
								description={data.category_by_pk.name}
							/>
							{company.description}
						</List.Item>
					)}
				></List>
			</div>
		)
	);
};

export default Result;
