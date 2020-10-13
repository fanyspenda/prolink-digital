import { DashboardMenu } from "components/dashboardMenu";
import { Form } from "antd";
import {
	useGetEditCompanyDataQuery,
	useUpdateCompanyByPkMutation,
} from "graphqlSchema/types";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { userContext } from "context/userContext";
import { CompanyForm } from "components/companyForm";
import { useRouter } from "next/router";
import { LoadingErrorHandler } from "components/loadingErrorHandler";

type formValues = {
	name: string;
	address: string;
	contact: string;
	category: number;
	description: string;
};

export const getServerSideProps = async ({ params }) => {
	return {
		props: {
			companyId: params.companyEdit,
		},
	};
};

const EditCompany = ({ companyId }) => {
	const {
		user: { id, role },
	} = useContext(userContext);
	const { data, loading, error } = useGetEditCompanyDataQuery({
		context: hasuraHeader(id, role),
		variables: {
			companyId,
		},
		fetchPolicy: "network-only",
	});

	if (loading || error)
		return (
			<LoadingErrorHandler
				loading={loading}
				error={error}
				dashboardMenu={{
					menu: "industry",
					subMenu: "viewIndustry",
					userRole: role,
				}}
			/>
		);
	else
		return (
			<DashboardMenu
				menu="industry"
				subMenu="viewIndustry"
				userRole={role}
			>
				<CompanyForm
					isEdit={true}
					categoryData={data}
					userId={id}
					editData={{
						address: data.company_by_pk.address,
						contact: data.company_by_pk.contact,
						name: data.company_by_pk.name,
						description: data.company_by_pk.description,
						category: data.company_by_pk.category.id,
						imageUrl: data.company_by_pk.logo_url,
					}}
					companyId={companyId}
				/>
			</DashboardMenu>
		);
};

export default EditCompany;
