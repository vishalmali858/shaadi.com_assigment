import { Skeleton } from "@mui/material";

interface Iprops {
    variantType: any;
    widthValue?: any;
    heightValue?: any;
    styleObj ?: any;
}

function SkeletonComponent(props: Iprops) {
    const { variantType, widthValue, heightValue, styleObj } = props;
    return <Skeleton variant={variantType} width={widthValue} height={heightValue} sx={styleObj} />
}

export default SkeletonComponent;