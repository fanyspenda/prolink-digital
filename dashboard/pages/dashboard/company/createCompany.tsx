import { DashboardMenu } from "components/dashboardMenu";
import { useGetCategoriesQuery } from "graphqlSchema/types";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { CompanyForm } from "components/companyForm";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { LoadingErrorHandler } from "components/loadingErrorHandler";
import { userContext } from "context/userContext";
import Head from "next/head";

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
				dashboardMenu={{
					menu: "industry",
					subMenu: "addIndustry",
					userRole: role,
				}}
			/>
		);
	else
		return (
			<DashboardMenu
				menu="industry"
				subMenu="addIndustry"
				userRole={role}
			>
				<Head>
					<title>Tambah Industri</title>
				</Head>
				<CompanyForm isEdit={false} categoryData={data} userId={id} />
			</DashboardMenu>
		);
};

export default withAuthenticationRequired(CreateCompany);
