import React, {memo} from 'react';
import Button from 'react-bootstrap/Button';

const Games = memo(({gamesInfo, fn_callGames}) => {
    return (
        <>
        <Button variant={gamesInfo.variant} onClick={() => fn_callGames(gamesInfo.code)} gamesInfo={gamesInfo.code} >{gamesInfo.name}</Button>
        </>
    )
});

export default Games;