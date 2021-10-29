import { List } from "@mui/material";

interface Iprops {
    listItemData: any;
}

function ListComponent(props: Iprops) {
    const { listItemData } = props;
    return (<List
        sx={{ bgcolor: 'background.paper' }}
        component={"nav"}
    >
        {listItemData}
    </List>)
}

export default ListComponent;