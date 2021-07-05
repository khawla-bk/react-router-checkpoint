import React from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';



function Trailer(props) {
 
    const trailer= props.location.state
    return (
        <div>
     
    <h1>Movie's Trailer</h1>
    <ReactPlayer url={trailer} />
  

    <Link to='/'>previous</Link>
        </div>

    )
}

export default Trailer;
