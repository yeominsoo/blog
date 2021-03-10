import React, {memo, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import './leftMenu.css';

import Games from '../pages/games';

const LeftMenu = memo(({menuList, expended}) => {
    const [bMove, setBmove] = useState(false);
    const menuOpen = useRef(null);
    const menuClose = useRef(null);
    const menuWrapper = useRef(null);
    
    const onOpenBtnClick = () => {
        if(!bMove){
            menuWrapper.current.classList.add("is-opened");

            expended(!bMove);
            setBmove(true);
        }
    }

    const onCloseBtnClick = () => {
        if(bMove){
            menuWrapper.current.classList.remove("is-opened");
            
            expended(!bMove);
            setBmove(false);
        }
    }

    return (
        <nav className="top-nav" >
            <div className="menu-wrapper" ref={menuWrapper}>
                <ul className="menu" defaultSelected="">
                    {
                    menuList.map((v, i) => {
                        return (
                            <li eventKey={v.code}>
                                <Link to={v.path} className="linkText">
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />{v.name}
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
                <button className="menu-close" ref={menuClose} aria-label="close menu"
                    onClick={onCloseBtnClick}
                >✕</button>
            </div>
            <div className="fixed-menu">
                <button className="menu-open" ref={menuOpen} aria-label="open menu" 
                    onClick={onOpenBtnClick}>☰</button>
            </div>
        </nav>
    )
});
export default LeftMenu;