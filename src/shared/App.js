/* eslint-disable */
import React, {useState, memo, useRef} from 'react';

import '../shared/App.css';

import TopMenu from '../components/frame/topMenu';
import LeftMenu from '../components/frame/leftMenu';
import MainContents from '../components/frame/mainContents';

import Games from '../pages/Games';
import SlidePage from '../pages/SlidePage';
import MapPage from '../pages/MapPage';
import Option from '../pages/Option';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const App = memo(() => {
  const [menuInfo, setMenuInfo] = useState([{ code: 'HM' , path: '/Home' , name : 'Home', compo : Home, icon: "fa fa-fw fa-home"},
                                            { code: 'OP' , path: '/Option' , name : 'Option', compo : Option , icon: "fa fa-fw fa-wrench"},
                                            { code: 'CT' , path: '/Contact' , name : 'Contact', compo : Contact, icon: "fa fa-fw fa-envelope"},
                                            { code: 'MP', path: '/map' , name : '지도보기', compo : MapPage, icon: "fa fa-fw fa-map"},
                                            { code: 'SL', path: '/slide' , name : '슬라이드', compo : SlidePage, icon: "fa fa-fw fa-image"},
                                            { code: 'WG', path: '/games' , name : '간단 웹게임', compo : Games, icon: "fa fa-fw fa-gamepad"},
                                            ]);
  const [exped, setExped] = useState(false);
  const [resized, setResized] = useState(true);

  return (
    <> 
      <section className="App">
        <LeftMenu menuList={menuInfo} expended={setExped} resized={setResized} />
        <TopMenu />
        <MainContents exped={exped} menuInfo={menuInfo} resized={resized} />
      </section>
    </>
  );

});

export default App;

