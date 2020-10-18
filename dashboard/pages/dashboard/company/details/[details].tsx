import { Layout, Typography, Avatar } from "antd";
import { PhoneOutlined, BankOutlined } from "@ant-design/icons";
import Head from "next/head";
import { DashboardMenu } from "components/dashboardMenu";
import { useContext, useEffect } from "react";
import { userContext } from "context/userContext";
import { LoadingErrorHandler } from "components/loadingErrorHandler";
import { useGetCompanyByPkQuery } from "graphqlSchema/types";
import { hasuraHeader } from "environtment";

const { Title, Paragraph, Text } = Typography;

export const getServerSideProps = async ({ params }) => {
	return {
		props: {
			companyId: params.details,
		},
	};
};

const DetailCompany = ({ companyId }) => {
	const {
		user: { id, role },
	} = useContext(userContext);

	const { loading, data, error } = useGetCompanyByPkQuery({
		context: hasuraHeader(id, role),
		variables: {
			id: companyId,
		},
	});

	if (loading || error) {
		return <LoadingErrorHandler error={error} loading={loading} />;
	} else
		return (
			<DashboardMenu userRole={role}>
				<Head>
					<title>Detail {data.company_by_pk.name}</title>
				</Head>
				<Layout className="bg-white p-10 rounded-lg flex flex-row flex-no-wrap items-center">
					<div className="mr-10">
						<Avatar
							size={200}
							src={data.company_by_pk.logo_url}
							className="ml-auto mr-auto border-8 border-gray-600"
							style={{
								flex: 1,
							}}
						/>
					</div>
					<div
						style={{ flex: 4 }}
						className="flex flex-col justify-around"
					>
						<div>
							<Title>{data.company_by_pk.name}</Title>
							<Text className="text-gray-600">
								{data.company_by_pk.category.name}
							</Text>
						</div>
						<br />
						<div>
							<text className="pt-20 font-semibold">
								Deskripsi
							</text>
							<Paragraph>
								{data.company_by_pk.description}
							</Paragraph>
						</div>
						<div>
							<div className="flex flex-row">
								<PhoneOutlined className="mr-3" />
								{data.company_by_pk.contact}
							</div>
							<div className="flex flex-row">
								<BankOutlined className="mr-3" />
								{data.company_by_pk.address}
							</div>
						</div>
					</div>
				</Layout>
			</DashboardMenu>
		);
};

export default DetailCompany;
