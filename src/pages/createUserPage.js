import React, { useState } from 'react';
import { addUser } from '../api/users';
import UsersForm from '../components/usersForm';
import { Link } from 'react-router-dom';
import Loading from './../components/loading';

const CreateUser = () => {
  const [user, setUser] = useState({ name: '', email: '', username: '', address: { city: '' }, company: { name: '' } });
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  // when user want to add user and click add button to submit
  const checkAndAddUser = (values) => {
    setLoad(true);
    setUser({ ...values });
    // add user api
    addUser(values)
      .then(() => {
        alert('add user success');
        setUser({
          ...user,
          name: '',
          email: '',
          username: '',
        });
        setLoad(false);
        setError(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(true);
        alert('add user error');
      });
  };

  if (load) {
    return <Loading />;
  } else if (error) {
    return <div className="apiError">error please tray again later</div>;
  } else {
    return (
      <div className="create-user">
        <h2>add user</h2>
        <UsersForm values={user} onSubmit={checkAndAddUser} />
        <div className="back">
          <span>
            <Link className="btn btn-secondary" to="/cloudusers2/users/">
              back to all users
            </Link>
          </span>
        </div>
      </div>
    );
  }
};

export default CreateUser;
