import React from "react";
import NavTabs from "../NavTabs";

function Header({
    currentPage, handlePageChange
}) {
return (
    <header>
        <h1>
            <a href="#home"
                onClick={() => handlePageChange('Home')} >
                Levin
            </a>
        </h1>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}  />
    </header>
)
    
}

export default Header;