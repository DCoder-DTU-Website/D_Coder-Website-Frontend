import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import TableChart from "@material-ui/icons/TableChart";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/DashCp.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
// import DashboardPage from "views/Dashboard/Dashboard.js";
// import TableChart from "@material-ui/icons/TableChart";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Members",
    rtlName: "قائمة الجدول",
    icon: TableChart,
    component: TableList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
