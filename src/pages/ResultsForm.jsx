import React, { useMemo } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import { Prompt, useHistory, useParams } from 'react-router';

import validationSchema from '../core/validation-schemas/predictionSchema';
import { usePost } from '../core/hooks/usePost';
import { API_GRAND_PRIX, API_RESULTS } from '../core/endpoints/endpoints';
import { useNavbar } from '../core/hooks/useNavbar';
import QualifyingForm from '../components/GeneralForm/QualifyingForm';
import RaceForm from '../components/GeneralForm/RaceForm';
import ExtraForm from '../components/GeneralForm/ExtraForm';
import { useGet } from '../core/hooks/useGet';

const ResultsForm = () => {
   const [enableValidation, setEnableValidation] = React.useState(false);
   const [stepIndex, setStepIndex] = React.useState(0);

   const { id } = useParams();
   const { push, goBack } = useHistory();

   const { data: grandPrix } = useGet(`${API_GRAND_PRIX}/${id}`);

   const navbar = useMemo(
      () => ({
         title: `${grandPrix?.name} - Results` || 'Loading...',
         leftAction: goBack,
         leftActionIcon: 'fa-arrow-left',
         showBottomNav: false,
      }),
      [grandPrix]
   );

   useNavbar(navbar);

   const { fetch, loading } = usePost();

   async function handleSubmitPrediction(prediction) {
      await fetch(API_GRAND_PRIX + `/${id}` + API_RESULTS, {
         result_entries: Object.entries(prediction).map(([key, value]) => ({ name: key, driver_id: value })),
      }).then(() => {
         push('/admin');
      });
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

   return (
      <Formik
         validationSchema={validationSchema[stepIndex]}
         validateOnChange={enableValidation}
         validateOnBlur={enableValidation}
         initialValues={{}}
         onSubmit={handleSubmitPrediction}
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

export default ResultsForm;
