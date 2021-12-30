import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const OtherResults = ({ open, grandPrix }) => {
   const { t } = useTranslation();
   const firstDNF = useMemo(
      () => grandPrix?.user_prediction?.prediction_entries?.find((prediction) => prediction.name.startsWith('FIRST_DNF')),
      [grandPrix]
   );

   const firstDNFResult = useMemo(
      () => grandPrix?.result?.result_entries?.find((result) => result.name.startsWith('FIRST_DNF')),
      [grandPrix]
   );

   const fastestLap = useMemo(
      () => grandPrix?.user_prediction?.prediction_entries?.find((prediction) => prediction.name.startsWith('FASTEST_LAP')),
      [grandPrix]
   );

   const fastestLapResult = useMemo(
      () => grandPrix?.result?.result_entries?.find((result) => result.name.startsWith('FASTEST_LAP')),
      [grandPrix]
   );
   return (
      <div className="card">
         <details className="card-body" open={open}>
            <summary>{t('result.other-result')}</summary>
            <table className="table mt-2">
               <thead>
                  <tr>
                     <th className="px-2">{t('result.prediction')}</th>
                     <th className="text-nowrap px-2 ">{t('result.result')}</th>
                     <th className="text-nowrap px-2 text-center">{t('global.points')}</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th colSpan="3" className="w-100 px-2">
                        {t('global.first-dnf')}
                     </th>
                  </tr>
                  <tr>
                     <td className="p-2">
                        {firstDNF ? (
                           <span>
                              {firstDNF?.driver?.first_name.charAt(0)}. {firstDNF?.driver?.last_name}
                           </span>
                        ) : (
                           <span>-</span>
                        )}
                     </td>
                     <td className="p-2">
                        {firstDNFResult ? (
                           <span>
                              {firstDNFResult?.driver?.first_name.charAt(0)}. {firstDNFResult?.driver?.last_name}
                           </span>
                        ) : (
                           <span>-</span>
                        )}
                     </td>
                     <td className="p-2 text-center">{firstDNF?.points || '-'}</td>
                  </tr>
                  <tr>
                     <th colSpan="3" className="w-100 px-2">
                        {t('global.fastest-lap')}
                     </th>
                  </tr>
                  <tr>
                     <td className="p-2">
                        {fastestLap ? (
                           <span>
                              {fastestLap?.driver?.first_name.charAt(0)}. {fastestLap?.driver?.last_name}
                           </span>
                        ) : (
                           <span>-</span>
                        )}
                     </td>
                     <td className="p-2">
                        {fastestLapResult ? (
                           <span>
                              {fastestLapResult?.driver?.first_name.charAt(0)}. {fastestLapResult?.driver?.last_name}
                           </span>
                        ) : (
                           <span>-</span>
                        )}
                     </td>
                     <td className="p-2 text-center">{fastestLap?.points || '-'}</td>
                  </tr>
                  <tr>
                     <td className="p-2">
                        <strong>{t('global.total')}</strong>
                     </td>
                     <td className="p-2 text-center"></td>
                     <td className="p-2 text-center">
                        <strong>{grandPrix?.user_prediction?.other_points}</strong>
                     </td>
                  </tr>
               </tbody>
            </table>
         </details>
      </div>
   );
};

export default OtherResults;
