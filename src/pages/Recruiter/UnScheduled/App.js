import React from 'react'
import Table from "./Table/Table"
import Profile from "../Components/Profile/Profile"
const App = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <Profile/>
            <Table style={{padding:"5%"}}/>
        </div>
    )
}

export default App
