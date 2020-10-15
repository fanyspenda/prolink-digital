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
import {
	TeamOutlined,
	CheckCircleOutlined,
	ExclamationCircleOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const COLORS = ["#FF8A5F", "#5AA9E2", "#F4DB74", "#ABD87D", "#FF9EFF"];

type interestedViewerType = {
	name: string;
	value: number;
};

const dataInterestedViewer = [
	{
		name: "Pengunjung Tidak Tertarik",
		value: 72,
	},
	{
		name: "Pengunjung Tertarik",
		value: 92,
	},
];

const dataIndustryAddress = [
	{
		name: "Kec. Mayangan",
		value: 18,
	},
	{
		name: "Kec. Kanigaran",
		value: 8,
	},
	{
		name: "Kec. Kademangan",
		value: 10,
	},
	{
		name: "Kec. Kedopok",
		value: 7,
	},
	{
		name: "Kec. Wonoasih",
		value: 3,
	},
];

const dashboardUser = (name: string, data: interestedViewerType[]) => (
	<Layout className="flex flex-row justify-start items-start">
		{/* */}
		<Layout className="flex flex-col mr-5" style={{ flex: 2 }}>
			<div className="bg-white rounded-md p-10">
				<Title>Selamat Datang!</Title>
				<Paragraph>
					Selamat datang di halaman <i>dashboard</i>, {name}
				</Paragraph>
			</div>
			<Layout className="flex flex-row  mt-5">
				<Layout className="bg-white rounded-md p-10 mr-5 flex flex-row justify-start items-center">
					<TeamOutlined
						className="text-5xl mr-12"
						style={{ color: "#F3DB6D" }}
					/>
					<div>
						<Text className="font-thin">
							Jumlah Industri Dimiliki
						</Text>{" "}
						<br />
						<Text className="text-3xl font-semibold">6</Text>
					</div>
				</Layout>
				<Layout className="bg-white rounded-md p-10 flex flex-row justify-start items-center">
					<CheckCircleOutlined
						className="text-5xl mr-12"
						style={{ color: "#5AA9E2" }}
					/>
					<div>
						<Text className="font-thin">
							Jumlah Industri Divalidasi
						</Text>{" "}
						<br />
						<Text className="text-3xl font-semibold">6</Text>
					</div>
				</Layout>
			</Layout>
		</Layout>

		<Layout className=" bg-white rounded-md p-10 ml-1" style={{ flex: 1 }}>
			<Title level={3}>Diagram Pengunjung</Title>

			<PieChart width={420} height={226}>
				<Tooltip />
				<Legend
					verticalAlign="middle"
					layout="vertical"
					align="right"
				/>
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="20%"
					innerRadius={50}
				>
					{data.map((_, index) => (
						<Cell fill={COLORS[index]} />
					))}
				</Pie>
			</PieChart>
		</Layout>
	</Layout>
);

const dashboardAdmin = (name: string, data: interestedViewerType[]) => (
	<Layout className="flex flex-row justify-start items-start">
		{/* */}
		<Layout className="flex flex-col mr-5" style={{ flex: 2 }}>
			<div className="bg-white rounded-md p-10">
				<Title>Selamat Datang!</Title>
				<Paragraph>
					Selamat datang di halaman <i>dashboard</i>, Admin {name}
				</Paragraph>
			</div>
			<Layout className="flex flex-row mt-5 flex-no-wrap">
				<Layout className="bg-white rounded-md p-10 mr-5 flex flex-row justify-start items-center">
					<TeamOutlined
						className="text-5xl mr-12"
						style={{ color: "#F3DB6D" }}
					/>
					<div>
						<Text className="font-thin">
							Jumlah Industri Terdaftar
						</Text>{" "}
						<br />
						<Text className="text-3xl font-semibold">46</Text>
					</div>
				</Layout>
				<Layout className="bg-white rounded-md p-10 mr-5 flex flex-row justify-start items-center">
					<ExclamationCircleOutlined
						className="text-5xl mr-12"
						style={{ color: "#ABD87D" }}
					/>
					<div>
						<Text className="font-thin">
							Jumlah Industri Menunggu Validasi
						</Text>{" "}
						<br />
						<Text className="text-3xl font-semibold">20</Text>
					</div>
				</Layout>
				<Layout className="bg-white rounded-md p-10 flex flex-row justify-start items-center">
					<CheckCircleOutlined
						className="text-5xl mr-12"
						style={{ color: "#5AA9E2" }}
					/>
					<div>
						<Text className="font-thin">
							Jumlah Industri Divalidasi
						</Text>{" "}
						<br />
						<Text className="text-3xl font-semibold">26</Text>
					</div>
				</Layout>
			</Layout>
		</Layout>

		<Layout className=" bg-white rounded-md p-10 ml-1" style={{ flex: 1 }}>
			<Title level={3}>Diagram Lokasi Industri</Title>

			<PieChart width={460} height={247}>
				<Tooltip />
				<Legend
					verticalAlign="middle"
					layout="vertical"
					align="right"
				/>
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="20%"
					innerRadius={50}
				>
					{data.map((_, index) => (
						<Cell fill={COLORS[index]} />
					))}
				</Pie>
			</PieChart>
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
					: dashboardAdmin(data.user[0].name, dataIndustryAddress)}
			</DashboardMenu>
		);
};

export default withAuthenticationRequired(Dashboard);
