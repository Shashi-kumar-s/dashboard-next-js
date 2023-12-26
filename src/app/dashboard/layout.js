import React from 'react'
import SideNavbar from '../ui/dashboard/sideNavbar/SideNavbar'
import Navbar from '../ui/dashboard/navbar/Navbar'

const layout = ({ children }) => {
    return (
        <div>
            <div>
                <SideNavbar />
                <div>
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout
