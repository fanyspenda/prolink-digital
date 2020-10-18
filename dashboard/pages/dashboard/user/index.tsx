import { DashboardMenu } from "components/dashboardMenu";
import { Typography, Layout, List, Avatar, Button, notification } from "antd";
import { useContext, useEffect } from "react";
import { userContext } from "context/userContext";
import { useRouter } from "next/router";
import {
	useGetUsersQuery,
	useUpdateUserRoleToAdminMutation,
} from "graphqlSchema/types";
import { hasuraHeader } from "environtment";
import { LoadingErrorHandler } from "components/loadingErrorHandler";
import { useAuth0 } from "@auth0/auth0-react";
import { UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ViewUsers = () => {
	const { user } = useContext(userContext);
	const { id, role } = user;
	const router = useRouter();

	const { loading, data, error, refetch } = useGetUsersQuery({
		context: hasuraHeader(id, role),
		fetchPolicy: "network-only",
	});

	const [
		updateRole,
		{ loading: mLoading, error: mError },
	] = useUpdateUserRoleToAdminMutation({
		context: hasuraHeader(id, role),
		onCompleted: () => {
			refetch();
			notification.open({
				message: "Sukses",
				description: "sukses menjadikan admin!",
				style: {
					border: "4px solid #66ff98",
					borderRadius: "10px",
				},
			});
		},
	});

	const handleButtonRoleClick = (userId: string) => {
		updateRole({
			variables: {
				userId,
			},
		});
	};

	useEffect(() => {
		if (role !== "admin") router.replace("/dashboard");
	}, [role, router]);

	if (loading || error) {
		return <LoadingErrorHandler loading={loading} error={error} />;
	} else if (role != "admin") return <p>unauthorized</p>;
	else
		return (
			<DashboardMenu menu="users" subMenu="viewUser" userRole="admin">
				<Layout className="bg-white p-10">
					<Title>Daftar Pengguna</Title>
					<List
						loading={loading || mLoading}
						dataSource={data.user}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									title={item.name}
									avatar={
										<Avatar
											className="bg-orange-400"
											size="large"
											icon={<UserOutlined />}
										/>
									}
									description={item.email}
								/>
								<Button
									onClick={() =>
										handleButtonRoleClick(item.id)
									}
									className="border-orange-400 text-orange-400 font-semibold hover:bg-orange-400 hover:text-white"
								>
									Jadikan Admin
								</Button>
							</List.Item>
						)}
					/>
				</Layout>
			</DashboardMenu>
		);
};

export default ViewUsers;
