const OtherResults = ({ open }) => {
   return (
      <div className="card">
         <details className="card-body" open={open}>
            <summary>Other results</summary>
            <table className="table mt-2">
               <thead>
                  <tr>
                     <th className="w-100 px-2">Prediction</th>
                     <th className="text-nowrap px-2 text-center">Result</th>
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
                     <td className="p-2">Max Verstappen</td>
                     <td className="p-2 text-center">NO</td>
                     <td className="p-2 text-center">0</td>
                  </tr>
                  <tr>
                     <th colSpan="3" className="w-100 px-2">
                        DHL Fastest Lap
                     </th>
                  </tr>
                  <tr>
                     <td className="p-2">Max Verstappen</td>
                     <td className="p-2 text-center">NO</td>
                     <td className="p-2 text-center">0</td>
                  </tr>
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

export default OtherResults;
