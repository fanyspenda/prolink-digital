import { Form, Row, Col, Input, Button } from "antd";
import { useRouter } from "next/router";

const FormRenderer = () => {
	const router = useRouter();

	const handleSubmit = (values: { searchContext: string }) => {
		router.push("/search/[search]", `/search/${values.searchContext}`);
	};

	return (
		<Form onFinish={handleSubmit}>
			<Row align="middle" justify="space-around">
				<Col span={18}>
					<Form.Item name="searchContext">
						<Input
							size="large"
							placeholder="cari para penggiat teknologi di sini.."
						/>
					</Form.Item>
				</Col>
				<Col span={5}>
					<Form.Item>
						<Button
							block
							type="primary"
							size="large"
							htmlType="submit"
						>
							Cari
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default FormRenderer;
