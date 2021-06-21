import React, { useState } from "react";
import { Link } from "react-router-dom";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input type="text" placeholder="Name" className="joinInput" />
        </div>
        <div>
          <input type="text" placeholder="Room" className="joinInput" />
        </div>
        <Link to="/chat">
          <button className="button" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
