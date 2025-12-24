import { Drawer } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import { Class, LibraryBooks, ListAlt } from "@mui/icons-material";
import { SidebarItem } from "../types/sidebar";

const sidebarItems: SidebarItem[] = [
  {
    name: "Home",
    icon: <HomeIcon />,
    url: "/",
  },
  {
    name: "Library",
    icon: <LibraryBooks />,
    url: "/library",
  },
  {
    name: "Flashcards",
    icon: <Class />,
    url: "/flashcards",
  },
];

export default function Home() {
  return <Sidebar items={sidebarItems} />;
}
