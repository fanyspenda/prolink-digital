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
				<Title>Tambahkan Industri Baru</Title>
				<Paragraph>yuk tambahkan industrimu di sini</Paragraph>
				{mLoading && <p>menambahkan data...</p>}
				{mError && <p>terjadi kesalahan: {mError.message}</p>}
				<Form labelCol={{ span: 2 }} onFinish={handleSubmit}>
					<Form.Item label="Nama Industri" name="name">
						<Input autoFocus />
					</Form.Item>
					<Form.Item label="Deskripsi" name="description">
						<TextArea rows={3} />
					</Form.Item>
					<Form.Item label="Kategori" name="category">
						<Select
							allowClear
							placeholder="pilih kategori industrimu..."
						>
							{data.category.map((category) => (
								<Option value={category.id}>
									{category.name}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item label="Alamat" name="address">
						<Input />
					</Form.Item>
					<Form.Item label="Kontak" name="contact">
						<Input />
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							loading={mLoading}
						>
							Tambah Data
						</Button>
					</Form.Item>
				</Form>
			</DashboardMenu>
		);
};

export default CreateCompany;
