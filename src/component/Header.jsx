import React from 'react'
import Common from './Common'
import Header_Top from './Header_Top'
import HumbergerMenu from './HumbergerMenu'
import MobileMenu from './MobileMenu'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <div className="header">
                <Header_Top />
                <Navbar />
            </div>
            <MobileMenu />
            <HumbergerMenu />
            <Common />
        </>
    )
}

export default Header
