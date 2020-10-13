import { DashboardMenu } from "components/dashboardMenu";
import { Typography } from "antd";
import { useContext, useEffect } from "react";
import { userContext } from "context/userContext";
import { useRouter } from "next/router";

const { Title } = Typography;

const UpdateProfile = () => {
	const {
		user: { role },
	} = useContext(userContext);
	const router = useRouter();

	useEffect(() => {
		if (role !== "admin") router.replace("/dashboard");
	}, [role, router]);

	if (role != "admin") return <p>unauthorized</p>;
	else
		return (
			<DashboardMenu menu="profile" subMenu="viewUser" userRole="admin">
				<Title>This is User List Page</Title>
			</DashboardMenu>
		);
};

export default UpdateProfile;
