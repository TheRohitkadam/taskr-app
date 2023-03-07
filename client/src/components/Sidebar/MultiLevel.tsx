import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

const MultiLevel = ({ item, drawerOpen }: any) => {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  const { items: children } = item;
  const [openSubnav, setOpenSubnav] = useState(false);

  const handleClick = () => {
    setOpenSubnav(!openSubnav);
  };

  return (
    <>
      <ListItem
        disablePadding
        sx={{
          height: 45,
          my: 1,
          borderRadius: 2,
          bgcolor:
            pathname === "/all-templates" ||
            pathname === "/all-users" ||
            pathname === "/document-settings"
              ? blue[500]
              : blue[900],
        }}
        onClick={handleClick}
      >
        <ListItemButton
          disableRipple
          sx={{
            justifyContent: drawerOpen ? "initial" : "center",
            borderRadius: 2,
            bgcolor: pathname === item.path ? blue[500] : "transparent",
            height: 45,
            width: 45,
            "&:hover": {
              textDecoration: "none",
              backgroundColor: blue[800],
              transition: "background-color 250ms",
              "@media (hover: none)": {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          <ListItemIcon
            sx={{ minWidth: 0, mx: 2, justifyContent: "center", color: "#fff" }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            sx={{
              opacity: drawerOpen ? 1 : 0,
              maxHeight: 24,
              whiteSpace: "nowrap",
            }}
            primary={
              <Typography variant="subtitle2" color="#fff">
                {item.name}
              </Typography>
            }
          />
          {drawerOpen &&
            (openSubnav ? (
              <ExpandLess sx={{ maxHeight: 24, color: "white" }} />
            ) : (
              <ExpandMore sx={{ maxHeight: 24, color: "white" }} />
            ))}
        </ListItemButton>
      </ListItem>
      {drawerOpen && (
        <Collapse in={openSubnav} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ bgcolor: blue[700], borderRadius: 2, p: 1 }}
          >
            {children.map((Subitem: any, id: any) => {
              return (
                <ListItem
                  key={id}
                  disablePadding
                  defaultValue={Subitem.name}
                  sx={{ height: 45, my: 0.25, borderRadius: 2 }}
                  onClick={() => navigate(Subitem.path)}
                >
                  <ListItemButton
                    disableRipple
                    sx={{
                      borderRadius: 2,
                      bgcolor:
                        pathname === Subitem.path ? blue[800] : "transparent",
                      height: 45,
                      width: 45,
                      "&:hover": {
                        textDecoration: "none",
                        backgroundColor: blue[800],
                        transition: "background-color 250ms",
                        "@media (hover: none)": {
                          backgroundColor: "transparent",
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mx: 2,
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      {Subitem.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        opacity: drawerOpen ? 1 : 0,
                        maxHeight: 24,
                        whiteSpace: "nowrap",
                      }}
                      children={
                        <Typography variant="subtitle2" color="#fff">
                          {Subitem.name}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default MultiLevel;
