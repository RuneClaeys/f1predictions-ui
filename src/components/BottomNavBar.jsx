import { NavLink } from 'react-router-dom';
import { useStore } from '../core/hooks/useStore';

const BottomNavBar = () => {
   const { user } = useStore().state;

   return (
      <nav className="bg-primary d-flex">
         <NavLink to="/" exact activeClassName="opacity-100" className="btn btn-link py-2 my-1 col text-white opacity-50">
            <i className="fas fa-home"></i>
         </NavLink>
         <NavLink to="/leaderboard" exact activeClassName="opacity-100" className="btn btn-link py-2 my-1 col text-white opacity-50">
            <i className="fas fa-poll"></i>
         </NavLink>
         <NavLink to="/settings" exact activeClassName="opacity-100" className="btn btn-link py-2 my-1 col text-white opacity-50">
            <i className="fas fa-cog"></i>
         </NavLink>
         {user?.is_admin && (
            <NavLink to="/admin" exact activeClassName="opacity-100" className="btn btn-link py-2 my-1 col text-white opacity-50">
               <i className="fas fa-users-cog"></i>
            </NavLink>
         )}
      </nav>
   );
};

export default BottomNavBar;
