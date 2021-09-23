import React, {useContext} from 'react'
import Table from "./Table/Table"
import Profile from "../Components/Profile/Profile"
import Sidenav from '../Components/SideNav/Sidenav'
import RContext from "../Context/RContext";
const App = () => {
    const context = useContext(RContext);
    const { openNav } = context;
    return (
        <div style={{ backgroundColor: 'white' }}>
            {openNav && <Sidenav/>}
            <Profile />
            <Table style={{padding:"5%"}}/>
        </div>
    )
}

export default App
