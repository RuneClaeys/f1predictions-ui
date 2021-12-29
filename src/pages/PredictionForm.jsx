import React, { useMemo } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Prompt, useHistory, useParams } from 'react-router';

import validationSchema from '../core/validation-schemas/predictionSchema';
import { usePost } from '../core/hooks/usePost';
import { API_GRAND_PRIX, API_PREDICTIONS } from '../core/endpoints/endpoints';
import { useNavbar } from '../core/hooks/useNavbar';
import { useEffect } from 'react';
import { useGet } from '../core/hooks/useGet';
import { useStore } from '../core/hooks/useStore';
import { usePut } from '../core/hooks/usePut';
import QualifyingForm from '../components/GeneralForm/QualifyingForm';
import RaceForm from '../components/GeneralForm/RaceForm';
import ExtraForm from '../components/GeneralForm/ExtraForm';

const PredictionForm = () => {
   const [enableValidation, setEnableValidation] = React.useState(false);
   const [stepIndex, setStepIndex] = React.useState(0);

   const { id } = useParams();
   const { push, goBack } = useHistory();
   const { dispatch } = useStore();

   const { data: grandPrix, loading: loadingGP } = useGet(`${API_GRAND_PRIX}/${id}`);

   useEffect(() => {
      if (grandPrix && new Date(grandPrix.qualifying_start_timestamp) < new Date()) {
         dispatch({
            type: 'NOTIFY',
            payload: {
               id: new Date().getTime(),
               text: `Grand Prix has already passed`,
               delay: 5000,
               type: 'danger',
            },
         });
         push(`/`);
      }
   }, [grandPrix]);

   const options = useMemo(
      () => ({
         leftAction: goBack,
         leftActionIcon: 'fa-arrow-left',
         showBottomNav: false,
      }),
      [goBack]
   );

   useNavbar(options);

   const { fetch: post, loading: loadingCreate } = usePost();
   const { fetch: put, loading: loadingPut } = usePut();

   async function handleSubmitPrediction(prediction) {
      if (grandPrix?.user_prediction) {
         return await put(API_PREDICTIONS + `/${grandPrix.user_prediction.id}`, {
            result_entries: Object.entries(prediction).map(([key, value]) => ({ name: key, driver_id: value })),
         }).then(() => push('/'));
      } else {
         return await post(API_GRAND_PRIX + `/${id}` + API_PREDICTIONS, {
            prediction_entries: Object.entries(prediction).map(([key, value]) => ({ name: key, driver_id: value })),
         }).then(() => push('/'));
      }
   }

   async function handleNext(validateForm) {
      const fields = await validateForm();
      if (Object.keys(fields).length <= 0) {
         setStepIndex(stepIndex + 1);
         setEnableValidation(false);
      } else {
         setEnableValidation(true);
      }
   }

   function handlePrev() {
      setStepIndex(stepIndex - 1);
   }

   const loading = useMemo(() => loadingGP || loadingCreate || loadingPut, [loadingGP, loadingCreate, loadingPut]);

   const initialValues = useMemo(() => {
      if (!grandPrix?.user_prediction) return {};
      return grandPrix.user_prediction.prediction_entries.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.driver.id }), {});
   }, [grandPrix]);

   return (
      <div className="form-container">
         <Formik
            validationSchema={validationSchema[stepIndex]}
            validateOnChange={enableValidation}
            validateOnBlur={enableValidation}
            initialValues={initialValues}
            onSubmit={handleSubmitPrediction}
            enableReinitialize
         >
            {({ handleSubmit, handleChange, values, errors, validateForm, dirty, submitCount }) => (
               <>
                  <Prompt when={dirty && submitCount < 1} message="You have unsaved changes, are you sure you want to leave?" />
                  <Form
                     noValidate
                     onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                        setEnableValidation(true);
                     }}
                  >
                     {stepIndex === 0 && <QualifyingForm handleChange={handleChange} errors={errors} values={values} disabled={loading} />}
                     {stepIndex === 1 && <RaceForm handleChange={handleChange} errors={errors} values={values} disabled={loading} />}
                     {stepIndex === 2 && <ExtraForm handleChange={handleChange} errors={errors} values={values} disabled={loading} />}

                     <div className="d-flex py-3 w-10 position-sticky bg-white gap-4" style={{ bottom: 0 }}>
                        {stepIndex !== 0 && (
                           <Button onClick={handlePrev} variant="outline-primary" type="button" className="col-3" disabled={loading}>
                              <i className="fas fa-arrow-left"></i>
                              <span className="ms-3">Back</span>
                           </Button>
                        )}
                        {stepIndex < 2 && (
                           <Button
                              onClick={() => handleNext(validateForm)}
                              variant="primary"
                              type="button"
                              className="col text-nowrap"
                              disabled={loading}
                           >
                              <span className="me-3">Next</span>
                              <i className="fas fa-arrow-right"></i>
                           </Button>
                        )}
                        {stepIndex === 2 && (
                           <Button variant="primary" type="submit" className="col" disabled={loading}>
                              <span className="me-3">Save</span>
                              <i className="fas fa-save"></i>
                           </Button>
                        )}
                     </div>
                  </Form>
               </>
            )}
         </Formik>
      </div>
   );
};

export default PredictionForm;
