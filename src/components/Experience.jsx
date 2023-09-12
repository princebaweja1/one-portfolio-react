import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import github from "../assets/experience/github.png";
import java from "../assets/experience/java.png";
import python from "../assets/experience/python.png";
import cplusplus from "../assets/experience/c++.png";
import sql from "../assets/experience/sql.png";



const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600' 
        },
        {
            id: 5,
            src: cplusplus,
            title: 'C++',
            style: 'shadow-white'
        },
        {
          id: 6,
          src: sql,
          title: 'SQL',
          style: 'shadow-sky-400' 
        },
        {
            id: 7,
            src: python,
            title: 'Python',
            style: 'shadow-orange-400'
        },
        {
            id: 8,
            src: java,
            title: 'Java',
            style: 'shadow-red-400'
        },
        {
          id: 9,
          src: github,
          title: 'Github',
          style: 'shadow-gray-400'
        }
    ]
  return (
    <div id="Experience"
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6" id="description">My Experience with a diverse range of technologies.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 grap-8 text-center py-8 px-12 sm:px-0">

        {
        techs.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))

        }
          
        </div>
      </div>
    </div>
  );
};

export default Experience;
