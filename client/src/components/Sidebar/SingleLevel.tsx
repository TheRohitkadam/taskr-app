import React from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
// import { RESET_CONTRACT } from "../../../store/actionTypes";
// import { useDispatch } from "react-redux";

const SingleLevel = ({ item, drawerOpen }: any) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const onClickHandler = () => {
        navigate(item?.path);
        // dispatch({ type: RESET_CONTRACT })
    }

    return (
        <ListItem
            disablePadding
            sx={{ height: 45, my: 1, borderRadius: 2 }}
            // onClick={onClickHandler}
        >
            <ListItemButton
                disableRipple
                sx={{
                    justifyContent: drawerOpen ? 'initial' : 'center',
                    borderRadius: 2,
                    bgcolor: pathname === item.path ? blue[500] : 'transparent',
                    height: 45,
                    width: 45,
                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: blue[800],
                        transition: "background-color 250ms",
                        '@media (hover: none)': {
                            backgroundColor: 'transparent',
                        },
                    },
                }}>
                <ListItemIcon sx={{ minWidth: 0, mx: 2, justifyContent: 'center', color: '#fff' }}>{item.icon}</ListItemIcon>
                <ListItemText
                    sx={{
                        opacity: drawerOpen ? 1 : 0,
                        maxHeight: 24,
                        whiteSpace: "nowrap"
                    }}
                    primary={<Typography variant='subtitle2' color='#fff'>{item.name}</Typography>} />
            </ListItemButton>
        </ListItem>
    );
};

export default SingleLevel;