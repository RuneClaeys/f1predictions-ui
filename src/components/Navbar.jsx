import { useStore } from '../core/hooks/useStore';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
   const { navbar, user } = useStore().state;

   return (
      <div className="navbar p-0 d-flex align-items-center  bg-primary text-white ">
         <div className="container navbar__content d-flex align-items-centerp-1">
            <div className="navbar__action col d-flex">
               {navbar.leftAction && (
                  <button onClick={navbar.leftAction} className="btn text-white py-0">
                     <i className={`fas ${navbar.leftActionIcon}`}></i>
                  </button>
               )}
            </div>
            <h4 className="mb-0 col-9 py-2 text-nowrap">{navbar.title}</h4>
            <div className="navbar__action col d-flex align-items-end">
               {navbar.rightAction && (
                  <button onClick={navbar.rightAction} className="btn text-white py-0">
                     <i className={`fas ${navbar.rightActionIcon}`}></i>
                  </button>
               )}
            </div>
            <Nav className="navbar__nav" defaultActiveKey="/home" as="ul">
               <Nav.Item as="li">
                  <Nav.Link to="/" className="text-white" exact activeClassName="fw-bold" as={NavLink}>
                     Home
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item as="li">
                  <Nav.Link to="/leaderboard" className="text-white" activeClassName="fw-bold" as={NavLink}>
                     Leaderboards
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item as="li">
                  <Nav.Link to="/settings" className="text-white" activeClassName="fw-bold" as={NavLink}>
                     Settings
                  </Nav.Link>
               </Nav.Item>
               {user?.is_admin && (
                  <Nav.Item as="li">
                     <Nav.Link to="/admin" className="text-white" activeClassName="fw-bold" as={NavLink}>
                        Admin
                     </Nav.Link>
                  </Nav.Item>
               )}
            </Nav>
         </div>
      </div>
   );
};

export default Navbar;
