
// const Tag2 = () => {
//   const Card = ({ title, icon, content }) => (
//     <div className="Card-content" >
//       <div className="Card-icon">{icon}</div>
//       <h6 className="Card-title">{title}</h6>
//       <p>{content}</p>
//     </div>
//   );
//   const ConentArray = [
//     {
//       icon: "",
//       heading: "Engineered to maximise performance",
//       content:
//         "Our meticulously crafted CRM solution streamlines operations, enhances productivity, and drives informed decisions with robust data analytics.",
//     },
//     {
//       icon: "",
//       heading: "Speed to market implementation",
//       content:
//         "Begin your CRM journey within minutes and leverage our pre-built templates, workflows and automations for seamless setup and rapid implementation.",
//     },
//     {
//       icon: "",
//       heading: "Omni-channel Engagement",
//       content:
//         "Ensure consistent interactions and insights across multiple channels for a superior, personalised experience.",
//     },
//     {
//       icon: "",
//       heading: "Bespoke customization for your organization",
//       content:
//         "Digital transformation is not a one-size-fits-all process: 42CRM solutions offer tailored customisation to perfectly fit your unique business needs.",
//     },
//     {
//       icon: "",
//       heading: "Personalised training and expert migration support",
//       content:
//         "Proficient migration assistance benefited from professional coaching, unlocking your team's true potential.",
//     },

//     {
//       icon: "",
//       heading: "Increased visibility",
//       content:
//         "Ensure consistent interactions and insights across multiple channels for a superior, personalised experience.",
//     },
//   ];
//   return (
//     <div
//       style={{
//         backgroundColor: "#d82a69",
//         color: "white",
//         height: "100vh",
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <div className="main-heading">Why does 42CRM set you apart?</div>
//       <div className="Card">
//         {ConentArray.map((o) => (
//           <Card icon={o.icon} title={o.heading} content={o.content} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tag2;
// import React from "react";
import React from "react";
import "../Page/Landingpage.css"; 
import Vector from "../imges/Vector.png";
import Vector_1 from "../imges/Vector_1.png";
import Vector_2 from "../imges/Vector_2.png";
import Connection from "../imges/Connection.png";
import Eye from "../imges/Eye.png";

const Tag2 = () => {
  const Card = ({imgs,color,title, content }) => (
    <div className="Card-content">
      <div style={{width:"50px",height:"50px",backgroundColor:color}}>
          <img src={imgs} style={{padding:"15px" ,height:"20px"}}/>
      </div>
      <h6 className="Card-title">{title}</h6>
      <p>{content}</p>
    </div>
  );

  const ContentArray = [
    {
      img:Vector,
      color:"#5AFFF6",
      heading: "Engineered to maximise performance",
      content:
        "Our meticulously crafted CRM solution streamlines operations, enhances productivity, and drives informed decisions with robust data analytics.",
    },
    {
      img:Vector_1,
      color:"#ED80FF",
      heading: "Speed to market implementation",
      content:
        "Begin your CRM journey within minutes and leverage our pre-built templates, workflows and automations for seamless setup and rapid implementation.",
    },
    {
      img:Connection,
      color:"#FCEC52",
      heading: "Omni-channel Engagement",
      content:
        "Ensure consistent interactions and insights across multiple channels for a superior, personalised experience.",
    },
    {
      img:Vector,
      color:"#898EFF",
      heading: "Bespoke customization for your organization",
      content:
        "Digital transformation is not a one-size-fits-all process: 42CRM solutions offer tailored customisation to perfectly fit your unique business needs.",
    },
    {
      img:Vector_2,
      color:"#73FF71",
      heading: "Personalised training and expert migration support",
      content:
        "Proficient migration assistance benefited from professional coaching, unlocking your team's true potential.",
    },
    {
      img:Eye,
      color:"#FC5C52",
      heading: "Increased visibility",
      content:
        "Ensure consistent interactions and insights across multiple channels for a superior, personalised experience.",
    },
  ];

  return (
    <div className="grid-container">
      <div className="main-heading">Why does 42CRM set you apart?</div>
      <div className="Card-grid">
        {ContentArray.map((item, index) => (
          <Card key={index} imgs={item.img} color={item.color} title={item.heading} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Tag2;
