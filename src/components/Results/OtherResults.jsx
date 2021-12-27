import { useMemo } from 'react';

const OtherResults = ({ open, grandPrix }) => {
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
            <summary>Other results</summary>
            <table className="table mt-2">
               <thead>
                  <tr>
                     <th className="px-2">Prediction</th>
                     <th className="text-nowrap px-2 ">Result</th>
                     <th className="text-nowrap px-2 text-center">Points</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th colSpan="3" className="w-100 px-2">
                        First DNF
                     </th>
                  </tr>
                  <tr>
                     <td className="p-2">
                        {firstDNF?.driver?.first_name.charAt(0)}. {firstDNF?.driver?.last_name}
                     </td>
                     <td className="p-2">
                        {firstDNFResult?.driver?.first_name.charAt(0)}. {firstDNFResult?.driver?.last_name}
                     </td>
                     <td className="p-2 text-center">{firstDNF?.points}</td>
                  </tr>
                  <tr>
                     <th colSpan="3" className="w-100 px-2">
                        DHL Fastest Lap
                     </th>
                  </tr>
                  <tr>
                     <td className="p-2">
                        {fastestLap?.driver?.first_name.charAt(0)}. {fastestLap?.driver?.last_name}
                     </td>
                     <td className="p-2">
                        {fastestLapResult?.driver?.first_name.charAt(0)}. {fastestLapResult?.driver?.last_name}
                     </td>
                     <td className="p-2 text-center">{fastestLap?.points}</td>
                  </tr>
                  <tr>
                     <td className="p-2">
                        <strong>Total</strong>
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
