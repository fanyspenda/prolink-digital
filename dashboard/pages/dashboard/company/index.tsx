import { DashboardMenu } from "components/dashboardMenu";
import { Typography } from "antd";

const { Title } = Typography;

const Company = () => {
	return (
		<DashboardMenu menu="industry" subMenu="viewIndustry">
			<Title>This is Company List Page</Title>
		</DashboardMenu>
	);
};

export default Company;
