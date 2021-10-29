import { TextField } from "@mui/material";

interface Iprops {
    inputType: string;
    inputLabel: string;
    changeHandler: any;
    textFieldValue: string;
    InputPropsObj?: any;
    helperTextValue?: string;
    errorValue?: boolean;
}

function InputComponent(props: Iprops) {
    const { inputType, inputLabel, changeHandler, textFieldValue, InputPropsObj = {}, helperTextValue, errorValue = false } = props;

    return (<TextField
        label={inputLabel}
        type={inputType}
        value={textFieldValue}
        onChange={changeHandler}
        InputProps={InputPropsObj}
        helperText={helperTextValue}
        error={errorValue}
        margin={"normal"}
        variant={"outlined"}
    />)
}

export default InputComponent;