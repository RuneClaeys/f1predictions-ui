import { useMemo } from 'react';

const RaceResults = ({ grandPrix, open }) => {
   const racePredictions = useMemo(
      () =>
         grandPrix?.user_prediction?.prediction_entries
            ?.filter((prediction) => prediction.name.startsWith('RACE'))
            ?.sort((a, b) => a.name.localeCompare(b.name)),
      [grandPrix]
   );

   const raceResults = useMemo(
      () =>
         grandPrix?.result?.result_entries
            ?.filter((result) => result.name.startsWith('RACE'))
            ?.sort((a, b) => a.name.localeCompare(b.name)),
      [grandPrix]
   );
   return (
      <div className="card">
         <details className="card-body" open={open}>
            <summary>Race results</summary>
            <table className="table mt-2">
               <thead>
                  <tr>
                     <th className="px-2">Prediction</th>
                     <th className="text-nowrap px-2">Result</th>
                     <th className="text-nowrap px-2 text-center">Points</th>
                  </tr>
               </thead>
               <tbody>
                  {racePredictions?.map((prediction, i) => (
                     <tr key={i}>
                        <td className="p-2">
                           <strong>{i + 1}. </strong>
                           <span>
                              {prediction?.driver?.first_name.charAt(0)}. {prediction?.driver?.last_name}
                           </span>
                        </td>
                        <td className="p-2">
                           {raceResults?.length > 0 ? (
                              <span>
                                 {raceResults[i]?.driver?.first_name.charAt(0)}. {raceResults[i]?.driver?.last_name}
                              </span>
                           ) : (
                              <span>-</span>
                           )}
                        </td>
                        <td className="p-2 text-center">{prediction?.points || '-'}</td>
                     </tr>
                  ))}
                  <tr>
                     <td className="p-2">
                        <strong>Total</strong>
                     </td>
                     <td className="p-2 text-center"></td>
                     <td className="p-2 text-center">
                        <strong>{grandPrix?.user_prediction?.race_points}</strong>
                     </td>
                  </tr>
               </tbody>
            </table>
         </details>
      </div>
   );
};

export default RaceResults;
