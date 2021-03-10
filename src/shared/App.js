/* eslint-disable */
import React, {useState, memo, useRef} from 'react';
import 'shared/App.css';

import TopMenu from 'components/topMenu';
import LeftMenu from 'components/leftMenu';
import MainContents from 'components/mainContents';


const App = memo(() => {
  const [menuInfo, setMenuInfo] = useState([{ code: 'WG' , name : '간단 웹게임'},
                                              { code: 'E1' , name : '미등록1'},
                                              { code: 'E2' , name : '미등록2'},
                                            ]);
  const [getPage,setPage] = useState();
  const [exped, setExped] = useState(false);
  const menuContents = useRef(null);

  return (
    <> 
      <section className="App">
        <TopMenu />
        <MainContents page={getPage} exped={exped} menuContents={menuContents} />
        <div className="dotted-line"></div>
      </section>
      <LeftMenu menuList={menuInfo} callPage={setPage} expended={setExped} />
    
    </>
  );

});

export default App;
