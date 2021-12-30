import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { API_RESULTS, API_SEASONS } from '../../core/endpoints/endpoints';
import { useGet } from '../../core/hooks/useGet';
import { useStore } from '../../core/hooks/useStore';
import Placeholder from 'react-bootstrap/Placeholder';
import { useTranslation } from 'react-i18next';

const Summary = () => {
   const { current_season } = useStore().state;
   const { fetch, loading, error, data: results } = useGet(null, { initialFetch: false });
   const { t } = useTranslation();

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
                  {t('leaderboard.player')}
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="border-0 text-center position-sticky bg-light">
                  {t('home.quali')}
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="border-0 text-center position-sticky bg-light">
                  {t('global.race')}
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="border-0 text-center position-sticky bg-light">
                  {t('global.extra')}
               </th>
               <th style={{ minWidth: '30px', top: '0' }} className="border-0 text-center position-sticky bg-light">
                  {t('global.total')}
               </th>
            </tr>
         </thead>
         {loading ? (
            <tbody>
               {[...Array(10)].map((_, i) => (
                  <tr key={i}>
                     {[...Array(5)].map((_, j) => (
                        <td key={j}>
                           <Placeholder animation="glow">
                              <Placeholder className="rounded-1" xs={12} />
                           </Placeholder>
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
         ) : (
            <tbody>
               {(results || [])
                  .sort((a, b) => (a.total_points < b.total_points ? 1 : -1))
                  .map((result) => {
                     return (
                        <tr key={result.id}>
                           <td>
                              <span className="me-1">{result?.user?.first_name}</span>
                              <span>{result?.user?.last_name.charAt(0)}.</span>
                           </td>
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
         )}
      </Table>
   );
};

export default Summary;
