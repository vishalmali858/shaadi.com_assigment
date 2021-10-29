import { Typography } from "@mui/material";

interface Iprops {
    displayText: string,
    styleAttr?: any;
    variantType: any;
}

function LabelComponent(props: Iprops) {
    const { displayText, variantType, styleAttr = {} } = props;
    return <Typography component={'span'} sx={styleAttr} variant={variantType} >{displayText}</Typography>
}

export default LabelComponent;