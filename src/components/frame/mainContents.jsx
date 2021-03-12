import React, {memo} from 'react';
import {Route} from 'react-router-dom';
import './mainContents.css';
import Home from '../../pages/Home';

const MainContent = memo(({exped, menuInfo, resized}) => {
    let opX = 190;
    let clX = 70;
    let noX = 10;
    return (
        <>
            <main className="menu-contents" style={{
                    left: `${exped ? (resized ? opX : clX) : noX}px`,
                    transform: `width: calc(100% - ${exped ? (resized ? opX : clX) : noX}px)`,
                    transition: 'transform 0.3s, left 0.3s'
            }}> 
                <Route exact path="/" component={Home} />
                {
                    menuInfo.map((v,i) => {
                        return(
                            <Route path={v.path} component={v.compo} key={i}/>
                        )
                    })
                }
            </main>
        </>
    )
})

export default MainContent;