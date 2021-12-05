import Table from 'react-bootstrap/Table';

const PerRace = () => {
   return (
      <Table className="mb-0 ">
         <thead>
            <tr>
               <th className="position-sticky bg-light" style={{ left: '0', top: '0', zIndex: '1020' }}>
                  Player
               </th>
               {[...Array(20)].map((_, i) => {
                  return (
                     <th key={i} className="text-nowrap text-center position-sticky bg-light" style={{ top: '0' }}>
                        Dutch GP
                     </th>
                  );
               })}
               <th className="position-sticky bg-light" style={{ right: '0', top: '0', zIndex: '1020' }}>
                  Total
               </th>
            </tr>
         </thead>
         <tbody>
            {[...Array(15)].map((_, i) => {
               return (
                  <tr key={i}>
                     <td className="position-sticky bg-white text-nowrap" style={{ left: '0' }}>
                        Thibault D.
                     </td>
                     {[...Array(20)].map((_, j) => {
                        return (
                           <td className="text-center" key={j}>
                              35
                           </td>
                        );
                     })}
                     <td className="position-sticky bg-white text-center" style={{ right: '0' }}>
                        <strong>98</strong>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </Table>
   );
};

export default PerRace;
