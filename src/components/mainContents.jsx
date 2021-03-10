import React, {memo} from 'react';
import './mainContents.css';

const MainContent = memo(({page, exped, menuContents}) => {

    return (
        <>
            <div className="menu-contents" ref={menuContents} 
                style={{
                    transform: exped ? `translateX(220px)` : `translateX(10px)`,
                    transition: 'transform 0.7s'
                }}>
            {page}
            </div>
        </>
    )
})

export default MainContent;