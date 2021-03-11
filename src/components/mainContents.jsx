import React, {memo} from 'react';
import {Route} from 'react-router-dom';
import './mainContents.css';
import Home from '../pages/Home';

const MainContent = memo(({exped, menuInfo, resized}) => {
    return (
        <>
            <main className="menu-contents" style={{
                    transform: `translateX(${exped ? resized ? 220 : 65 : 10}px)`,
                    transition: 'transform 0.2s'
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