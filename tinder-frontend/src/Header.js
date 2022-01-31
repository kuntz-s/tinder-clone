import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'



const Header=()=>{
    return(
        <div className= "header" >
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
           <img className="header_logo" 
           src="https://toppng.com/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png" alt="tinder logo"
           />
           <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
           </IconButton>
            
        </div>
    )
}

export default Header;