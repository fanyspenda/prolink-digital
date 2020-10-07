import { DashboardMenu } from "components/dashboardMenu";
import {
	useGetCategoriesQuery,
	useInsertCompanyMutation,
} from "graphqlSchema/types";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { CompanyForm } from "components/companyForm";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { LoadingErrorHandler } from "components/loadingErrorHandler";
import { userContext } from "context/userContext";
import Head from "next/head";

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

	const [
		insertCompany,
		{ loading: mLoading, data: mData, error: mError },
	] = useInsertCompanyMutation();
	const handleSubmit = (values: formValues) => {
		insertCompany({
			variables: {
				id: uuidv4(),
				userId: id,
				name: values.name,
				description: values.description,
				address: values.address,
				contact: values.contact,
				categoryId: values.category,
			},
		});
	};

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
				<CompanyForm
					isEdit={false}
					categoryData={data}
					submitError={mError}
					submitLoading={mLoading}
					handleSubmit={handleSubmit}
				/>
			</DashboardMenu>
		);
};

export default withAuthenticationRequired(CreateCompany);
