import React, {memo, useEffect} from 'react';

const { kakao } = window;
let infowindow = new kakao.maps.InfoWindow({zIndex:1});
const KakaoMap = memo(({searchPlace}) => {
  
  useEffect(() => {
    mapScript();
  }, [searchPlace]);

  const mapScript = () =>{
    const container = document.getElementById('kakaoMap');
    const options = {
      center: new kakao.maps.LatLng(37.530336146543085, 126.89737488656276),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places(); 

    const placesSearchCB = (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {

            let bounds = new kakao.maps.LatLngBounds();

            for (let i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }       

            map.setBounds(bounds);
        }
    }

    const displayMarker = (place) => {
        let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });
        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent(`<div style="padding:5px;font-size:12px;">${place.place_name} ${place.y},${place.x}</div>`);
            infowindow.open(map, marker);
        });
    }
    
    ps.keywordSearch(searchPlace, placesSearchCB); 
  }
  return (
    <>
        <div id="kakaoMap" style={{
            width:'600px',
            height:'400px'
        }}>
        </div>
    </>
  );
})

export default KakaoMap;