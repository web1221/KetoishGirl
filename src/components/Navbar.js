import React from "react";
import { Link } from 'react-router-dom';


function Navbar(){

  return (
    <div>
    <Link to="/RaceList">
  Races
    </Link>
    </div>
  );
}

export default Navbar;
