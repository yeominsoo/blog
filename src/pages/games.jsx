import React, {memo, useState} from 'react';
import Button from 'react-bootstrap/Button';

import WordRelay from './games/wordRelay/wordRelay';
import NumberBaseball from './games/numberBaseball/NumberBaseball_hooks';
import Gugudan from './games/gugudan/gugudan';
import '../pages/Games.css';

const Games = memo(() => {
    const [btnVari, setBtnVari] = useState('');
    const [gamesInfo, setGamesInfo] = useState([{ code: 'W' , name : '끝말잇기'},
                                                { code: 'N' , name : '숫자야구'},
                                                { code: 'G' , name : '구구단'},
                                                { code: 'E1' , name : '기타1'},
                                                { code: 'E2' , name : '기타2'},
                                                { code: 'E3' , name : '기타3'},
                                                { code: 'E4' , name : '기타4'},
                                                ]);

                                                
    const [getPage,setPage] = useState();

    const fn_callGames = (c) => {
        let gameCode = c;
        if(gameCode === 'G')
        {
            setPage(<Gugudan  />);
        }
        else if(gameCode === 'N')
        {
            setPage(<NumberBaseball  />);
        }
        else if(gameCode === 'W')
        {
            setPage(<WordRelay  />);
        }else{
            setPage(<> </>);
        }
        setBtnVari(c);
    };

    return (
        <>
            <div className="btn-list">
                {
                    gamesInfo.map((v, i) => {
                        return (
                        <Button style={{padding: "10px 30px" }} variant={btnVari === v.code ? 'dark' : 'white'}
                        onClick={()=>{
                            return (
                                fn_callGames(v.code)
                            )}
                        } >{v.name}
                        </Button>
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