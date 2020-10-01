import { DashboardMenu } from "components/dashboardMenu";
import { Typography } from "antd";

const { Title } = Typography;

const UpdateProfile = () => {
	return (
		<DashboardMenu menu="profile" subMenu="updateProfile">
			<Title>This is Edit Profile Page</Title>
		</DashboardMenu>
	);
};

export default UpdateProfile;
