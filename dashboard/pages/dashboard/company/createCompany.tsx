import { DashboardMenu } from "components/dashboardMenu";
import {
	useGetCategoriesQuery,
	useInsertCompanyMutation,
} from "graphqlSchema/types";
import { hasuraHeader, CLOUDINARY_UPLOAD_URL } from "environtment";
import { useContext } from "react";
import { CompanyForm } from "components/companyForm";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { LoadingErrorHandler } from "components/loadingErrorHandler";
import { userContext } from "context/userContext";
import Head from "next/head";
import { RcFile } from "antd/lib/upload";
import axios from "axios";
import { notification } from "antd";

type formValues = {
	name: string;
	address: string;
	contact: string;
	category: number;
	description: string;
};

const CreateCompany = () => {
	const {
		user: { id, role },
	} = useContext(userContext);
	const { data, loading, error } = useGetCategoriesQuery({
		context: hasuraHeader(id, role),
	});

	if (error || loading)
		return (
			<LoadingErrorHandler
				loading={loading}
				error={error}
				dashboardMenu={{ menu: "industry", subMenu: "addIndustry" }}
			/>
		);
	else
		return (
			<DashboardMenu menu="industry" subMenu="addIndustry">
				<Head>
					<title>Tambah Industri</title>
				</Head>
				<CompanyForm isEdit={false} categoryData={data} userId={id} />
			</DashboardMenu>
		);
};

export default withAuthenticationRequired(CreateCompany);
