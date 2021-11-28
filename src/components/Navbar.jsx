import { useStore } from '../core/hooks/useStore';

const Navbar = () => {
   const { navbar } = useStore().state;

   return (
      <div className="d-flex align-items-center bg-primary text-white p-1">
         <div className="col">
            {navbar.leftAction && (
               <button onClick={navbar.leftAction} className="btn text-white py-0">
                  <i className={`fas ${navbar.leftActionIcon}`}></i>
               </button>
            )}
         </div>
         <h4 className="mb-0 col-9 text-center py-2 ">{navbar.title}</h4>
         <div className="col">
            {navbar.rightAction && (
               <button onClick={navbar.rightAction} className="btn text-white py-0">
                  <i className={`fas ${navbar.rightActionIcon}`}></i>
               </button>
            )}
         </div>
      </div>
   );
};

export default Navbar;
