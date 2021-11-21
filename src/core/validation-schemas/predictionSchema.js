import * as yup from 'yup';

export default [
   yup.object().shape({
      QUALIFYING_1: yup.string().required('Required'),
      QUALIFYING_2: yup.string().required('Required'),
      QUALIFYING_3: yup.string().required('Required'),
      QUALIFYING_4: yup.string().required('Required'),
      QUALIFYING_5: yup.string().required('Required'),
   }),
   yup.object().shape({
      RACE_1: yup.string().required('Required'),
      RACE_2: yup.string().required('Required'),
      RACE_3: yup.string().required('Required'),
      RACE_4: yup.string().required('Required'),
      RACE_5: yup.string().required('Required'),
      RACE_6: yup.string().required('Required'),
      RACE_7: yup.string().required('Required'),
      RACE_8: yup.string().required('Required'),
      RACE_9: yup.string().required('Required'),
      RACE_10: yup.string().required('Required'),
   }),
   yup.object().shape({
      FIRST_DNF: yup.string().required('Required'),
      FASTEST_LAP: yup.string().required('Required'),
   }),
];
