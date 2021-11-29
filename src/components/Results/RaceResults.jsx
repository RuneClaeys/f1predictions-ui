const RaceResults = ({ open }) => {
   return (
      <div className="card">
         <details className="card-body" open={open}>
            <summary>Race results</summary>
            <table className="table mt-2">
               <thead>
                  <tr>
                     <th className="w-100 px-2">Prediction</th>
                     <th className="text-nowrap px-2 text-center">Result</th>
                     <th className="text-nowrap px-2 text-center">Points</th>
                  </tr>
               </thead>
               <tbody>
                  {[...Array(10)].map((_, i) => (
                     <tr key={i}>
                        <td className="p-2">Max Verstappen</td>
                        <td className="p-2 text-center">P2</td>
                        <td className="p-2 text-center">3</td>
                     </tr>
                  ))}
                  <tr>
                     <td className="p-2">
                        <strong>Total</strong>
                     </td>
                     <td className="p-2 text-center"></td>
                     <td className="p-2 text-center">
                        <strong>21</strong>
                     </td>
                  </tr>
               </tbody>
            </table>
         </details>
      </div>
   );
};

export default RaceResults;
