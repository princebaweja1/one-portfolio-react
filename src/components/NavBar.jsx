import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 ">Prince Baweja</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-bold text-purple-300 hover:scale-105 duration-200"
            >

              <Link to={link} smooth duration={500} >{link}</Link>

            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default NavBar;
