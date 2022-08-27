
import { FaTh, } from "react-icons/fa";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BarChartIcon from '@mui/icons-material/BarChart';

export const DrawerData=[
    {
        title:"Dashboard",
        path:   "/adminhome", 
        icon:<DashboardCustomizeIcon/>
    },
    
    {
        title:"Application List",
        path:   "/application", 
        icon:<SettingsApplicationsIcon/>,
    },
    {
        title:"Book slots",
        path:   "/book-slots", 
        icon:<EventAvailableIcon/>,
    },
    {
        title:"Record tracks",
        path:   "#/", 
        icon:<BarChartIcon/>,
    },

]

export const DataUser = [
        {
            title : 'Manage users',
            path: '/users',
            icon: <FaTh/>
        },

      
]