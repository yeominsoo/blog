import React, {useState} from 'react';
import './SlidePage.css';
import ImageSlider from '../components/slide/ImageSlider';

const SlidePage = () => {
    const [menuList, setMenuList] = useState(
        [
            {name: "메뉴1", path: "/menu1"},
            {name: "메뉴2", path: "/menu2"},
            {name: "메뉴3", path: "/menu3"}
        ]
    );

    return (
        <>
            {/* <div className="top-container">
                <div className="top-bg">
                </div>
                <div className="top-wrapper">
                    <div className="top-menu-wd">
                        <ul className="top-menu">
                            {
                                menuList.map((v,i)=>{
                                    return (
                                        <li><a href={v.path}>{v.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className="slide-container">
                <div className="contents-wrapper" >
                    <div className="contents-viewport">
                        <ImageSlider />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlidePage;