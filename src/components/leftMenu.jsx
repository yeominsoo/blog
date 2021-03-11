import React, {memo, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import './leftMenu.css';
import 'font-awesome/css/font-awesome.min.css';

const LeftMenu = memo(({menuList, expended, resized}) => {
    const leftArrow = <i className="fa fa-angle-left" aria-hidden="true"></i>;
    const rightArrow = <i className="fa fa-angle-left" aria-hidden="true"></i>;

    const menuResize = useRef(null);
    const menuWrapper = useRef(null);
    
    const [bMove, setMove] = useState(false);
    const [bResize, setResize] = useState(true);
    const [eIcon, setIcon] = useState(leftArrow);
    

    const onOpenBtnClick = () => {
        if(!bMove){
            menuWrapper.current.classList.add("is-opened");
            menuResize.current.classList.add("is-opened");

            expended(!bMove);
            setMove(true);
        }else{
            menuWrapper.current.classList.remove("is-opened");
            menuResize.current.classList.remove("is-opened");
            
            expended(!bMove);
            setMove(false);
        }
    }

    const onResizeBtnClick = () => {
        if(bResize){
            menuWrapper.current.classList.add("is-resized");
            menuResize.current.classList.add("is-resized");
            resized(!bResize);
            setResize(!bResize);
            setIcon(rightArrow);
        }else{
            menuWrapper.current.classList.remove("is-resized");
            menuResize.current.classList.remove("is-resized");
            resized(!bResize);
            setResize(!bResize);
            setIcon(leftArrow);
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
                                    <i className={`${v.icon}`} style={{ fontSize: '1.75em', paddingLeft:'5px', paddingRight:'50px', paddingTop:'20px'}}/> {v.name}
                                </li>
                            </Link>
                        )
                    })
                    }
                </ul>
            </div>
            <div className="menu-resize" ref={menuResize} >
                <button className="btn-resize" aria-label="resize menu" 
                    onClick={onResizeBtnClick}>{eIcon}</button>
                
            </div>
            <div className="fixed-menu">
                <button className="menu-open" aria-label="open menu" 
                    onClick={onOpenBtnClick}><i className="fa fa-bars" aria-hidden="true"></i></button>
            </div>
        </nav>
    )
});
export default LeftMenu;