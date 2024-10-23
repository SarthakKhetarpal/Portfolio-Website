import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const SidebarData = [
    {
        path: "/",
        title: "Home",
        icon: <FaHome />
    },
    {
        path: "/About",
        title: "About",
        icon: <FaUser />
    },
    {
        path: "/Portfolio",
        title: "Portfolio",
        icon: <FaBriefcase />
    },
    {
        path: "/Contact",
        title: "Contact",
        icon: <IoMdMail />
    }
]