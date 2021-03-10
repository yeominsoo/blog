import React, {memo, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import './leftMenu.css';

const LeftMenu = memo(({menuList, expended}) => {
    const [bMove, setBmove] = useState(false);
    const [arrow, setArrow] = useState('<');
    const menuOpen = useRef(null);
    const menuResize = useRef(null);
    const menuWrapper = useRef(null);
    
    const onOpenBtnClick = () => {
        if(!bMove){
            menuWrapper.current.classList.add("is-opened");
            menuResize.current.classList.add("is-opened");

            expended(!bMove);
            setBmove(true);
        }else{
            menuWrapper.current.classList.remove("is-opened");
            menuResize.current.classList.remove("is-opened");
            
            expended(!bMove);
            setBmove(false);
        }
    }

    const onResizeBtnClick = () => {
        if(arrow === '<'){
            menuWrapper.current.classList.add("is-resized");
            menuResize.current.classList.add("is-resized");
            setArrow('>');
        }else{
            menuWrapper.current.classList.remove("is-resized");
            menuResize.current.classList.remove("is-resized");
            setArrow('<');
        }
    }

    return (
        <nav className="top-nav" >
            <div className="menu-wrapper" ref={menuWrapper}>
                <ul className="menu" defaultSelected="">
                    {
                    menuList.map((v, i) => {
                        return (
                            <Link to={v.path} className="linkText" key={i}>
                                <li eventKey={v.code}>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.35em' }} >🦌 </i>{v.name}
                                </li>
                            </Link>
                        )
                    })
                    }
                </ul>
            </div>
            <div className="menu-resize" ref={menuResize} >
                <button className="btn-resize" aria-label="resize menu" 
                    onClick={onResizeBtnClick}>{arrow}</button>
                
            </div>
            <div className="fixed-menu">
                <button className="menu-open" ref={menuOpen} aria-label="open menu" 
                    onClick={onOpenBtnClick}>☰</button>
            </div>
        </nav>
    )
});
export default LeftMenu;