import { Form, Row, Col, Input, Button } from "antd";
import { useRouter } from "next/router";

const FormRenderer = () => {
	const router = useRouter();

	const handleSubmit = (values: { searchContext: string }) => {
		router.push("/search/[search]", `/search/${values.searchContext}`);
	};

	return (
		<Form
			onFinish={handleSubmit}
			className="flex flex-col justify-center items-center md:flex-row"
		>
			<Form.Item name="searchContext" className="md:w-7/12">
				<Input
					className="bg-transparent text-white w-64 md:w-full md:mr-2"
					size="middle"
					placeholder="cari para penggiat teknologi di sini.."
				/>
			</Form.Item>

			<Form.Item className="md:w-3/12">
				<Button
					className="w-64 md:w-full md:ml-2"
					block
					type="primary"
					size="middle"
					htmlType="submit"
				>
					Cari
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FormRenderer;
