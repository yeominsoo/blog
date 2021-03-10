/* eslint-disable */
import React, {useState, memo, useRef} from 'react';

import '../shared/App.css';

import TopMenu from '../components/topMenu';
import LeftMenu from '../components/leftMenu';
import MainContents from '../components/mainContents';

import Games from '../pages/games';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = memo(() => {
  const [menuInfo, setMenuInfo] = useState([{ code: 'WG', path: '/games' , name : '간단 웹게임', compo : Games},
                                              { code: 'E1' , path: '/About' , name : 'About', compo : About },
                                              { code: 'E2' , path: '/Home' , name : 'Home', compo : Home},
                                              { code: 'E3' , path: '/NotFound' , name : 'NotFound', compo : NotFound},
                                            ]);
  const [exped, setExped] = useState(false);

  return (
    <> 
      <section className="App">
        <LeftMenu menuList={menuInfo} expended={setExped} />
        <TopMenu />
        <MainContents exped={exped} menuInfo={menuInfo}/>
      </section>
    </>
  );

});

export default App;
