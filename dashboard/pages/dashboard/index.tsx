import Head from "next/head";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import { DashboardMenu } from "components/dashboardMenu";
import { Layout, Typography } from "antd";
import { useGetUserInfoQuery } from "graphqlSchema/types";
import { hasuraHeader } from "environtment";
import { userContext } from "context/userContext";
import { useContext } from "react";

const { Title } = Typography;

const Dashboard = () => {
	const { user } = useAuth0();
	const contextUser = useContext(userContext);

	const { loading, data, error } = useGetUserInfoQuery({
		context: hasuraHeader(user.sub),
		onCompleted: ({ user }) => {
			contextUser.setter({ id: user[0].id, role: user[0].role });
		},
	});

	if (error)
		return (
			<DashboardMenu>
				<p>{error.message}</p>
			</DashboardMenu>
		);
	else if (loading)
		return (
			<DashboardMenu>
				<p>loading...</p>
			</DashboardMenu>
		);
	else
		return (
			<DashboardMenu>
				<Head>
					<title>Dashboard</title>
				</Head>
				<Layout>
					<Title>
						Selamat Datang di Halaman Dashboard, {data.user[0].name}
					</Title>
				</Layout>
			</DashboardMenu>
		);
};

export default withAuthenticationRequired(Dashboard);
