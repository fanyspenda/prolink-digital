import { useGetUserInfoQuery } from "graphqlSchema/types";
import { useAuth0 } from "@auth0/auth0-react";
import { hasuraHeader } from "environtment";
import { useContext } from "react";
import { userContext } from "context/userContext";

export const useUser = () => {
	const contextUser = useContext(userContext);
	const { user: auth0User } = useAuth0();
	const { loading, data, error, refetch } = useGetUserInfoQuery({
		fetchPolicy: "network-only",
		context: hasuraHeader(auth0User.sub, "user"),
		onCompleted: ({ user }) => {
			contextUser.setter({ id: user[0].id, role: user[0].role });
		},
	});

	return {
		userAuthRefetch: refetch,
		userId: data?.user[0].id,
		userName: data?.user[0].name,
		userRole: data?.user[0].role,
		userAuthLoading: loading,
		userAuthError: error,
	};
};
