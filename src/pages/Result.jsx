import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useNavbar } from '../core/hooks/useNavbar';

const Result = () => {
   const { id } = useParams();
   const { goBack } = useHistory();
   useNavbar({
      leftAction: goBack,
      leftActionIcon: 'fa-arrow-left',
   });

   return <div>{id}</div>;
};

export default Result;
