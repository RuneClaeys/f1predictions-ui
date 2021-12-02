import { Table } from 'react-bootstrap';

const Summary = () => {
   return (
      <Table className="mb-0">
         <thead>
            <tr>
               <th style={{ top: '0' }} className="text-center position-sticky bg-white">
                  Player
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="text-center position-sticky bg-white">
                  Quali
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="text-center position-sticky bg-white">
                  Race
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="text-center position-sticky bg-white">
                  Other
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="text-center position-sticky bg-white">
                  Total
               </th>
            </tr>
         </thead>
         <tbody>
            {[...Array(15)].map((_, i) => {
               return (
                  <tr key={i}>
                     <td>Thibault D.</td>
                     <td className="text-center">32</td>
                     <td className="text-center">54</td>
                     <td className="text-center">12</td>
                     <td className="text-center">
                        <strong>98</strong>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </Table>
   );
};

export default Summary;
