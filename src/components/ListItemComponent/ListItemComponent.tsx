import { ListItemIcon, ListItemText, ListItemAvatar, Avatar, ListItemButton } from "@mui/material";
import SkeletonComponent from "../../components/SkeletonComponent/SkeletonComponent";
import LabelComponent from "../LabelComponent/LabelComponent";

interface Iprops {
    showAvatar: boolean;
    avatarDetails: any;
    primaryListText: string;
    secondaryListText?: any;
    isListLoading?: boolean;
    isSelectedKey?: boolean;
    onCliCkHandler?: any;
}

function ListItemComponent(props: Iprops) {
    const { showAvatar, avatarDetails, primaryListText, secondaryListText = "", isListLoading = false, isSelectedKey = false, onCliCkHandler } = props;
    return (<ListItemButton
        selected={isSelectedKey}
        onClick={onCliCkHandler}
    >
        <>
            <ListItemIcon>
                {/* <Checkbox
                  edge="start"
                //   checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                /> */}
            </ListItemIcon>
            <ListItemText
                primary={!isListLoading ? <LabelComponent variantType={"body1"} displayText={primaryListText} /> : <SkeletonComponent variantType="rectangular" />}
                secondary={!isListLoading ? <LabelComponent variantType={"body1"} displayText={secondaryListText} /> : <SkeletonComponent variantType="rectangular" />}
            />
            {showAvatar ? <ListItemAvatar>
                {!isListLoading ? <Avatar alt={avatarDetails.altText} src={avatarDetails.avatarSrc} />
                    : <SkeletonComponent styleObj={{ "marginLeft": "10px"}} variantType="circular" widthValue={50} heightValue={50} />}
            </ListItemAvatar> : null}
        </>
    </ListItemButton>)
}

export default ListItemComponent;