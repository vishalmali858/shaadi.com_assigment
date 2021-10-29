import { useHistory, useLocation } from "react-router-dom";

function requireAuthentication(Component: any) {
    return function AuthenticatedComponent() {
        const location: any = useLocation();
        const history = useHistory();

        function checkForAuthentication() {
            let returnFlag = false;
            if (location && location.state && location.state.from && location.state.from === "/login") {
                returnFlag = true;
            }
            return returnFlag
        }

        function authFailed() {
            console.log("auth failed")
            history.push("/");
            return null
        }

        return (
            <div>
                {checkForAuthentication() === true ? <Component /> : authFailed()}
            </div>
        );
    };
}

export default requireAuthentication;