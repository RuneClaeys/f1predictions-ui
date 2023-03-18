import { useEffect } from 'react';
import { useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import { useGet } from '../../core/hooks/useGet';
import { useStore } from '../../core/hooks/useStore';
import { API_SEASONS } from '../../core/endpoints/endpoints';
import Placeholder from 'react-bootstrap/Placeholder';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PerRace = () => {
   const { current_season, grandPrix } = useStore().state;
   const { fetch, data: details, loading } = useGet(null, { initialFetch: false });
   const { t } = useTranslation();

   useEffect(() => {
      if (current_season) {
         fetch(`${API_SEASONS}/${current_season.id}/detail`);
      }
   }, [current_season]);

   const perRace = useMemo(() => {
      return (details || []).map((detail) => ({
         ...detail,
         grandprix: (grandPrix || []).map((gp) => ({
            ...gp,
            total_points: detail.grandprix.find((dgp) => dgp.id === gp.id)?.total_points,
         })),
      }));
   }, [details, grandPrix]);

   return (
      <Table className="mb-0 " striped>
         <thead>
            <tr className="border-0">
               <th className="position-sticky bg-light " style={{ left: '0', top: '0', zIndex: '1020', borderLeft: '0px' }}>
                  {t('leaderboard.player')}
               </th>
               {(grandPrix || []).map((gp) => {
                  return (
                     <th key={gp.id} className="text-nowrap text-center position-sticky bg-light" style={{ top: '0' }}>
                        {gp.name}
                     </th>
                  );
               })}
               <th className="position-sticky bg-light" style={{ right: '0', top: '0', zIndex: '1020', borderRight: '0px' }}>
                  {t('global.total')}
               </th>
            </tr>
         </thead>
         {loading ? (
            <tbody>
               {[...Array(10)].map((_, i) => (
                  <tr key={i}>
                     {[...Array(15)].map((_, j) => (
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
               {(perRace || []).map((detail) => {
                  return (
                     <tr key={detail.user_id}>
                        <td className="position-sticky bg-white text-nowrap" style={{ left: '0', borderLeft: '0px' }}>
                           {detail.first_name} {detail.last_name.charAt(0)}.
                        </td>
                        {(detail?.grandprix || []).map((gp) => {
                           return (
                              <td className="text-center" key={gp.id}>
                                 {new Date(gp.qualifying_start_timestamp).getTime() < new Date().getTime() ? (
                                    <Link
                                       to={`/result/${gp.id}?user_id=${detail.user_id}&user_name=${detail.first_name} ${detail.last_name}`}
                                    >
                                       {gp.total_points || '-'}
                                    </Link>
                                 ) : (
                                    gp.total_points || '-'
                                 )}
                              </td>
                           );
                        })}
                        <td className="position-sticky bg-white text-center" style={{ right: '0', borderRight: '0px' }}>
                           <strong>{detail.total_points}</strong>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         )}
      </Table>
   );
};

export default PerRace;
