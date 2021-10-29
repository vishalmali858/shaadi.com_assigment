import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useHistory } from "react-router-dom";
import { FormControl, IconButton } from "@mui/material";
import { useState } from "react";
import { AccountCircleIconButton, PasswordRoundedIconButton, VisibilityOffIcon, VisibilityIcon } from "../../globalUtils/globalImage";

function LoginContainer() {
    let history = useHistory();

    const initialDataTextDetails = {
        textData: "",
        error: false,
        helperText: ""
    }
    const [showPassword, setShowPasswordValue] = useState(false);
    const [passwordDataObj, setPasswordValue] = useState(initialDataTextDetails);
    const [userNameDataObj, setUsernameValue] = useState(initialDataTextDetails);

    function handleChange(event: any, typeData: any) {
        switch (typeData) {
            case "username":
                setUsernameValue({
                    ...initialDataTextDetails,
                    textData: event.target.value
                });
                break;
            case "password":
                setPasswordValue({
                    ...initialDataTextDetails,
                    textData: event.target.value
                });
                break;
            case "clickShowPassword":
                setShowPasswordValue(!showPassword);
                break;
        }
    }

    function onSignInClick(event: any) {
        let userNameTyped = userNameDataObj["textData"] || "";
        let passwordTyped = passwordDataObj["textData"] || "";
        let signInFlag = true;
        if (userNameTyped !== "foo") {
            setUsernameValue({
                ...userNameDataObj,
                error: true,
                helperText: "Invalid Username"
            });
            signInFlag = false;
        }
        if (passwordTyped !== "bar") {
            setPasswordValue({
                ...passwordDataObj,
                error: true,
                helperText: "Invalid Password"
            });
            signInFlag = false;
        }
        if (signInFlag) {
            history.push("/home", { from: "/login" });
        }
    }

    function OnResetClick(event: any) {
        setUsernameValue(initialDataTextDetails);
        setPasswordValue(initialDataTextDetails);
    }

    return <FormControl>
        <InputComponent
            inputType={"text"}
            inputLabel={"Username"}
            changeHandler={(e: any) => { handleChange(e, "username") }}
            textFieldValue={userNameDataObj["textData"]}
            helperTextValue={userNameDataObj["helperText"]}
            errorValue={userNameDataObj["error"]}
            InputPropsObj={{
                startAdornment: AccountCircleIconButton,
            }}
        />
        <InputComponent
            inputType={showPassword ? "text" : "password"}
            inputLabel={"Password"}
            changeHandler={(e: any) => { handleChange(e, "password") }}
            textFieldValue={passwordDataObj["textData"]}
            helperTextValue={passwordDataObj["helperText"]}
            errorValue={passwordDataObj["error"]}
            InputPropsObj={{
                startAdornment: PasswordRoundedIconButton,
                endAdornment: (<IconButton
                    onClick={(e: any) => { handleChange(e, "clickShowPassword") }}
                    edge="end"
                >
                    {showPassword ? VisibilityOffIcon : VisibilityIcon}
                </IconButton>)
            }}
        />
        <ButtonComponent onClickHandler={onSignInClick} buttonVariant={"contained"} buttonText={"Log In"}></ButtonComponent>
        <br />
        <ButtonComponent onClickHandler={OnResetClick} buttonVariant={"contained"} buttonText={"Reset"}></ButtonComponent>
    </FormControl>
}

export default LoginContainer;