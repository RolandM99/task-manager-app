import React, { useState } from 'react';
// import FontAwesomeIcon from 'react';
import cursor from "../assets/cursor.png";

const SideBar = () => {

  const [side, setSide] = useState(true);

  return (
    <>
     <div className={`${side ? "w-60" : "w-12"} duration-300 h-screen bg-dark-one relative`}>
      <img id="pic"
        src={cursor} alt="img"
        className={`absolute cursor-pointer -right-3 rounded-full
        top-9 w-7 border-8 border-dark-one ${!side && "rotate-180"}`} 
          onClick={() => setSide(!side)}
        />
        <div className="flex flex-col">
          <span><i className="fab fa-github-square"></i></span>
          <span><i className="fab fa-linkedin"></i></span>
          <span><i className="fab fa-twitter-square"></i></span>
        </div>
     </div>
    </>
  );
}

export default SideBar;