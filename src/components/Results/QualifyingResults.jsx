import { useMemo } from 'react';

const QualifyingResults = ({ grandPrix, open }) => {
   const qualifyingPredictions = useMemo(
      () =>
         grandPrix?.user_prediction?.prediction_entries
            ?.filter((prediction) => prediction.name.startsWith('QUALIFYING'))
            ?.sort((a, b) => a.name.localeCompare(b.name)),
      [grandPrix]
   );

   const qualifyingResults = useMemo(
      () =>
         grandPrix?.result?.result_entries
            ?.filter((result) => result.name.startsWith('QUALIFYING'))
            ?.sort((a, b) => a.name.localeCompare(b.name)),
      [grandPrix]
   );
   return (
      <div className="card">
         <details className="card-body" open={open}>
            <summary>Qualifying results</summary>
            <table className="table mt-2">
               <thead>
                  <tr>
                     <th className=" px-2">Prediction</th>
                     <th className="text-nowrap px-2 ">Result</th>
                     <th className="text-nowrap px-2 text-center">Points</th>
                  </tr>
               </thead>
               <tbody>
                  {qualifyingPredictions?.map((prediction, i) => (
                     <tr key={i}>
                        <td className="p-2 ">
                           <strong>{i + 1}. </strong>
                           <span>
                              {prediction?.driver?.first_name.charAt(0)} {prediction?.driver?.last_name}
                           </span>
                        </td>
                        <td className="p-2 ">
                           {qualifyingResults?.length > 0 ? (
                              <span>
                                 {qualifyingResults[i]?.driver?.first_name.charAt(0)}. {qualifyingResults[i]?.driver?.last_name}
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
                        <strong>{grandPrix?.user_prediction?.qualifying_points}</strong>
                     </td>
                  </tr>
               </tbody>
            </table>
         </details>
      </div>
   );
};

export default QualifyingResults;
