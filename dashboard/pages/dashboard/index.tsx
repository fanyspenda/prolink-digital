import Head from "next/head";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import { DashboardMenu } from "components/dashboardMenu";
import { Layout, Typography } from "antd";
import { useContext } from "react";
import { useGetUserInfoQuery } from "graphqlSchema/types";
import { userContext } from "context/userContext";
import { hasuraHeader } from "environtment";
import { LoadingErrorHandler } from "components/loadingErrorHandler";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const { Title, Paragraph } = Typography;

const COLORS = ["#0088FE", "#00C49F"];

type interestedViewerType = {
	name: string;
	value: number;
};

const dataInterestedViewer = [
	{
		name: "Pengunjung",
		value: 72,
	},
	{
		name: "Pengunjung Tertarik",
		value: 92,
	},
];

const dashboardUser = (name: string, data: interestedViewerType[]) => (
	<Layout className="flex flex-row justify-start items-start bg-red-500">
		{/* */}
		<Layout className="flex flex-col mr-1" style={{ flex: 2 }}>
			<div className="bg-white rounded-md p-5">
				<Title>Selamat Datang!</Title>
				<Paragraph>
					Selamat datang di halaman <i>dashboard</i>, {name}
				</Paragraph>
			</div>
			<Layout className="flex flex-row  mt-2">
				<Layout className="bg-white rounded-md p-5 mr-1">
					<Title level={4}>Jumlah Industri Dimiliki</Title>
				</Layout>
				<Layout className="bg-white rounded-md p-5 ml-1">
					<Title level={4}>Jumlah Industri Divalidasi</Title>
				</Layout>
			</Layout>
		</Layout>

		<Layout
			className=" bg-white rounded-md p-5 ml-1 text-center"
			style={{ flex: 1 }}
		>
			<Title level={3}>Diagram Pengunjung</Title>

			<PieChart width={500} height={300}>
				<Tooltip />
				<Legend verticalAlign="bottom" iconType="rect" />
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					innerRadius={30}
				>
					{data.map((_, index) => (
						<Cell fill={COLORS[index]} />
					))}
				</Pie>
			</PieChart>
		</Layout>
	</Layout>
);

const dashboardAdmin = (
	<Layout className="flex flex-row justify-start items-start bg-red-500">
		{/* */}
		<Layout className="flex flex-col mr-1" style={{ flex: 2 }}>
			<div className="bg-white rounded-md p-5">
				<Title>Selamat Datang!</Title>
				<Paragraph>
					Selamat datang di halaman <i>dashboard</i> Administrator,{" "}
					{/* {data.user[0].name} */}
				</Paragraph>
			</div>
			<Layout className="flex flex-row  mt-2">
				<Layout className="bg-white rounded-md p-5 mr-1">
					<Title level={4}>Jumlah Industri Dimiliki</Title>
				</Layout>
				<Layout className="bg-white rounded-md p-5 ml-1">
					<Title level={4}>Jumlah Industri Divalidasi</Title>
				</Layout>
			</Layout>
		</Layout>

		<Layout className=" bg-white rounded-md p-5 ml-1" style={{ flex: 1 }}>
			<Title level={3}>Diagram Interested Viewer</Title>
		</Layout>
	</Layout>
);

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
			<DashboardMenu userRole={data.user[0].role}>
				<Head>
					<title>Dashboard</title>
				</Head>
				{data.user[0].role == "user"
					? dashboardUser(data.user[0].name, dataInterestedViewer)
					: dashboardAdmin}
			</DashboardMenu>
		);
};

export default withAuthenticationRequired(Dashboard);
