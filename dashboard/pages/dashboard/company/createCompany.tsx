import { DashboardMenu } from "components/dashboardMenu";
import { Typography, Form, Input, Select, Button } from "antd";
import {
	useGetCategoriesQuery,
	useInsertCompanyMutation,
} from "graphqlSchema/types";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { userContext } from "context/userContext";
import { v4 as uuidv4 } from "uuid";
import { CompanyForm } from "components/companyForm";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

type formValues = {
	name: string;
	address: string;
	contact: string;
	category: number;
	description: string;
};

const CreateCompany = () => {
	const userData = useContext(userContext);
	const { data, loading, error } = useGetCategoriesQuery({
		context: hasuraHeader(userData.user.id, userData.user.role),
	});
	const [
		insertCompany,
		{ loading: mLoading, data: mData, error: mError },
	] = useInsertCompanyMutation();
	const handleSubmit = (values: formValues) => {
		insertCompany({
			variables: {
				id: uuidv4(),
				userId: userData.user.id,
				name: values.name,
				description: values.description,
				address: values.address,
				contact: values.contact,
				categoryId: values.category,
			},
		});
	};

	if (loading)
		return (
			<DashboardMenu menu="industry" subMenu="addIndustry">
				<p>loading</p>
			</DashboardMenu>
		);
	else if (error)
		return (
			<DashboardMenu menu="industry" subMenu="addIndustry">
				<p>{error.message}</p>
			</DashboardMenu>
		);
	else
		return (
			<DashboardMenu menu="industry" subMenu="addIndustry">
				<CompanyForm
					isEdit={false}
					categoryData={data}
					submitError={mError}
					submitLoading={mLoading}
					handleSubmit={handleSubmit}
				/>
			</DashboardMenu>
		);
};

export default CreateCompany;
