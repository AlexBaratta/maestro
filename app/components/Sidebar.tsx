"use client";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  styled,
} from "@mui/material";
import { ReactNode, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { SidebarItem } from "../types/sidebar";

type SidebarProps = {
  items: SidebarItem[];
  current?: SidebarItem;
};

const ColumnList = styled(List)({
  display: "flex",
  flexDirection: "column",
  width: "200px",
  alignItems: "flex-start",
});

const OPEN_DRAWER_WIDTH = 200;
const COLLAPSED_DRAWER_WIDTH = 64;

export const Sidebar = ({ items }: SidebarProps) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      sx={{
        width: collapsed ? COLLAPSED_DRAWER_WIDTH : OPEN_DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? COLLAPSED_DRAWER_WIDTH : OPEN_DRAWER_WIDTH,
          transition: "width 0.25s ease",
          overflowX: "hidden",
          boxSizing: "border-box",
          px: 1,
          py: 1,
        },
      }}
    >
      <Button
        sx={{
          justifyContent: "flex-start",
          minWidth: 0,
        }}
        onClick={() => {
          setCollapsed((p) => !p);
        }}
      >
        <MenuIcon />
      </Button>

      <ColumnList>
        {items.map(({ name, icon, url }) => (
          <ListItem disablePadding>
            <Button
              onClick={() => router.push(url)}
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <div>{icon}</div>
              <div style={{ opacity: collapsed ? 0 : 1 }}>{name}</div>
            </Button>
          </ListItem>
        ))}
      </ColumnList>
    </Drawer>
  );
};
