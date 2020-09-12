import { Form, Row, Col, Input, Button } from "antd";
import Link from "next/link";

const FormRenderer = () => {
	const handleSubmit = (values: { searchContext: string }) => {
		console.log(values.searchContext);
	};

	return (
		<Form
			style={{
				marginTop: "40px",
				marginLeft: "10px",
				marginRight: "10px",
			}}
			onFinish={handleSubmit}
		>
			<Row>
				<Col span={20}>
					<Form.Item
						name="searchContext"
						style={{ marginRight: "10px" }}
					>
						<Input
							size="large"
							placeholder="cari para penggiat teknologi di sini.."
						/>
					</Form.Item>
				</Col>
				<Col span={4}>
					<Button block type="primary" size="large" htmlType="submit">
						Cari
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default FormRenderer;
