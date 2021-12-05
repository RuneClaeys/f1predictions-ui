import { NavLink } from 'react-router-dom';

const BottomNavBar = () => {
   return (
      <nav className="bg-primary d-flex">
         <NavLink to="/" exact activeClassName="opacity-100" className="btn btn-link py-2 my-1 col text-white opacity-50">
            <i className="fas fa-home"></i>
         </NavLink>
         <NavLink to="/leaderboard" exact activeClassName="opacity-100" className="btn btn-link py-2 my-1 col text-white opacity-50">
            <i className="fas fa-poll"></i>
         </NavLink>
      </nav>
   );
};

export default BottomNavBar;