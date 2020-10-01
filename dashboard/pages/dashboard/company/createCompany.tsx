import { DashboardMenu } from "components/dashboardMenu";
import { Typography } from "antd";

const { Title } = Typography;

const CreateCompany = () => {
	return (
		<DashboardMenu menu="industry" subMenu="addIndustry">
			<Title>This is Create Company page</Title>
		</DashboardMenu>
	);
};

export default CreateCompany;
