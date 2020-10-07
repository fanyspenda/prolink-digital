import { Typography, Form, Select, Input, Button } from "antd";
import { ApolloError } from "@apollo/client";
import { GetCategoriesQuery } from "graphqlSchema/types";

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

type formValues = {
	name: string;
	address: string;
	contact: string;
	category: number;
	description: string;
	imageUrl?: string | "/company/default.png";
};

type companyFormType = {
	isEdit: boolean;
	submitLoading: boolean;
	submitError: ApolloError;
	handleSubmit: (values: formValues) => void;
	categoryData: GetCategoriesQuery;
	editData?: formValues;
};

export const CompanyForm: React.FunctionComponent<companyFormType> = ({
	isEdit,
	submitLoading,
	submitError,
	handleSubmit,
	categoryData,
	editData,
}) => {
	return (
		<>
			<Title>
				{!isEdit ? "Tambahkan Industri Baru" : "Ubah Industri"}
			</Title>
			<Paragraph>
				{!isEdit
					? "yuk tambahkan industrimu di sini"
					: "Silahkan perbarui data industrimu di sini"}
			</Paragraph>
			{submitLoading &&
				(!isEdit ? (
					<p>menambahkan data...</p>
				) : (
					<p>memperbarui data...</p>
				))}
			{submitError && <p>terjadi kesalahan: {submitError.message}</p>}
			<Form labelCol={{ span: 2 }} onFinish={handleSubmit}>
				<Form.Item
					label="Nama Industri"
					name="name"
					initialValue={editData?.name}
				>
					<Input autoFocus />
				</Form.Item>
				<Form.Item
					label="Deskripsi"
					name="description"
					initialValue={editData?.description}
				>
					<TextArea rows={3} />
				</Form.Item>
				<Form.Item
					label="Kategori"
					name="category"
					initialValue={editData?.category}
				>
					<Select
						allowClear
						placeholder="pilih kategori industrimu..."
					>
						{categoryData.category.map((category) => (
							<Option value={category.id}>{category.name}</Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item
					label="Alamat"
					name="address"
					initialValue={editData?.address}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Kontak"
					name="contact"
					initialValue={editData?.contact}
				>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						loading={submitLoading}
					>
						{!isEdit ? "Tambah Data" : "Perbarui Data"}
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};
