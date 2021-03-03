/* eslint-disable */
import React, {useState, memo} from 'react';
import './App.css';

import Games from './pages/games';
import WordRelay from './games/WordRelay';
import NumberBaseball from './games/NumberBaseball_hooks';
import Gugudan from './games/gugudan';
import LeftMenu from './pages/leftMenu';

const App = memo(() => {
  const [gamesInfo, setGamesInfo] = useState([{ code: 'W' , name : '끝말잇기', variant: 'info'},
                                              { code: 'N' , name : '숫자야구', variant: 'dark' },
                                              { code: 'G' , name : '구구단', variant: 'primary' },
                                              { code: 'E' , name : '기타1', variant: 'warning' },
                                              { code: 'E' , name : '기타2', variant: 'success' },
                                              { code: 'E' , name : '기타3', variant: 'danger' },
                                              { code: 'E' , name : '기타4', variant: 'link' },
                                            ]);
  const [getPage,setPage] = useState();
  const [exped, setExped] = useState(false);

  const fn_callGames = (gameCode) => {
    if(gameCode === 'G')
    {
        console.log("구구단");
        setPage(<Gugudan  />);
    }
    else if(gameCode === 'N')
    {
        console.log("숫자야구");
        setPage(<NumberBaseball  />);
    }
    else if(gameCode === 'W')
    {
        console.log("끝말잇기");
        setPage(<WordRelay  />);
    }
  };

  return (
    <> 
    <LeftMenu onSelectToggle={fn_callGames} onToggleLeftMenu={setExped} menuList={gamesInfo}/>
    <main className="App" style={{
                        marginLeft: exped ? 240 : 64,
                        padding: '15px 20px 0 20px'
                    }}>
        <div className="black-nav black-back">
          <div>개발 Blog</div>
        </div>
        <div className="btn-list">
            {
              gamesInfo.map((v, i) => {
                return (
                    <Games gamesInfo={v} fn_callGames={fn_callGames} />
                );
              })
            }
        </div>
        <div className="list">
          {getPage}
        </div>
        <div className="dotted-line"></div>
      </main>
    </>
  );

});

export default App;
