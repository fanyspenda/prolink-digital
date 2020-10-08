import {
	Typography,
	Form,
	Select,
	Input,
	Button,
	Upload,
	notification,
} from "antd";
import {
	GetCategoriesQuery,
	useInsertCompanyMutation,
	useUpdateCompanyByPkMutation,
} from "graphqlSchema/types";
import { useState } from "react";
import { RcFile } from "antd/lib/upload";
import { CLOUDINARY_UPLOAD_URL } from "environtment";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
	categoryData: GetCategoriesQuery;
	editData?: formValues;
	userId: string;
};

export const CompanyForm: React.FunctionComponent<companyFormType> = ({
	isEdit,
	categoryData,
	editData,
	userId,
}) => {
	const [img, setImg] = useState<RcFile[]>();
	const [
		insertCompany,
		{ loading: addLoading, error: addError },
	] = useInsertCompanyMutation();

	const handleImageUpload = (imgFile: RcFile) => {
		console.log(imgFile);
		const formData = new FormData();
		formData.append("file", imgFile);
		formData.append("upload_preset", "e9bhwoo5");
		return axios.post(CLOUDINARY_UPLOAD_URL, formData);
	};

	const handleSubmit = (values: formValues) => {
		handleImageUpload(img[0])
			.then((res) => {
				console.log(res.data);
				insertCompany({
					variables: {
						id: uuidv4(),
						userId: userId,
						name: values.name,
						description: values.description,
						address: values.address,
						contact: values.contact,
						categoryId: values.category,
						logoUrl: res.data.url,
					},
				});
			})
			.then(() => {
				notification.open({
					message: "Sukses",
					description: "sukses menambah gambar",
					duration: 4000,
				});
			})
			.catch((err) => {
				notification.open({
					message: "Gagal",
					description: "gagal menambah gambar",
					duration: 4000,
					style: { backgroundColor: "#fcc1b8" },
				});
			});
	};

	const handleChooseImage = (imgFile: RcFile) => {
		setImg([imgFile]);
		return false;
	};

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
			{addLoading &&
				(!isEdit ? (
					<p>menambahkan data...</p>
				) : (
					<p>memperbarui data...</p>
				))}
			{addError && <p>terjadi kesalahan: {addError.message}</p>}
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
				<Form.Item
					label="Logo"
					name="image"
					initialValue={editData?.imageUrl}
				>
					<Upload
						name="logo"
						fileList={img}
						beforeUpload={(file) => handleChooseImage(file)}
					>
						<Button>Click to upload</Button>
					</Upload>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						loading={addLoading}
					>
						{!isEdit ? "Tambah Data" : "Perbarui Data"}
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};
