import { DashboardMenu, activeMenu } from "./dashboardMenu";
import { ApolloError } from "@apollo/client";

type loadingErrorType = {
	loading: boolean;
	error: ApolloError;
	dashboardMenu?: activeMenu;
};

export const LoadingErrorHandler: React.FunctionComponent<loadingErrorType> = ({
	loading,
	error,
	dashboardMenu,
}) => {
	return (
		<DashboardMenu
			menu={dashboardMenu?.menu}
			subMenu={dashboardMenu?.subMenu}
		>
			{loading && <p>loading...</p>}
			{error && <p>{error.message}</p>}
		</DashboardMenu>
	);
};
