import Head from "next/head";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import { DashboardMenu } from "components/dashboardMenu";
import { Layout, Typography } from "antd";
import { useContext } from "react";
import { useGetUserInfoQuery } from "graphqlSchema/types";
import { userContext } from "context/userContext";
import { hasuraHeader } from "environtment";
import { LoadingErrorHandler } from "components/loadingErrorHandler";

const { Title } = Typography;

const Dashboard = () => {
	const contextUser = useContext(userContext);
	const { user: auth0User } = useAuth0();
	const { loading, data, error } = useGetUserInfoQuery({
		fetchPolicy: "network-only",
		context: hasuraHeader(auth0User.sub, "user"),
		onCompleted: ({ user }) => {
			contextUser.setter({ id: user[0].id, role: user[0].role });
		},
	});

	if (loading || error)
		return <LoadingErrorHandler loading={loading} error={error} />;
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
