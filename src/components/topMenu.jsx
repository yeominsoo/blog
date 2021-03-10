import React from 'react';
import './topMenu.css';
import {Link} from 'react-router-dom';

const TopMenu = () => {
    return (
        <>
            <div className="title-frame">
                <div>
                    <Link to="/" className="TopTitleText"> Grayed Development Blog 🔧 </Link>
                </div>
            </div>
        </>
    )
}

export default TopMenu; 
