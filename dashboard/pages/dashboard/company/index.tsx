import { DashboardMenu } from "components/dashboardMenu";
import { Typography, List, Avatar, Button } from "antd";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { userContext } from "context/userContext";
import {
	useGetCompaniesQuery,
	Category,
	Company as CompanyTypes,
} from "graphqlSchema/types";
import { useRouter } from "next/router";
import NextLink from "next/link";

const { Title, Paragraph } = Typography;

const Company = () => {
	const router = useRouter();
	const userData = useContext(userContext);
	const { data, loading, error } = useGetCompaniesQuery({
		fetchPolicy: "network-only",
		context: hasuraHeader(userData.user.id, userData.user.role),
	});

	if (loading)
		return (
			<DashboardMenu menu="industry" subMenu="viewIndustry">
				<p>loading</p>
			</DashboardMenu>
		);
	else if (error)
		return (
			<DashboardMenu menu="industry" subMenu="viewIndustry">
				<p>{error.message}</p>
			</DashboardMenu>
		);
	else
		return (
			<DashboardMenu menu="industry" subMenu="viewIndustry">
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
									<a href="https://ant.design">{item.name}</a>
								}
								description={item.description}
							/>
							<NextLink
								href="/dashboard/company/[companyEdit]"
								as={`/dashboard/company/${item.id}`}
							>
								<Button>Edit</Button>
							</NextLink>
							<Button>Delete</Button>
						</List.Item>
					)}
				/>
			</DashboardMenu>
		);
};

export default Company;
