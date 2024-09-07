import React from "react";
import Typewriter from "typewriter-effect";
import data from "../database/localDB.json"

const Type = () => {
  const home = data.home;
    return (
        <Typewriter
          options={{
            strings: home.jobPositions,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type