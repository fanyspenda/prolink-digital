import { DashboardMenu } from "components/dashboardMenu";
import { Typography, List, Avatar, Button } from "antd";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { userContext } from "context/userContext";
import {
	useGetCompaniesQuery,
	useDeleteCompanyByPkMutation,
} from "graphqlSchema/types";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { LoadingErrorHandler } from "components/loadingErrorHandler";
import Head from "next/head";

const { Title, Paragraph } = Typography;

const Company = () => {
	const router = useRouter();
	const {
		user: { id, role },
	} = useContext(userContext);
	const { data, loading, error, refetch } = useGetCompaniesQuery({
		fetchPolicy: "network-only",
		context: hasuraHeader(id, role),
	});
	const [
		deleteCompany,
		{ loading: dLoading, error: dError },
	] = useDeleteCompanyByPkMutation({
		context: hasuraHeader(id, role),
		onCompleted: () => refetch(),
	});

	if (loading || error)
		return (
			<LoadingErrorHandler
				error={error}
				loading={loading}
				dashboardMenu={{
					menu: "industry",
					subMenu: "viewIndustry",
					userRole: role,
				}}
			/>
		);
	else
		return (
			<DashboardMenu
				menu="industry"
				subMenu="viewIndustry"
				userRole={role}
			>
				<Head>
					<title>List Industri</title>
				</Head>
				<Title>List Industri</Title>
				<Paragraph>Berikut daftar industri yang kamu kelola</Paragraph>
				{dLoading && <p>menghapus industri...</p>}
				{dError && <p>gagal menghapus: {dError.message}</p>}
				<List
					dataSource={data.company}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								avatar={
									<Avatar
										src={
											item.logo_url ||
											"/company/default.png"
										}
									/>
								}
								title={<a href="#">{item.name}</a>}
								description={item.description}
							/>
							<NextLink
								href="/dashboard/company/[companyEdit]"
								as={`/dashboard/company/${item.id}`}
							>
								<Button>Edit</Button>
							</NextLink>
							<Button
								onClick={() =>
									deleteCompany({
										variables: { companyId: item.id },
									})
								}
							>
								Delete
							</Button>
						</List.Item>
					)}
				/>
			</DashboardMenu>
		);
};

export default Company;
