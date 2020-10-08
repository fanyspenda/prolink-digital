import Head from "next/head";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import { DashboardMenu } from "components/dashboardMenu";
import { Layout, Typography, Button, Input, Upload } from "antd";
import { useContext, useState, useEffect } from "react";
import { useGetUserInfoQuery } from "graphqlSchema/types";
import { userContext } from "context/userContext";
import { hasuraHeader } from "environtment";
import { LoadingErrorHandler } from "components/loadingErrorHandler";
import { RcFile } from "antd/lib/upload";
import axios from "axios";
import { CLOUDINARY_UPLOAD_URL } from "environtment";

const { Title } = Typography;

const Dashboard = () => {
	const [img, setImg] = useState<RcFile[]>([]);
	const contextUser = useContext(userContext);
	const { user: auth0User } = useAuth0();
	const { loading, data, error } = useGetUserInfoQuery({
		fetchPolicy: "network-only",
		context: hasuraHeader(auth0User.sub, "user"),
		onCompleted: ({ user }) => {
			contextUser.setter({ id: user[0].id, role: user[0].role });
		},
	});

	const handleClickUpload = (imgFile: RcFile) => {
		console.log(imgFile);
		const formData = new FormData();
		formData.append("file", imgFile);
		formData.append("upload_preset", "e9bhwoo5");
		axios
			.post(CLOUDINARY_UPLOAD_URL, formData)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	const handleChooseImage = (imgFile: RcFile) => {
		setImg([imgFile]);
		return false;
	};

	useEffect(() => {
		console.log(img);
	}, [img]);

	if (loading || error)
		return <LoadingErrorHandler loading={loading} error={error} />;
	else
		return (
			<DashboardMenu>
				<Head>
					<title>Dashboard</title>
				</Head>
				<Layout>
					<Title>
						Selamat Datang di Halaman Dashboard, {data.user[0].name}
					</Title>
					<Upload
						name="logo"
						fileList={img}
						beforeUpload={(file) => handleChooseImage(file)}
					>
						<Button>Click to upload</Button>
					</Upload>
					<Button
						onClick={() => handleClickUpload(img[0])}
						disabled={img && false}
					>
						Upload Image
					</Button>
				</Layout>
			</DashboardMenu>
		);
};

export default withAuthenticationRequired(Dashboard);
