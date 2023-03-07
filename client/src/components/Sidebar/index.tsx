import {
  Dashboard,
  ReceiptLongOutlined,
  CastForEducation,
  Analytics,
  Handyman,
  People,
  DocumentScanner,
  RemoveRedEye,
  Settings,
  PostAdd,
} from "@mui/icons-material";
import { List } from "@mui/material";
import { blue } from "@mui/material/colors";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuButton from "./MenuButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={true}
      disableEnforceFocus
      disableScrollLock={true}
      hideBackdrop
      style={{
        width: open ? 270 : 60,
        transition: "width 250ms",
      }}
      PaperProps={{
        sx: {
          transition: "width 250ms",
          width: open ? 270 : 60,
          px: 1,
          backgroundColor: blue[900],
          flexShrink: 0,
          overflowX: "hidden",
          display: { md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        },
      }}
      onMouseEnter={openDrawer}
      onMouseLeave={closeDrawer}
    >
      <List>
        {optionsList.map((item, key) => (
          <MenuButton key={key} item={item} open={open} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

const optionsList = [
  {
    icon: <Dashboard />,
    name: "Dashboard",
    path: "/",
    items: [],
  },
  // {
  //     name: 'Agreements',
  //     path: '/',
  // },
  {
    icon: <PostAdd />,
    name: "Build Your Own Contract",
    path: "/contract/create",
    items: [],
  },
  // {
  //     name: 'Templates',
  //     path: '/all-templates',
  // },
  {
    icon: <CastForEducation fontSize="medium" />,
    name: "eLearning",
    path: "/e-learning",
    items: [],
  },
  {
    icon: <Analytics fontSize="medium" />,
    name: "Data Analytics",
    path: "/data-analytics",
  },
  {
    icon: <Handyman fontSize="medium" />,
    name: "Contract Tools",
    // path: '',
    items: [
      {
        icon: <ReceiptLongOutlined fontSize="medium" />,
        name: "Manage Templates",
        path: "/all-templates",
      },
      {
        icon: <People fontSize="medium" />,
        name: "Manage Users",
        path: "/all-users",
      },
      {
        icon: <DocumentScanner fontSize="medium" />,
        name: "My Contracts",
        path: "",
      },
      {
        icon: <RemoveRedEye fontSize="medium" />,
        name: "Contract For Review",
        path: "",
      },
      {
        icon: <Settings fontSize="medium" />,
        name: "Document Settings",
        path: "/document-settings",
      },
    ],
  },
];

export const menu = [
  {
    //   icon: <HomeOutlinedIcon />,
    title: "Home",
    items: [],
    path: "/",
  },
  {
    //   icon: <LocalLibraryOutlinedIcon />,
    title: "Education",
    items: [
      {
        title: "Technical Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
    ],
  },
  {
    //   icon: <TrendingUpOutlinedIcon />,
    title: "Options",
    path: "/contract/create",
  },
  {
    //   icon: <DescriptionOutlinedIcon />,
    title: "Blog",
  },
];
