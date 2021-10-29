import { Button } from "@mui/material";

interface Iprops {
    buttonText: string;
    buttonVariant: any;
    onClickHandler: any;
}

function ButtonComponent(props: Iprops) {
    const { buttonText, buttonVariant, onClickHandler } = props;
    return <Button onClick={onClickHandler} variant={buttonVariant}>{buttonText}</Button>
}

export default ButtonComponent;