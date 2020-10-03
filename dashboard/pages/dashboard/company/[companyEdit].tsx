import { DashboardMenu } from "components/dashboardMenu";
import { Typography, Input, Select } from "antd";
import {
	useGetEditCompanyDataQuery,
	useUpdateCompanyByPkMutation,
} from "graphqlSchema/types";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { userContext } from "context/userContext";
import { CompanyForm } from "components/companyForm";

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
	const userData = useContext(userContext);
	const { data, loading, error } = useGetEditCompanyDataQuery({
		context: hasuraHeader(userData.user.id, userData.user.role),
		variables: {
			companyId,
		},
	});
	const [
		updateCompany,
		{ loading: mLoading, error: mError },
	] = useUpdateCompanyByPkMutation();
	const handleSubmit = (values: formValues) => {
		updateCompany({
			variables: {
				id: companyId,
				name: values.name,
				description: values.description,
				address: values.address,
				contact: values.contact,
				category_id: values.category,
			},
		});
	};

	if (loading)
		return (
			<DashboardMenu menu="industry" subMenu="addIndustry">
				<p>loading</p>
			</DashboardMenu>
		);
	else if (error)
		return (
			<DashboardMenu menu="industry" subMenu="addIndustry">
				<p>{error.message}</p>
			</DashboardMenu>
		);
	else
		return (
			<DashboardMenu menu="industry" subMenu="addIndustry">
				<CompanyForm
					isEdit={true}
					categoryData={data}
					submitError={mError}
					submitLoading={mLoading}
					handleSubmit={handleSubmit}
					editData={{
						address: data.company_by_pk.address,
						contact: data.company_by_pk.contact,
						name: data.company_by_pk.name,
						description: data.company_by_pk.description,
						category: data.company_by_pk.category.id,
					}}
				/>
			</DashboardMenu>
		);
};

export default EditCompany;
