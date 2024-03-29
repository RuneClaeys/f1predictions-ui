import { format } from 'date-fns';
import { useEffect, useState, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API_GRAND_PRIX, API_SEASONS } from '../core/endpoints/endpoints';
import { useGet } from '../core/hooks/useGet';
import { usePost } from '../core/hooks/usePost';
import { usePut } from '../core/hooks/usePut';
import { useStore } from '../core/hooks/useStore';

const AddGrandPrix = () => {
   const [gp, setGP] = useState({});
   const { id } = useParams();
   const { push } = useHistory();
   const { state, dispatch } = useStore();
   const { current_season } = state;

   const { fetch: fetchGet } = useGet(null, { initialFetch: false });
   const { loading, fetch } = usePost();

   async function handleAddGrandPrix(event) {
      event.preventDefault();

      await fetch(`${API_GRAND_PRIX}`, {
         ...gp,
         season_id: current_season.id,
         race_start_timestamp: new Date(gp.race_start_timestamp).getTime(),
         qualifying_start_timestamp: new Date(gp.qualifying_start_timestamp).getTime(),
      });
      await fetchGet(`${API_SEASONS}/${current_season.id}${API_GRAND_PRIX}`).then((grandPrix) =>
         dispatch({
            type: 'SET_GRAND_PRIX',
            payload: grandPrix.sort((a, b) => new Date(a.qualifying_start_timestamp) - new Date(b.qualifying_start_timestamp)),
         })
      );
      push('/admin');
   }

   return (
      <div>
         <form className="d-flex flex-column gap-3" onSubmit={handleAddGrandPrix}>
            <label className="d-flex flex-column">
               Event
               <input
                  className="form-control"
                  value={gp.event}
                  type="text"
                  name="event"
                  placeholder="example: 01"
                  required
                  disabled={loading}
                  onChange={(e) => setGP({ ...gp, event: e.target.value })}
               />
            </label>

            <label className="d-flex flex-column">
               Naam
               <input
                  className="form-control"
                  value={gp.name}
                  type="text"
                  name="name"
                  required
                  disabled={loading}
                  onChange={(e) => setGP({ ...gp, name: e.target.value })}
               />
            </label>

            <label className="d-flex flex-column">
               Start Quali
               <input
                  className="form-control"
                  value={gp.qualifying_start_timestamp}
                  type="datetime-local"
                  name="qualifying_start_timestamp"
                  required
                  disabled={loading}
                  onChange={(e) => setGP({ ...gp, qualifying_start_timestamp: e.target.value })}
               />
            </label>

            <label className="d-flex flex-column">
               Start Race
               <input
                  className="form-control"
                  value={gp.race_start_timestamp}
                  type="datetime-local"
                  name="race_start_timestamp"
                  required
                  disabled={loading}
                  onChange={(e) => setGP({ ...gp, race_start_timestamp: e.target.value })}
               />
            </label>

            <button className="btn btn-primary" disabled={loading}>
               Opslaan
            </button>
         </form>
      </div>
   );
};

export default AddGrandPrix;
