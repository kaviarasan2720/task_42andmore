import React from 'react'
import tick from '../imges/tick.png';
function Box({ title}) {
 
    return (
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"white",borderRadius:"50px",border: '1px solid black', margin: '10px', width: '189px',height:"55px"}}>
          <img src= {tick} style={{marginTop:"14px",marginRight:"7px",width: '30px',height:"30px"}} />
          <h5 style={{color:"#D82A69",marginTop:"19px"}}>{title}</h5>
        </div>
    
  );
}

export const App = () => {
    return (
      <div style={{display:"flex", flexDirection:"row",marginLeft:"40px"}}>
        <Box title="Acquire Insights" />
        <Box title="Amplify Impact" />
        <Box title="Maximize ROI" />
      </div>
    );
  }

export default Box