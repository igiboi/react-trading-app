import React from "react";
import { Divider, Drawer, IconButton, Typography } from "@mui/material";

interface Props {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

const DRAWER_WIDTH = 240;

export const SideBar: React.FC<Props> = ({
  isOpen,
  children,
  handleDrawerToggle,
}): JSX.Element => {
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MUIDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      ></Drawer>
    </>
  );
};
