import React from "react";
import "../static/css/navbar.css"

class NavBar extends React.Component{
    render(){
        return (
         <nav>
           <form>
               <div>
                <h2>facebook</h2>
               </div>
               <div className="forms">
                    <div className="emailPhone">
                        <label>email or phoen</label>
                        <input className="epIn"/>
                    </div>
                    <div className="pwd">
                        <label>password</label>
                        <input className="pwdIn"/>
                        <label><small>forgot password?</small></label>
                    </div>
                    <div>
                        <button>Log In</button>
                    </div>
               </div>


           </form>
         </nav>
        );
    }
}

export default NavBar;