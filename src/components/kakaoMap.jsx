import React, {useEffect, memo} from 'react';

const { kakao } = window;
let infowindow = new kakao.maps.InfoWindow({zIndex:1});
const KakaoMap = memo(({ searchPlace }) => {

    useEffect(() => {
        const container = document.getElementById('kakaoMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
        // 장소 검색 객체를 생성
        const ps = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색
        ps.keywordSearch(searchPlace, placesSearchCB);
        // 키워드 검색 완료 시 호출되는 콜백함수
        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
              let bounds = new kakao.maps.LatLngBounds();
      
              for (let i = 0; i < data.length; i++) {
                displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
              }
              map.setBounds(bounds);
            }
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x),
            });
            
            // 마커에 클릭이벤트를 등록
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
          }
        }, [searchPlace]);

    return (
        <div id="kakaoMap" style={{
            width:'500px',height:'400px'
        }}></div>
    );
})

export default KakaoMap;