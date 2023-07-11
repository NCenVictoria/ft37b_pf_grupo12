import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserById from '../../components';

const userProfile = () => {
  return (
    <div>
      <UserById/>
    </div>
  );
}

export default userProfile;