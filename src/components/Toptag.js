import React from 'react'
import circle from '../imges/circle.png';
import pentagon from '../imges/pentagen.png';
import square from '../imges/squre.png';
import stars from '../imges/stars.png';
import triangle from '../imges/triangle.png';

const images = [circle, pentagon, square, stars, triangle];

function Toptag({ image, content }) {
    return (
        <div style={{ display:"flex" ,flexDirection:"row",gap:"20px",marginTop:"20px",padding:'5px'}}>
          <img src={image} alt="Shape" style={{ width: '25px', height: '25px' }} />
          <p style={{color:"rgba(255, 255, 255, 0.44)",fontWeight:"800",marginTop:"1px"}}>{content}</p>
        </div>
      );
    }
export const ToptagApps=()=> {
    const contentArray = ["API Integration with 100+ brands", "Privacy  at best of your data", "Round the clock assistant", "WhatsApp verified business account", "Guaranteed payment security"];
    
    return (
        <div style={{display:"flex" ,flexDirection:"row",backgroundColor:"#394059",justifyContent:"space-around",paddingBottom:"20px",alignItems:"center"}}>
        {contentArray.map((content, index) => (
            <Toptag key={index} image={images[index]} content={content} />
        ))}
        </div>
    );
    }
export default Toptag