import React from "react";
import "../static/css/navbar.css"

class NavBar extends React.Component{
    render(){
        return (
         <nav>
            <ul>
            <li><a >facebook</a></li>
            <div>
            <div>
            <li><a >Email or Phone</a></li>
            <input></input>
            </div>
            <div>
            <li><a >Password</a></li>
            <input></input>
            </div>

            <small><a >Forgot account?</a></small>
            <li ><a className="active">Log In</a></li>


            </div>


            </ul>
         </nav>
        );
    }
}

export default NavBar;