import { AppBar, Toolbar, Typography } from "@mui/material";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import { useHistory, useLocation } from "react-router-dom";

function HeaderComponent() {

    const location: any = useLocation();
    const history = useHistory();
    function logOutClicked(event: any) {
        history.push("/");
    }

    return <AppBar color={"secondary"} position="static">
        <Toolbar>
            {/* <FormGroup>
                <FormControlLabel control={<Switch />} label="Dark Mode" />
            </FormGroup> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Shaadi.com List
            </Typography>
            {location.pathname === "/home" ? <ButtonComponent
                buttonText={"Log Out"}
                buttonVariant={"contained"}
                onClickHandler={logOutClicked}
            /> : null}
        </Toolbar>
    </AppBar>
}

export default HeaderComponent