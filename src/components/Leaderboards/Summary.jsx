import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { API_RESULTS, API_SEASONS } from '../../core/endpoints/endpoints';
import { useGet } from '../../core/hooks/useGet';
import { useStore } from '../../core/hooks/useStore';

const Summary = () => {
   const { current_season } = useStore().state;
   const { fetch, loading, error, data: results } = useGet(null, { initialFetch: false });

   useEffect(() => {
      if (current_season) {
         fetch(`${API_SEASONS}/${current_season.id}${API_RESULTS}`);
      }
   }, [current_season]);

   return (
      <Table className="mb-0" striped>
         <thead>
            <tr>
               <th style={{ top: '0' }} className="position-sticky bg-light">
                  Player
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="border-0 text-center position-sticky bg-light">
                  Quali
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="border-0 text-center position-sticky bg-light">
                  Race
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="border-0 text-center position-sticky bg-light">
                  Other
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="border-0 text-center position-sticky bg-light">
                  Total
               </th>
            </tr>
         </thead>
         <tbody>
            {(results || []).map((result) => {
               return (
                  <tr key={result.id}>
                     <td>{result?.user?.user_name}</td>
                     <td className="text-center">{result?.qualifying_points}</td>
                     <td className="text-center">{result?.race_points}</td>
                     <td className="text-center">{result?.other_points}</td>
                     <td className="text-center">
                        <strong>{result?.total_points}</strong>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </Table>
   );
};

export default Summary;
