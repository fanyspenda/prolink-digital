import { DashboardMenu } from "components/dashboardMenu";
import { Typography, Form, Input, Select } from "antd";
import { useGetCategoriesQuery } from "graphqlSchema/types";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { userContext } from "context/userContext";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const CreateCompany = () => {
	const userData = useContext(userContext);
	const { data, loading, error } = useGetCategoriesQuery({
		context: hasuraHeader(userData.user.id, userData.user.role),
	});

	if (loading)
		return (
			<DashboardMenu>
				<p>loading</p>
			</DashboardMenu>
		);
	else if (error)
		return (
			<DashboardMenu>
				<p>{error.message}</p>
			</DashboardMenu>
		);
	else
		return (
			<DashboardMenu menu="industry" subMenu="addIndustry">
				<Title>Tambahkan Industri Baru</Title>
				<Paragraph>yuk tambahkan industrimu di sini</Paragraph>
				<Form labelCol={{ span: 2 }}>
					<Form.Item label="Nama Industri" name="name">
						<Input title="Nama Industri" />
					</Form.Item>
					<Form.Item label="Deskripsi" name="description">
						<TextArea rows={3} title="Deskripsi Industri" />
					</Form.Item>
					<Form.Item label="Nama Industri" name="name">
						<Select>
							{data.category.map((category) => (
								<Option value={category.id}>
									{category.name}
								</Option>
							))}
						</Select>
					</Form.Item>
				</Form>
			</DashboardMenu>
		);
};

export default CreateCompany;
