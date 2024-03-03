import React from 'react'
import Rajen from "../imges/jajen.png"
import SPIHER from "../imges/SPIHER.png"
import Rajeneye from'../imges/rajaneye.png'
import Rahelak from'../imges/REC.png'
import Rama from'../imges/ramachandra.png'
import Kings from '../imges/kings.png'
import stares_3 from '../imges/stares_3.png'
function Tag3() {
  return (
    <div style={{padding:"50px"}}>
        <h1 style={{textAlign:"center"}}><img src={stares_3} />Trusted by global companies</h1>
        <div className='tagthree'>
            <img src={Rajen} />
            <img src={SPIHER} />
            <img src={Rajeneye} />
            <img src={Rahelak} />
            <img src={Rama} />
            <img src={Kings} />

        </div>
    </div>
  )
}

export default Tag3