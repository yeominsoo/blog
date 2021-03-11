/* eslint-disable */
import React, {useState, memo, useRef} from 'react';

import '../shared/App.css';

import TopMenu from '../components/topMenu';
import LeftMenu from '../components/leftMenu';
import MainContents from '../components/mainContents';

import Games from '../pages/games';
import Option from '../pages/Option';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const App = memo(() => {
  const [menuInfo, setMenuInfo] = useState([{ code: 'E2' , path: '/Home' , name : 'Home', compo : Home, icon: "fa fa-fw fa-home"},
                                            { code: 'WG', path: '/games' , name : '간단 웹게임', compo : Games, icon: "fa fa-gamepad"},
                                            { code: 'E1' , path: '/Option' , name : 'Option', compo : Option , icon: "fa fa-fw fa-wrench"},
                                            { code: 'E3' , path: '/Contact' , name : 'Contact', compo : Contact, icon: "fa fa-fw fa-envelope"},
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
