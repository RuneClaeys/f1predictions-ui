import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import QualifyingForm from '../components/QualifyingForm';
import RaceForm from '../components/RaceForm';
import ExtraForm from '../components/ExtraForm';
import { Prompt, useHistory, useParams } from 'react-router';

import validationSchema from '../core/validation-schemas/predictionSchema';
import { usePost } from '../core/hooks/usePost';
import { API_GRAND_PRIX, API_PREDICTIONS } from '../core/endpoints/endpoints';
import { useStore } from '../core/hooks/useStore';

const PredictionForm = () => {
   const [enableValidation, setEnableValidation] = React.useState(false);
   const [stepIndex, setStepIndex] = React.useState(0);

   const { id } = useParams();
   const { push, goBack } = useHistory();
   const { dispatch } = useStore();

   const { fetch, loading } = usePost();

   async function handleSubmitPrediction(prediction) {
      await fetch(API_GRAND_PRIX + `/${id}` + API_PREDICTIONS, {
         prediction_entries: Object.entries(prediction).map(([key, value]) => ({ name: key, driver_id: value })),
      }).then(() => push('/'));
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

   useEffect(() => {
      dispatch({
         type: 'SET_NAVBAR',
         payload: {
            leftAction: goBack,
            leftActionIcon: 'fa-arrow-left',
         },
      });
   }, []);

   return (
      <Formik
         validationSchema={validationSchema[stepIndex]}
         validateOnChange={enableValidation}
         validateOnBlur={enableValidation}
         initialValues={{}}
         onSubmit={handleSubmitPrediction}
      >
         {({ handleSubmit, handleChange, values, errors, validateForm, dirty }) => (
            <>
               <Prompt when={dirty} message="You have unsaved changes, are you sure you want to leave?" />
               <Form
                  noValidate
                  onSubmit={(e) => {
                     e.preventDefault();
                     handleSubmit();
                     setEnableValidation(true);
                  }}
               >
                  {stepIndex === 0 && (
                     <QualifyingForm
                        handleChange={handleChange}
                        errors={errors}
                        values={values}
                        disabled={loading}
                        onNext={() => handleNext(validateForm)}
                     />
                  )}
                  {stepIndex === 1 && (
                     <RaceForm
                        handleChange={handleChange}
                        errors={errors}
                        values={values}
                        disabled={loading}
                        onNext={() => handleNext(validateForm)}
                        onPrev={handlePrev}
                     />
                  )}
                  {stepIndex === 2 && (
                     <ExtraForm handleChange={handleChange} errors={errors} values={values} disabled={loading} onPrev={handlePrev} />
                  )}
               </Form>
            </>
         )}
      </Formik>
   );
};

export default PredictionForm;
