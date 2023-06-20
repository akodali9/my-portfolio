import React from "react";
import "../pages/css/Projects.css";
import Weatherimg from "../assets/imgs/WeatherApp.png";
import WhatsappImg from "../assets/imgs/WhatsappClone.png";
import SalesforceinternImg from "../assets/imgs/salesforce-developer-intern-certificate.png";
// import { useState } from "react";
// import { Footer } from "../components/footer/footer";
// import { motion } from "framer-motion";

// export const Expertise = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = [
//     {
//       title: "Weather Application",
//       description:
//         "A Real-time Weather Application that helps users to find out thepresent Temperature and a week forecast of that particular city.This was made possible by using HTML, CSS, REACT JS.",
//       icon: Weatherimg,
//       link: "https://akodali9.github.io/weather_application/",
//     },
//     {
//       title: "WhatsApp Clone",
//       description:
//         "This App is a Front-end clone of the major social platfrom Built Using Flutter Framework. An Open-Source frameWork Used to build Cross-platform Apps maintained by Google. It has greater library support.",
//       icon: WhatsappImg,
//       link: "https://github.com/akodali9/whatsappclone/",
//     },
//   ];
//   const updateIndex = (newIndex) => {
//     if (newIndex < 0) {
//       newIndex = items.length - 1;
//     } else if (newIndex >= items.length) {
//       newIndex = 0;
//     }

//     setActiveIndex(newIndex);
//   };
//   return (
//     <div className="work-experince">
//       <p className="Worktitle">Recent Works</p>
//     <div className="carousel">
//       <div
//         className="inner"
//         style={{ transform: `translate(-${activeIndex * 100}%)`
//      }}
//       >
//         {items.map((item) => {
//           return <CarouselItem item={item} width={"100%"} />;
//         })}
//       </div>

//       <div className="carousel-buttons">
//         <button
//           className="button-arrow"
//           onClick={() => {
//             updateIndex(activeIndex - 1);
//           }}
//         >
//           <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
//         </button>
//         <div className="indicators">
//           {items.map((item, index) => {
//             return (
//               <button
//                 className="indicator-buttons"
//                 onClick={() => {
//                   updateIndex(index);
//                 }}
//               >
//                 <span
//                   className={`material-symbols-outlined ${
//                     index === activeIndex
//                       ? "indicator-symbol-active"
//                       : "indicator-symbol"
//                   }`}
//                 >
//                   radio_button_checked
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//         <button
//           className="button-arrow"
//           onClick={() => {
//             updateIndex(activeIndex + 1);
//           }}
//         >
//           <span class="material-symbols-outlined">arrow_forward_ios</span>
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export const CarouselItem = ({ item, width }) => {
//   return (
//     <div className="carousel-item" style={{ width: '100%' }}>
//       <div></div>
//       <a href={item.link} target="_blank" rel="noreferrer"><img className="carousel-img" src={item.icon} alt="carouel-display@img"/></a>
//       <div className="carousel-item-text">{item.description}</div>
//     </div>
//   );
// };

// {/* <motion.div initial={{ y: 25, opacity: 0 }}
// animate={{ y: 0, opacity: 1 }}
// transition={{
//   delay: 0.2,
//   duration: 0.75,
// }}>
//   <div className="mainp" id= "mainp">
//     <p className="headingp">Work Experience</p>
//     <div className="Work-Exeperince">
//       <div className="project">
//         <div className="project-details">
//           <p className="title">Salesforce Developer Intern</p>
//           <div className="desc">
//             <p>
//               During my internship, I had the opportunity of Learning,
//               Developing and maintaining Salesforce applications.
//                 Staying up-to-date on the latest Salesforce features and
//                 trends present in the market.
//             </p>
//           </div>
//         </div>
//         <a
//           href="https://smartinternz.com/internships/salesforce_certificates/45c7a284efa7d07f7bb5c9afb3080ffd"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             src={SalesforceinternImg}
//             width={750}
//             className="expertise-img"
//             alt="Weather Application"
//           />
//         </a>
//       </div>
//       <br />
//       <br />
//     </div>
//     <p className="headingp">Projects</p>
//     <div className="project">
//       <div className="project-details">
//         <p className="title">Weather Application</p>
//         <div className="desc">
//           <p>
//             A Real-time Weather Application that helps users to find out the
//             present Temperature and a week forecast of that particular city.
//             This was made possible by using HTML, CSS, REACT JS.
//           </p>
//           <br />
//           <div>
//             <p>Api's Used :-</p>
//             <p>{"-->"} Open Weather Api</p>
//             <p>{"-->"} GeoDB Cities Api</p>
//           </div>
//         </div>
//       </div>
//       <a
//         href="https://akodali9.github.io/weather_application/"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <img
//           src={Weatherimg}
//           width={750}
//           className="expertise-img"
//           alt="Weather Application"
//         />
//       </a>
//     </div>
//     <div className="project">
//       <div className="project-details">
//         <p className="title">WhatsApp Clone</p>
//         <div className="desc">
//           <p>
//             This App is a Front-end clone of the major social platfrom Built
//             Using Flutter Framework. An Open-Source frameWork Used to build
//             Cross-platform Apps maintained by Google. It has greater library
//             support.
//           </p>
//         </div>
//       </div>
//       <a
//         href="https://github.com/akodali9/whatsappclone"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <img
//           src={WhatsappImg}
//           width={450}
//           className="expertise-img whatsapp-img"
//           alt="WhatsApp Clone"
//         />
//       </a>
//     </div>
//   </div>
// </motion.div>  */}

export const Projects = () => {
  return (
    <div className="works-wrapper">
      <p className="works-heading">Recent Works</p>
      <div className="cards-work-container">
      <Card
        img={Weatherimg}
        title={"Weather Application"}
        desc={
          "A Real-time weather Application. This was made possible by using HTML, CSS, REACT JS."
        }
        link = {"https://akodali9.github.io/weather_application/"}
        type = {"Web Development"}
      />
      <Card
        img={WhatsappImg}
        title={"Whatsapp Clone"}
        desc={
          "This App is a Front-end clone of the major social platfrom Built Using Flutter Framework"
        }
        link= "https://github.com/akodali9/whatsappclone/"
        type = "App Development"
      />
      </div>
      
    </div>
  );
};

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt={"weather img"} className="card__image"/>
        <p className="card__title">{props.title}</p>
        {/* <p className="card__description">{props.type}</p> */}
        <p className="card__description">{props.desc}</p>
      </div>
      <a target="_blank" rel="noreferrer" href={props.link} className="card__btn">View Project</a>
    </div>
  );
}
