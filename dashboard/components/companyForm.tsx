import {
	Typography,
	Form,
	Select,
	Input,
	Button,
	Upload,
	notification,
	Layout,
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
import { useRouter } from "next/router";

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
	companyId?: string;
};

export const CompanyForm: React.FunctionComponent<companyFormType> = ({
	isEdit,
	categoryData,
	editData,
	userId,
	companyId,
}) => {
	const router = useRouter();
	const [img, setImg] = useState<RcFile[]>([]);
	const [
		insertCompany,
		{ loading: addLoading, error: addError },
	] = useInsertCompanyMutation();

	const [
		updateCompany,
		{ loading: updateLoading, error: updateError },
	] = useUpdateCompanyByPkMutation({
		onCompleted: () => router.push("/dashboard/company"),
	});

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
				if (!isEdit)
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
							logoId: res.data.public_id,
						},
					});
				else if (isEdit)
					updateCompany({
						variables: {
							id: companyId,
							name: values.name,
							description: values.description,
							address: values.address,
							contact: values.contact,
							category_id: values.category,
							logoUrl: res.data.url,
							logoId: res.data.public_id,
						},
					});
			})
			.then(() => {
				notification.open({
					message: "Sukses",
					description: "sukses menambah Industri",
					style: { backgroundColor: "#adffc8" },
				});
			})
			.catch((err) => {
				notification.open({
					message: "Gagal",
					description: `Terjadi kesalahan: ${err}`,
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
			<Layout className="bg-white p-10 rounded-lg">
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
				{updateError && <p>terjadi kesalahan: {updateError.message}</p>}
				<Form labelCol={{ span: 2 }} onFinish={handleSubmit}>
					<Form.Item
						label="Nama Industri"
						name="name"
						initialValue={editData?.name}
						rules={[
							{
								required: true,
								message: "Nama Industri harus diisi!",
							},
						]}
						hasFeedback
					>
						<Input autoFocus />
					</Form.Item>
					<Form.Item
						label="Deskripsi"
						name="description"
						initialValue={editData?.description}
						rules={[
							{
								required: true,
								message: "Deskripsi harus diisi!",
							},
						]}
						hasFeedback
					>
						<TextArea rows={3} />
					</Form.Item>
					<Form.Item
						label="Kategori"
						name="category"
						initialValue={editData?.category}
						rules={[
							{
								required: true,
								message: "Kategori harus diisi!",
							},
						]}
						hasFeedback
					>
						<Select
							allowClear
							placeholder="pilih kategori industrimu..."
						>
							{categoryData.category.map((category) => (
								<Option value={category.id}>
									{category.name}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						label="Alamat"
						name="address"
						initialValue={editData?.address}
						rules={[
							{
								required: true,
								message: "Alamat harus diisi!",
							},
						]}
						hasFeedback
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="No. Telpon"
						name="contact"
						initialValue={editData?.contact}
						rules={[
							{
								required: true,
								message: "Nama Industri harus diisi!",
							},
						]}
						hasFeedback
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Logo"
						name="image"
						initialValue={editData?.imageUrl}
						hasFeedback
					>
						<Upload
							name="logo"
							fileList={img}
							listType="picture-card"
							beforeUpload={(file) => handleChooseImage(file)}
							onRemove={() => setImg([])}
						>
							<Button>Click to upload</Button>
						</Upload>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							loading={addLoading || updateLoading}
						>
							{!isEdit ? "Tambah Data" : "Perbarui Data"}
						</Button>
					</Form.Item>
				</Form>
			</Layout>
		</>
	);
};
