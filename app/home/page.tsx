import { Drawer } from "@mui/material";
import { Sidebar, SidebarItem } from "./components/Sidebar";
import HomeIcon from "@mui/icons-material/Home";
import { Class, LibraryBooks, ListAlt } from "@mui/icons-material";

const sidebarItems: SidebarItem[] = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Library",
    icon: <LibraryBooks />,
  },
  {
    name: "Flashcards",
    icon: <Class />,
  },
];

export default function Home() {
  return <Sidebar items={sidebarItems} />;
}
