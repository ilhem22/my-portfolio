import React from "react";
import Typewriter from "typewriter-effect";
import '../new.css';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
             "Fronted React Developer " ,"Python Developer  "
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
     
    />
 
  );
}

export default Type;
