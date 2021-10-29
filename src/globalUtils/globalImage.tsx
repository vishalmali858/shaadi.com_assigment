import { VisibilityOff, Visibility, AccountCircle, PasswordRounded } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export const AccountCircleIcon = (<AccountCircle />);
export const AccountCircleIconButton = (<IconButton disabled={true}>{AccountCircleIcon}</IconButton>);

export const PasswordRoundedIcon = (<PasswordRounded />);
export const PasswordRoundedIconButton = (<IconButton disabled={true}>{PasswordRoundedIcon}</IconButton>);

export const VisibilityOffIcon = (<VisibilityOff />);
export const VisibilityOffIconButton = (<IconButton>{VisibilityOffIcon}</IconButton>);

export const VisibilityIcon = (<Visibility />);
export const VisibilityIconButton = (<IconButton>{VisibilityIcon}</IconButton>);

export const TAB_DATA_ARRAY = [
    {
        value: "personal",
        icon: <PersonOutlineIcon />,
        label: "Personal",
        key: "personalTab"
    },
    {
        value: "address",
        icon: <HomeIcon />,
        label: "Address",
        key: "addressTab"
    },
    {
        value: "contact",
        icon: <ConnectWithoutContactIcon />,
        label: "Contact",
        key: "contactTab"
    }
]