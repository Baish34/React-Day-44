import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-dark text-light">
   <div className="container pt-4">
     <h1 className="pb-3 display-4 fw-normal">My Social Media</h1>
     <nav> 
       <ul className="nav">
         <li className="nav-item">
           <NavLink className="nav-link" to="/">Home</NavLink>
         </li>
         <li className="nav-item">
            <NavLink className="nav-link" to="/userProfile">Profile</NavLink>
          </li>
       </ul>
     </nav>
   </div>
  </header>
)

export default Header;