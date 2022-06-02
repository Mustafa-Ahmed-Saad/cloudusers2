import React, { useState, useEffect } from 'react';
import { GetUser } from '../api/users';
import ViewUser from '../components/viewUser';
import { useParams } from 'react-router-dom';
import Loading from '../components/loading';

const Userpage = () => {
  const [user, setUser] = useState({ name: '', email: '', address: { city: '' }, company: { name: '' } });
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  const { userId } = useParams();

  // get id user from server
  useEffect(() => {
    setLoad(true);
    GetUser(userId)
      .then((response) => {
        setUser({ ...response.data });
        setLoad(false);
        setError(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(true);
        alert('get user error');
      });
  }, []);

  if (load) {
    return <Loading />;
  } else if (error) {
    return <div className="apiError">error please tray again later</div>;
  } else {
    return (
      <div>
        <ViewUser user={user} />
      </div>
    );
  }
};

export default Userpage;
