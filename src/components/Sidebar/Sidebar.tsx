import { NavLink } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}


const Sidebar = ({ sidebarOpen, setSidebarOpen }:SidebarProps) => {
  const sidebarItems = [
    {
      title: "Dashboard",
      route: "/dashboard",
      image: "/images copy/Dashboard.svg",
    },
    {
      title: "Users",
      route: "/user",
      image: "/images copy/profile-2user.svg",
    },
    {
      title: "Property",
      route: "/property",
      image: "/images copy/house2.png",
    },
    {
      title: "Scheduled Tour",
      route: "/tour",
      image: "/images copy/calendar-tick.svg",
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white shadow-lg transition-all duration-300
      ${sidebarOpen ? "w-80" : "w-0 overflow-hidden"}`}
    >
      
      <div className="flex items-center justify-between px-6 py-5">
        <img src={"./apg.png"} className="h-15" alt="logo" />
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <MdArrowBackIos className="size-8"/>
        </button>
      </div>

      
      <div className="flex flex-col p-3 px-4 gap-2">
        {sidebarItems.map((item) => (
          <NavLink
            to={item.route}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-2xl font-semibold
              ${isActive ? "bg-yellow-600 text-black" : "text-gray-600"}
              hover:bg-yellow-600`
            }
          >
            <img src={item.image} className="w-7" />
            

            {item.title}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
