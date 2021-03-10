import React, {memo} from 'react';
import {Route} from 'react-router-dom';
import './mainContents.css';
import Home from '../pages/Home';

const MainContent = memo(({exped, menuInfo}) => {
    return (
        <>
            <main className="menu-contents" style={{
                    transform: exped ? `translateX(220px)` : `translateX(10px)`,
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