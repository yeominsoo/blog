import React, {memo, useState} from 'react';
import './games.css';
import Button from 'react-bootstrap/Button';

import WordRelay from '../games/wordRelay/wordRelay';
import NumberBaseball from '../games/numberBaseball/NumberBaseball_hooks';
import Gugudan from '../games/gugudan/gugudan';

const Games = memo(() => {
    
  const [gamesInfo, setGamesInfo] = useState([{ code: 'W' , name : '끝말잇기', variant: 'info'},
                                                { code: 'N' , name : '숫자야구', variant: 'dark' },
                                                { code: 'G' , name : '구구단', variant: 'primary' },
                                                { code: 'E' , name : '기타1', variant: 'warning' },
                                                { code: 'E' , name : '기타2', variant: 'success' },
                                                { code: 'E' , name : '기타3', variant: 'danger' },
                                                { code: 'E' , name : '기타4', variant: 'link' },
                                                ]);


                                                
    const [getPage,setPage] = useState();

    const fn_callGames = (c) => {
        let gameCode = c;
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
        <div className="btn-list">
            {
                gamesInfo.map((v, i) => {
                    return (
                    <Button variant={v.variant} onClick={()=>{
                        return (
                            fn_callGames(v.code)
                        )}
                    } >{v.name}</Button>
                    )
                })
            }
        </div>
        <div className="games-contents">
            {getPage}
        </div>
        </>
    )
});

export default Games;