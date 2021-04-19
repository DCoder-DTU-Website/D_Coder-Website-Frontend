import Dashboard from "@material-ui/icons/Dashboard";
import TableList from "views/TableList/TableList.js";
import DashboardPage from "views/Dashboard/Dashboard.js";
import TableChart from "@material-ui/icons/TableChart";


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
