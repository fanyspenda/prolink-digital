import { DashboardMenu } from "components/dashboardMenu";
import { Typography, List, Avatar, Button, Layout } from "antd";
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
				<Layout className="bg-white p-10 rounded-lg">
					<Title>List Industri</Title>
					<Paragraph>
						Berikut daftar industri yang kamu kelola
					</Paragraph>
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
									title={
										<text className="font-semibold">
											<NextLink
												href="/dashboard/company/details/[details]"
												as={`/dashboard/company/details/${item.id}`}
											>
												{item.name}
											</NextLink>
										</text>
									}
									description={item.description}
								/>
								<NextLink
									href="/dashboard/company/[companyEdit]"
									as={`/dashboard/company/${item.id}`}
								>
									<Button className="border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-white">
										Edit
									</Button>
								</NextLink>
								<Button
									className="border-red-400 text-red-400 font-semibold hover:bg-red-400 hover:text-white"
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
				</Layout>
			</DashboardMenu>
		);
};

export default Company;
