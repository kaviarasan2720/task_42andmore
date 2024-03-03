import React,{useState,useEffect} from 'react'
import "../Page/Landingpage.css";

function Animater() {
  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const triggerPosition = 100; // Adjust this value as needed
  //     if (scrollTop > triggerPosition) {
  //       setAnimate(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div class="overall-div">
            <h1 >Popular Features</h1>
            <div  style={{display:'flex',justifyContent:'center',width:'100%'}}>
                       <p class="img1">Secured Data</p>
                        <p class="img2">Private and secure cloud hosting</p>
                        <p class="img3">Customer Support</p>
                        <p class="img4">Integration</p>
                        <p class="img5">Sales automation</p>
                        <p class="img6">Customized CRM</p>
                        <p class="img7">Multi-touch revenue attribution</p>
                        <p class="img8">Lead generation</p>
                        <p class="img9">Marketing automation</p>
            </div>
     
    </div>
  )
}

export default Animater