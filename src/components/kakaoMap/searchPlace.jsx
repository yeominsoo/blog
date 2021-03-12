import React, { useState } from "react";
import MapContainer from "./kakaoMap";
import Button from 'react-bootstrap/Button';

import './searchPlace.css';

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <div className="map-wrap">
        <MapContainer searchPlace={place} className="container-map"/>
        <form className="inputForm" onSubmit={handleSubmit}>
          <input
            placeholder="장소 찾기"
            onChange={onChange}
            value={inputText}
          />
          <Button type="submit" style={{
            
          }}>검색</Button>
        </form>
      </div>
    </>
  );
};

export default SearchPlace;