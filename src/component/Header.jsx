import React from 'react'
import Header_Top from './Header_Top'
import MobileMenu from './MobileMenu'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <Header_Top />
            <Navbar />
            <MobileMenu />
        </>
    )
}

export default Header
