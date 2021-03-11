import React, { useState } from "react";
import MapContainer from "./kakaoMap";
import Button from 'react-bootstrap/Button';

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
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="장소 찾기"
          onChange={onChange}
          value={inputText}
        />
        <Button type="submit" variant="info">검색</Button>
      </form>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;