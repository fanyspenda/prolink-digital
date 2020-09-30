import { Button } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<>
			<Button type="primary" onClick={() => loginWithRedirect()}>
				Login
			</Button>
		</>
	);
};

export default Login;