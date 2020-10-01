import Head from "next/head";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { DashboardMenu } from "components/dashboardMenu";

const Dashboard = () => {
	return (
		<DashboardMenu>
			<Head>
				<title>Dashboard</title>
			</Head>
		</DashboardMenu>
	);
};

export default withAuthenticationRequired(Dashboard);
