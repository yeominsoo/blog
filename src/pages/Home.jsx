import React from 'react';

import KakoMap from '../components/kakaoMap';
import SearchPlace from '../components/searchPlace';

const Home = () => {
    return (
        <>
            <div className="home-banner">
            
            </div>
            <div >
                <SearchPlace />
                <KakoMap />
            </div>
            
        </>
    )
};


export default Home;