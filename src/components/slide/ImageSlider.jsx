import React from 'react';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpg';

  const ImageSlider = () => {
    const images = [
        { url: image1 },
        { url: image2 },
        { url: image3 },
        { url: image4 },
        { url: image5 },
        { url: image6 },
        { url: image7 },
        { url: image8 },
      ];
      
    return (
      <> 
        <div className="slide-container" style={{
            width: '100%',
            height: '100%',
            top: '-100px'
        }}>
            <Fade transitionDuration="1000" duration="3000" autoplay="true" arrows="">
                {
                    images.map((v,i) => {
                        return (
                            <div className="each-fade" >
                                <img src={v.url} width="100%" alt="slide 이미지"/>
                            </div>
                        )
                    })
                }
                
            </Fade>
        </div>
      </>
    );
  }

  export default ImageSlider;
  